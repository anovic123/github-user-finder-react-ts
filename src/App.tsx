import React from 'react';

import { Container, Header, Search, UserCard } from './components';
import { LocalGithubUser } from './types';
import { defaultUser } from './mock';

export const App = () => {
  const [user, setUser] = React.useState<LocalGithubUser | null>(defaultUser);

  return (
    <Container>
      <Header />
      <Search />
      {user && <UserCard {...user} />}
    </Container>
  )
}
