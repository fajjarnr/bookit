import RoomDetails from '../../components/room/RoomDetails';
import { getRoomsDetails } from '../../redux/actions/room';
import { wrapper } from '../../redux/store';
import Layout from '../../components/layout/Layout';

export default function RoomDetailsPage() {
  return (
    <Layout>
      <RoomDetails title="Room Detail" />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ req, store, params }) => {
    await store.dispatch(getRoomsDetails(req, params.id));
  }
);
