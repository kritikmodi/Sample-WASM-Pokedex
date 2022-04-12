import { log } from "@suborbital/runnable";
import { http } from "@suborbital/runnable"
import { cache } from "@suborbital/runnable"

export const run = (input) => {
  const response = http.get("https://catfact.ninja/fact");

  log.info(response.text());

  //const obj = JSON.parse('{"fact":"Cat families usually play best in even numbers. Cats and kittens should be acquired in pairs whenever possible.","length":111}');
  
  const weight = cache.get("Pokemon");
  return weight;
};