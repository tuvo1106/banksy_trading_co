import axios from 'axios'

import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.types'
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
  signUpSuccess
} from './user.actions'

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from '../../firebase/firebase.utils'

export function* getSnapshotFromUserAuth(userAuth: any, additionalData = null) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    )
    const userSnapshot = yield userRef.get()
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* signInWithEmail({ payload: { email, password } }: any) {
  try {
    const data = yield axios({
      url: '/users/login',
      method: 'post',
      data: {
        email: email,
        password: password
      }
    })
    yield put(signInSuccess({ email, password }))
  } catch (error) {
    alert('Wrong username/password')
    yield put(signInFailure(error))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser()
    if (!userAuth) return
    yield getSnapshotFromUserAuth(userAuth)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* signOut() {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error))
  }
}

export function* signUp({ payload: { displayName, email, password } }: any) {
  try {
    /* const { user } = yield auth.createUserWithEmailAndPassword(email, password)
    yield createUserProfileDocument(user, { displayName }) */

    const { data } = yield axios({
      url: '/users/register',
      method: 'post',
      data: {
        name: displayName,
        email,
        password,
        password2: password
      }
    })
    yield put(
      signUpSuccess({
        user: { email: data.email, password: data.password },
        additionalData: { displayName: data.name }
      })
    )
  } catch (error) {
    alert('Email already exists or passwords do not match')
    yield put(signUpFailure())
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }: any) {
  yield getSnapshotFromUserAuth(user, additionalData)
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(isUserAuthenticated),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ])
}
