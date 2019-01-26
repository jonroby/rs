const query = async (url, q) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: q }),
  });

  return response;
};

const mutation = async (url, m) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: m }),
  });

  return response;
};

export { query, mutation };
