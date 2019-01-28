const base = method => async (url, data) => {
  const body = method === "GET" ? {} : { body: JSON.stringify(data) };
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    ...body,
  });
  return response;
};

const get = base("GET");
const post = base("POST");
const put = base("PUT");
const del = base("DELETE");

export { get, post, put, del };
