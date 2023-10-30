export function getTricksApi() {
  return fetch("http://localhost:3001/api/v1/tricks").then((res) => {
    if (!res.ok) {
      throw new Error("oops! Something went wrong on the server");
    } else {
      return res.json();
    }
  });
}
