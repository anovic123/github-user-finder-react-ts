import React from 'react';

import { Container, Header, Search, UserCard } from './components';
import { LocalGithubUser, GithubUser, GithubError } from './types';
import { defaultUser } from './mock';
import { isGithubUser } from './utils/typeguards';
import { extractLocalUser } from './utils/extract-local-user';

const BASE_URL = 'https://api.github.com/users/'

export const App = () => {
  const [user, setUser] = React.useState<LocalGithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;

    const res = await fetch(url)
    const user = await res.json() as GithubUser | GithubError

    if (isGithubUser(user)) {
      setUser(extractLocalUser(user))
    } else {
      setUser(null)
    }
  } 

  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  )
}
