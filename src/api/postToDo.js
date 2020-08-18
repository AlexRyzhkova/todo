export default async function postToDo(taskName) {
  const response = await fetch("http://localhost:3000/wedding", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: taskName }),
  });
  return response.ok;
}
