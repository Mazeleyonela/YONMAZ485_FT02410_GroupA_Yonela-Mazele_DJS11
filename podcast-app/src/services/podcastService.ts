const BASE_URL = "https://podcast-api.netlify.app";

export async function fetchPreviews() {
  const res = await fetch(`${BASE_URL}`);
  return res.json();
}

export async function fetchShowById(id: number) {
  const res = await fetch(`${BASE_URL}/id/${id}`);
  return res.json();
}
 