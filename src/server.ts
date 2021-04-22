import express from "express";

import "./database";

const app = express();

/***
 * GET = Buscas 
 * POST = Criação 
 * PUT = Alteração
 * DELETA = Deletar
 * PATCH = Alterar uma informação específica
 */

app.get("/", (request, response) => {
  return response.json({
    message: "Hello Next Level Week 05!",
  });
});

app.post("/", (request, response) => {
  return response.json({ message: "User successfully saved!" });
})

app.listen(3333, () => console.log("Server is running on port 3333"))