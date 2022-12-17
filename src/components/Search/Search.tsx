import React from 'react';

import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import { Button } from '../Button/Button';

import styles from './Search.module.scss';

interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {

  return (
    <form autoComplete='false'>
      <div className={styles.search}>
        <label className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type="text"
          className={styles.textField}
          placeholder="Найдите имя пользователя GitHub..."
        />
        <Button>Search</Button>
      </div>
    </form>
  )
}