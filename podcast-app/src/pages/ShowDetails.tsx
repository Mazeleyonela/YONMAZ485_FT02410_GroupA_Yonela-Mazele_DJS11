/*import React from "react";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchShowById } from "../services/podcastService";
import { Show } from "../types/show";

function ShowDetails() {
  const { id } = useParams<{ id: string }>();
  const [show, setShow] = useState<Show | null>(null);

  useEffect(() => {
    if (id) {
      fetchShowById(Number(id))
        .then((data) => setShow(data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  if (!show) return <div>Loading...</div>;

  return (
    <div>
      <h1>{show.title}</h1>
      <p>{show.description}</p>
      {/* list seasons + episodes later *///}
    /*</div>
  );
}

export default ShowDetails;

*/
// src/pages/ShowDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Episode = {
  title: string;
  description: string;
  episode: number;
  file: string; // MP3 URL
};

type Season = {
  season: number;
  episodes: Episode[];
};

type Show = {
  title: string;
  description: string;
  image: string;
  seasons: Season[];
};

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState<Show | null>(null);

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then((res) => res.json())
      .then(setShow)
      .catch(console.error);
  }, [id]);

  if (!show) return <p>Loading...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{show.title}</h1>
      <img src={show.image} alt={show.title} width={200} />
      <p>{show.description}</p>

      {show.seasons.map((season) => (
        <div key={season.season}>
          <h2>Season {season.season}</h2>
          {season.episodes.map((ep) => (
            <div key={ep.episode} style={{ marginBottom: "1rem" }}>
              <h3>Episode {ep.episode}: {ep.title}</h3>
              <p>{ep.description}</p>
              <audio controls src={ep.file} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ShowDetails;
