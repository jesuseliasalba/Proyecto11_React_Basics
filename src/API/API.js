export const API = async ({ method = "GET", headers, url, body }) => {
  const res = await fetch(url, {
    method,
    body,
    headers,
  });

  const response = await res.json();
  return response;
};
