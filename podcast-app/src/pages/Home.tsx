import React, { useEffect, useState } from "react";

interface Preview {
  id: number;
  title: string;
  image: string;
  description: string;
}

function Home() {
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
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>🎙️ Podcast Shows</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: "grid", gap: "1rem" }}>
          {shows.map((show) => (
            <div
              key={show.id}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <img
                src={show.image}
                alt={show.title}
                style={{ width: "100%", maxWidth: "200px", borderRadius: "8px" }}
              />
              <h2>{show.title}</h2>
              <p>{show.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;


  