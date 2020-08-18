export default async function fetchToDos() {
  const response = await fetch("http://localhost:3333/wedding");
  if (!response.ok) {
    throw new Error(response);
  }
  const fetchedToDos = await response.json();
  console.log(fetchedToDos);
  return fetchedToDos;
}
