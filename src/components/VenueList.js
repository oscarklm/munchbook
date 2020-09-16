const VenueList = ({ venues }) => (
  <div>
    {venues &&
      venues.map((v, i) => (
        <div key={i} className="m-4">
          <h2 className="text-2xl">{v.title}</h2>
          <p>{v.description}</p>
        </div>
      ))}
  </div>
);

export default VenueList;
