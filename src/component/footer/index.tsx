import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer>
		<div className="container-fluid padding">
			<div className="text-center">
				<div className={`${styles.social}`}>
					<h2>Connect</h2>
					<hr />
					<a target='blank' href="https://www.linkedin.com/in/john-masangcay-255048231/"><FontAwesomeIcon className={`${styles.falinkedin}`} icon={faLinkedin} /></a>
					<a target='blank' href="https://github.com/Johnmasangcay"><FontAwesomeIcon className={`${styles.fagithub}`} icon={faGithub} /></a>
				</div>
			</div>
		</div>
	</footer>
  )
}

export default Footer