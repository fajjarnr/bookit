import { getSession } from 'next-auth/client';
import Login from '../components/auth/Login';
import Layout from '../components/layout/Layout';

export default function LoginPage() {
  return (
    <Layout title="login">
      <Login />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
