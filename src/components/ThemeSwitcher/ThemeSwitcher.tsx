import React from 'react';

import { ReactComponent as MoonIcon } from '../../assets/icon-moon.svg';
import { ReactComponent as SunIcon } from '../../assets/icon-sun.svg';

import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  const [isDark, setDark] = React.useState(false);
  const themeText = isDark ? 'Light' : 'Dark';
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  React.useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className={styles.switcher} onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};
