import React from 'react';
import styles from './button.module.scss';

const Button = ({ label }) => {
  return <button className={styles['button']}>{label}</button>;
};

export default Button;
