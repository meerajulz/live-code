import { url } from 'inspector';
import { useState, useEffect } from 'react';

interface Data {
  sections: Section[];
}
interface Section {
  title: string;
  subtitle: string;
}

function UseFetchData(url: string) {
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
}

export default UseFetchData;
