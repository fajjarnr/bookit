import Search from '../components/Search';
import Layout from '../components/layout/Layout';
import { getRooms } from '../redux/actions/room';
import { wrapper } from '../redux/store';

export default function SearchPage() {
  return (
    <Layout>
      <Search />
    </Layout>
  );
}
