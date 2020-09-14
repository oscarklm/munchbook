import { useRouter } from 'next/router';
import useSWR from 'swr';
import DeleteButton from '../../../components/DeleteButton';

const fetcher = (path) => fetch(path).then((res) => res.json());

const Venue = ({ id }) => {
  const router = useRouter();
  const path = `/api/venues/${router.query.id}`;

  const { data, error } = useSWR(path, fetcher);

  if (error) return <div>Failed to load...</div>;
  if (!data) return <div>Loading...</div>;

  // Check if deletion was successfull, and route user back to homepage
  const routeUserBack = (response) => {
    if (response.ok) {
      router.push('/');
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      return Promise.reject(error);
    }
  };

  // Handle fetch request to delete user
  const deleteVenue = (e) => {
    e.preventDefault();

    fetch(path, {
      method: 'DELETE'
    }).then(routeUserBack);
  };

  return (
    <div className="flex flex-col items-center max-w-md p-4 m-auto space-y-2">
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-3xl font-extrabold text-gray-800">{data.title}</h1>
        <DeleteButton onClick={deleteVenue} />
      </div>
      <p className="">{data.description}</p>
      <div className="flex items-center justify-center gap-2">
        {data.tags.map((tag) => (
          <div className="p-2 text-sm font-medium text-gray-700 bg-gray-400 rounded-lg ">
            #{tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Venue;
