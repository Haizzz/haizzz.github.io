import React from 'react';
import { Link } from 'gatsby';

import styles from './header.module.css';

var classNames = require('classnames');

export const Header = () => {
  return (
    <div className={classNames('pure-menu', 'pure-menu-horizontal')}>
      <Link
        to='/'
        className={classNames(
          'pure-menu-heading',
          styles.navText,
          styles.navTitle
        )}
      >
        Anh Le
      </Link>
      <ul className={classNames('pure-menu-list')}>
        <li className={classNames('pure-menu-item', styles.navText)}>
          <Link to='/' className='pure-menu-link'>
            Home
          </Link>
        </li>
        <li className={classNames('pure-menu-item', styles.navText)}>
          <Link to='/' className='pure-menu-link'>
            Projects
          </Link>
        </li>
        <li className={classNames('pure-menu-item', styles.navText)}>
          <Link to='/' className='pure-menu-link'>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
