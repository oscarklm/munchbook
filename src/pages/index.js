import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import VenueList from '../components/VenueList';
import withApollo from '../../lib/withApollo';
import DotLoader from 'react-spinners/DotLoader';

const GET_VENUES = gql`
  query {
    venues {
      title
      description
    }
  }
`;

const Index = () => {
  const { loading, error, data } = useQuery(GET_VENUES);

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-4">
        <DotLoader size={50} color={'#4399E1'} loading={loading} />
      </div>
    );
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  return (
    <>
      <div className="max-w-md m-auto">
        <div className="flex flex-col items-center justify-center">
          <VenueList venues={data.venues} />
        </div>
      </div>
    </>
  );
};
export default withApollo(Index);
