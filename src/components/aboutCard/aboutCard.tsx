import React from 'react';

import styles from './aboutCard.module.css';
import profilePic from '../../images/profile_big.jpg';

var classNames = require('classnames');

export const AboutCard = () => {
  return (
    <div className={classNames(styles.cardContainer)}>
      <div className={classNames(styles.aboutContainer)}>
        <div className={styles.textContainer}>
          <h1 className={classNames(styles.aboutHeading)}>Hi, I'm Anh 👋</h1>
          <p className={classNames(styles.aboutText)}>
            By day I'm a software engineer at Canva. By night I experiment with
            interesting datasets. Previously I worked with the Data Assurance
            team at PwC and as a Backend Engineer with Unocart. Outside of work,
            I'm a board member at TEDxUWA helping the team spread great ideas
            with the community.
          </p>
        </div>
      </div>
      <div className={classNames(styles.imageContainer)}>
        <img src={profilePic} className={classNames(styles.profilePic)} />
      </div>
    </div>
  );
};
