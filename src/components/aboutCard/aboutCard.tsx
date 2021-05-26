import React from 'react';

import * as styles from './aboutCard.module.css';
import profilePic from '../../images/profile_optimised.jpg';
import { Socials } from '../socials/socials';

var classNames = require('classnames');

export const AboutCard = () => {
  return (
    <div className={classNames(styles.cardContainer)}>
      <div className={classNames(styles.aboutContainer)}>
        <div className={styles.textContainer}>
          <h1 className={classNames(styles.aboutHeading)}>Hey! I'm Anh 👋</h1>
          <p className={classNames(styles.aboutText)}>
            By day I'm a Software Engineer at Canva. By night I experiment with
            interesting datasets. Previously I worked with the Data Assurance
            team at PwC and as a Backend Engineer with Unocart. Outside of work,
            I'm a board member at TEDxUWA helping the team spread great ideas
            with the community.
          </p>
          <Socials />
        </div>
      </div>
      <div className={classNames(styles.imageContainer)}>
        <img src={profilePic} className={classNames(styles.profilePic)} />
      </div>
    </div>
  );
};
