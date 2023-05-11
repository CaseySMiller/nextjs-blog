export default async function handler(req, res) {
  const fetchRes = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const someFectchedStuff = await fetchRes.json();
  console.log(someFectchedStuff);
  res.status(200).json(someFectchedStuff);
}
