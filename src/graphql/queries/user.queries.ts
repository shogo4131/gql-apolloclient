import { gql } from '@apollo/client';

import type { Users } from '../../types/user';

export const USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

export type UsersData = {
  users: Users[];
};
