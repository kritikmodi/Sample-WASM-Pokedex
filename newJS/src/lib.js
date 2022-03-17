import { log } from "@suborbital/runnable";
import { http } from "@suborbital/runnable"

export const run = (input) => {
  const response = http.get("https://pokeapi.co/api/v2/pokemon/ditto");
  log.info(response.text());
  return response.text();
};
