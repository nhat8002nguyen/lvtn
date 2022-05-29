import { Twitter } from '@material-ui/icons';
import React from 'react';
import { PrimaryButton } from '../mocules';
import styles from './styles.module.css';
import {
  AccountCircleRounded,
  ExitToAppRounded,
  ExploreRounded,
  HomeRounded,
  TranslateRounded,
  WebRounded,
  WhatshotRounded,
} from '@material-ui/icons';

export default function LeftSide() {
  const menuItems = [
    { id: 0, icon: <HomeRounded />, name: 'FEED' },
    { id: 1, icon: <AccountCircleRounded />, name: 'PROFILE' },
    { id: 2, icon: <ExploreRounded />, name: 'EXPLORE' },
    { id: 3, icon: <TranslateRounded />, name: 'LANGUAGE' },
    { id: 4, icon: <ExitToAppRounded />, name: 'LOGOUT' },
    { id: 5, icon: <WebRounded />, name: 'PAGES' },
    { id: 6, icon: <WhatshotRounded />, name: 'TRENDING' },
  ];

  return (
    <div className={styles.menu}>
      <div className={styles.fixedArea}>
        <div className={styles.iconContainer}>
          <Twitter style={{ color: 'rgb(101, 165, 255)' }} fontSize="large" />
        </div>
        <div className={styles.menuItemList}>
          {menuItems.map((item) => (
            <div key={item.id} className={styles.menuItem}>
              {item.icon}
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <PrimaryButton name="SIGN IN +" />
      </div>
    </div>
  );
}
