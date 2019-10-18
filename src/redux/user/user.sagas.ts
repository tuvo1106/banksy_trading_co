import { takeLatest, put, all, call } from "redux-saga/effects"
import UserActionTypes from "./user.types"
import { signInSuccess, signInFailure } from "./user.actions"

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from "../../firebase/firebase.utils"

export function* getSnapshotFromUserAuth(userAuth: any) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, null)
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
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
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

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(isUserAuthenticated)
  ])
}
