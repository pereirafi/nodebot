import { Router } from "express";
import { getCustomRepository } from "typeorm";

import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

/***
* Tipos de parâmetros
* Routes Params => Parâmetros de rotas
* Query Params => Filtros e buscases
* http://localhost:333/settings/1?search=algumacoisa
*
* Body params => {
*
* }
*/

routes.post("/settings", async (request, response) => {
  const { chat, username } = request.body;

  const settingsRepository = getCustomRepository(SettingsRepository)

  const settings = settingsRepository.create({
    chat,
    username
  })

  await settingsRepository.save(settings);

  return response.json(settings);
})

export { routes };