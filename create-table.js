import { sql } from "./db.js"
// sql`drop table if exists videos`.then(() => console.log("tabela deletada"))

sql`
  create table videos (
    id text primary key,
    title text,
    description text,
    duration integer
  );
`.then(() => {
  console.log("tabela criada")
})
