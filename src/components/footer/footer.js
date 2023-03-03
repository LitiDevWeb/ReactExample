import React from 'react';
import styles from './footer.module.scss';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineBehance } from 'react-icons/ai';
import Input from '../input/input';
import Button from '../button/button';

const Footer = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['usefull-links']}>
        <h3>Usefull Link</h3>
        <div className={styles['section-content']}>
          <button>About</button>
          <button>Services</button>
          <button>Contact</button>
          <button>Shop</button>
          <button>Blog</button>
        </div>
      </div>
      <div className={styles['newsletter']}>
        <h3>Newsletter</h3>
        <div className={styles['section-content']}>
          <Input placeholder='Your Email Address' />
          <Button label='Subscribe now' />
        </div>
      </div>
      <div className={styles['contact']}>
        <h3>Contact</h3>
        <div className={styles['section-content']}>
          <p>123, XYZ Road, BSK 3, Bangalore, Karnataka, IN</p>
          <div className={styles['socials']}>
            <RiFacebookCircleLine size={30} />
            <AiOutlineTwitter size={30} />
            <AiOutlineInstagram size={30} />
            <AiOutlineBehance size={38} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
