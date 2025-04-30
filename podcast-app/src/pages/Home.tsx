import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Preview {
  id: number;
  title: string;
  image: string;
  description: string;
}

function Home() {
  const [shows, setShows] = useState<Preview[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc"); // ✅ Move inside function

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

  // ✅ Move sorting logic here, above return block
  const sortedShows = [...shows].sort((a, b) => {
    return sortOrder === "asc"
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title);
  });

  return (
    <div style={{ padding: "1rem" }}>
      <h1>🎙️ Podcast Shows</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: "grid", gap: "1rem" }}>
          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            style={{
              marginBottom: "1rem",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            Sort {sortOrder === "asc" ? "Z–A" : "A–Z"}
          </button>

          {sortedShows.map((show) => (
            <Link
              to={`/show/${show.id}`}
              key={show.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
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
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;




  