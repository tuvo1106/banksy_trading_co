/* modules */
import React from 'react'

/* icons */
import { FaGithub } from 'react-icons/fa'

/* styles */
import './footer.styles.scss'

const Footer = (): JSX.Element => {
  return (
    <div className="footer-container">
      <p>
        Made by
        <a style={{ color: 'grey' }} href="https://github.com/tuvo1106">
          {' '}
          Tu{' '}
        </a>
        and
        <a style={{ color: 'grey' }} href="https://github.com/narnat">
          {' '}
          Farrukh{'  '}
        </a>{' '}
        <FaGithub style={{ fontSize: '25px' }} />
      </p>
    </div>
  )
}

export default Footer
