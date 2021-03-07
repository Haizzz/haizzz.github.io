import React from 'react';
import { Link } from 'gatsby';

import styles from './header.module.css';

var classNames = require('classnames');

export const Header = () => {
  return (
    <>
      <div
        className={classNames(
          'pure-menu',
          'pure-menu-horizontal',
          styles.navContainer
        )}
      >
        {/* <Link
          to='/'
          className={classNames(
            'pure-menu-heading',
            styles.navText,
            styles.navTitle
          )}
        >
          Anh Le
        </Link>
        <ul className={classNames('pure-menu-list', styles.subNav)}>
          <li className={classNames('pure-menu-item')}>
            <Link
              to='/'
              className={classNames('pure-menu-link', styles.navText)}
            >
              Projects
            </Link>
          </li>
          <li className={classNames('pure-menu-item')}>
            <Link
              to='/'
              className={classNames('pure-menu-link', styles.navText)}
            >
              Contact
            </Link>
          </li>
        </ul> */}
      </div>
      <div className={styles.headerOffset}></div>
    </>
  );
};
