import Login from '../components/auth/Login';
import Layout from '../components/layout/Layout';
import { getRooms } from '../redux/actions/room';
import { wrapper } from '../redux/store';

export default function LoginPage() {
  return (
    <Layout title="login">
      <Login />
    </Layout>
  );
}
