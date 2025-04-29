// src/components/ShowList.tsx

import React, { useEffect, useState } from "react";

interface Preview {
  id: number;
  title: string;
  image: string;
}

const ShowList: React.FC = () => {
  const [shows, setShows] = useState<Preview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://podcast-api.netlify.app")
      .then((res) => res.json())
      .then((data) => {
        setShows(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching shows:", error);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Podcast Shows</h1>
      <ul>
        {shows.map((show) => (
          <li key={show.id}>
            <img src={show.image} alt={show.title} width={100} />
            <p>{show.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;

