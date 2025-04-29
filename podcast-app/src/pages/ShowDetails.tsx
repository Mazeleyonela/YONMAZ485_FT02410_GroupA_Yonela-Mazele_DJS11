import React from "react";

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
      {/* list seasons + episodes later */}
    </div>
  );
}

export default ShowDetails;
