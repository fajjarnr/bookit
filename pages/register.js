import { getSession } from 'next-auth/client';
import Register from '../components/auth/Register';
import Layout from '../components/layout/Layout';

export default function RegisterPage() {
  return (
    <Layout title="login">
      <Register />
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
    props: {},
  };
}
