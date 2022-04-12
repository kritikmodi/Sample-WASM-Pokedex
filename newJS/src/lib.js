import { log, http } from "@suborbital/runnable";
import { db } from "@suborbital/runnable"
import { cache } from "@suborbital/runnable"

export const run = (variable) => {
  const response = http.get("https://pokeapi.co/api/v2/pokemon/"+variable);

  const responsePOST = http.post("https://jsonplaceholder.typicode.com/posts", JSON.stringify({
    id: 101,
    title: 'foo',
    body: 'bar',
    userId: 1
  }
  ));

  db.insert("Pokemon1");

  log.info(response.text());
  const obj = response.json();
  const val = JSON.parse(JSON.stringify(obj));

  cache.set("Pokemon", val.weight);
  
  return (val.weight);
};