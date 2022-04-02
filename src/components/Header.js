import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <>
      <h1 className={classes.title}>Наши топ-блогеры</h1>
      <p className={classes.text}>
        Лучше специалисты в своем деле, средний опыт работы в профессии - 27 лет
      </p>
    </>
  );
};

export default Header;
