import React from 'react';
import styles from './styles.module.css';

export default function HomeNavigation({ activeTab, changeActiveTab }) {
  const getFeedActiveIndicatorStyle = () => {
    return activeTab == 'feed' ? styles.activeSignOn : styles.activeSign;
  };

  const getPeopleActiveIndicatorStyle = () => {
    return activeTab == 'people' ? styles.activeSignOn : styles.activeSign;
  };

  const getTrendingFeedActiveIndicatorStyle = () => {
    return activeTab == 'trending' ? styles.activeSignOn : styles.activeSign;
  };

  return (
    <div className={styles.headerNavigation}>
      <div onClick={() => changeActiveTab('feed')}>
        <p>FEED</p>
        <div className={getFeedActiveIndicatorStyle()}></div>
      </div>
      <div onClick={() => changeActiveTab('people')}>
        <p>PEOPLE</p>
        <div className={getPeopleActiveIndicatorStyle()}></div>
      </div>
      <div onClick={() => changeActiveTab('trending')}>
        <p>TRENDING</p>
        <div className={getTrendingFeedActiveIndicatorStyle()}></div>
      </div>
    </div>
  );
}
