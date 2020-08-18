export default async function postToDo() {
  const response = await fetch("http://localhost:3000/wedding", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: "Deko aussuchen" }),
  });
  return response.ok;
}
