
import { LocalGithubUser } from '../../types';
import { UserInfo } from '../UserInfo/UserInfo';
import { UserStat } from '../UserStat/UserStat';
import { UserTitle } from '../UserTitle/UserTitle';

import styles from './UseCard.module.scss';

interface UserCardProps extends LocalGithubUser {}

export const UserCard = () => {

  return (
    <div className={styles.userCard}>
      <img src="" alt="" className={styles.avatar} />
      <UserTitle 
        created={'123'}
        login={'anovic'}
        name={'weqwe'}
      />
      <p className={styles.bio}>
        This profile has no bio
      </p>
      <UserStat repos={100} followers={1000} following={100} />
      <UserInfo
        blog='#'
        company='#'
        location='#'
        twitter='#'
      />
    </div>
  )
}