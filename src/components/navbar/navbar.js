import React from 'react';
import styles from './navbar.module.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import Input from '../input/input';

const Navbar = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['navbar-info']}>
        <h3>Brand</h3>
        <div className={styles['links']}>
          <button>Home</button>
          <button>Pricing</button>
          <button>Contact</button>
        </div>
      </div>
      <div className={styles['navbar-interactions']}>
        <FaShoppingCart className={styles['icons']} size={18} />
        <AiOutlineTwitter className={styles['icons']} size={20} />
        <Input placeholder='Type Query' />
      </div>
    </div>
  );
};

export default Navbar;
