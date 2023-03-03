import React from 'react';
import Counter from '../counter/counter';
import styles from './container.module.scss';

const Container = () => {
  return (
    <div className={styles['container']}>
      <Counter />
    </div>
  );
};

export default Container;
