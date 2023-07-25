const server = require("../app");
const session = require("supertest");
const agent = session(server);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    let response;

    it("Responde con status: 200", async () => {
      response = await agent.get("/rickandmorty/character/1").expect(200);
    });

    it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender, 'status', 'origin' e 'image'", () => {
      expect(response.body.obj).toHaveProperty(
        "id",
        "name",
        "species",
        "gender",
        "status",
        "origin",
        "image"
      );
    });

    it("Si hay un error responde con status: 500", async () => {
      expect((await agent.get("/rickandmorty/character/900")).status).toEqual(
        500
      );
    });
  });
});
