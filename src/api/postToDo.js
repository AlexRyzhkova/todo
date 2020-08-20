export default async function postToDo(todo) {
  const response = await fetch("http://localhost:3333/wedding", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });

  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  return result;
}
