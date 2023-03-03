import React from 'react';
import styles from './todo-box.module.scss';

const TodoBox = (props) => {
  return (
    <div className={styles['todo-box-container']}>
      <p className={styles['todo-box-title']}>{props.title}</p>
      <h3 className={styles['todo-box-content']}>{props.content}</h3>
      <button>Delete</button>
    </div>
  );
};

export default TodoBox;
