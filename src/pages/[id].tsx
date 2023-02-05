import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { useUserQuery } from '../graphql/generated/graphql';

const UserDetail: NextPage = () => {
  const { query } = useRouter();

  const { data } = useUserQuery({ variables: { id: query.id as string } });

  return <div>{data?.user.name}</div>;
};

export default UserDetail;
