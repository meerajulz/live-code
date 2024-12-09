import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const url = 'https://prolog-api.profy.dev/content-page/home';

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = (useState < string) | (null > null);

  //fetchData
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <div>
          <h1>{data.title}</h1>
          <p>{data.content}</p>
        </div>
      )}
      {data.sections.map((sections, index) => {
        if (sections.sectionType === 'section') {
          return (
            <div key={index}>
              <h2>{sections.title}</h2>
              <p>{sections.content}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Dashboard;
