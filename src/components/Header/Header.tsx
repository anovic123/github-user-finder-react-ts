import React from 'react';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

import styles from './Header.module.scss';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>GitHub finder</div>
      <ThemeSwitcher />
    </header>
  )
}