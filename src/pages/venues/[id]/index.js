import { useRouter } from 'next/router';
import fetch from 'unfetch';
import useSWR from 'swr';

const fetcher = async (path) => {
  const res = await fetch(path);

  return res.json();
};

const Venue = ({ id }) => {
  const router = useRouter();
  const path = `/api/venues/${id}`;

  const { data, error } = useSWR(path, fetcher);

  if (error) {
    return <div>Failed to load...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

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
      {console.log(data)}
      <h1 className="text-3xl font-extrabold text-gray-800">{data.title}</h1>
      <p className="">{data.description}</p>
      <button
        className="p-3 text-white bg-black rounded-lg hover:bg-red-700"
        onClick={deleteVenue}
      >
        Delete venue
      </button>
    </div>
  );
};

// Get our ID from the query of the URL and pass as props
export async function getServerSideProps(context) {
  return {
    props: {
      id: context.query.id
    }
  };
}

export default Venue;
