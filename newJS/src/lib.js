import { log, http } from "@suborbital/runnable";

export const run = (input) => {
  const response = http.get("https://catfact.ninja/fact");
  log.info(response.text());
  const obj = response.json();
  const val = JSON.parse(JSON.stringify(obj));
  return (val.fact);
};