import React from 'react';
import styles from './input.module.scss';

const Input = ({ placeholder, isPassword = false }) => {
  return <input type={isPassword ? 'password' : 'text'} className={styles['input']} placeholder={placeholder} />;
};

export default Input;
