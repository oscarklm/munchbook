import React from 'react';

const Dashboard = () => {
  return (
    <div className="max-w-lg m-auto">
      <div className="flex flex-col items-center justify-center m-8">
        <h1 className="text-2xl font-bold">Dashboard page</h1>
        <p className="p-2">
          Here is some content related to the user only visible when logged in.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
