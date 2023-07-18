const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res) {
  axios(`${URL}${req.id}`)
    .then((response) => {
      const obj = {
        id: response.data.id,
        status: response.data.status,
        name: response.data.name,
        species: response.data.species,
        origin: response.data.origin,
        image: response.data.image,
        gender: response.data.gender,
      };
      return res.status(200).json(obj);
    })
    .catch((error) => res.status(500).send(error.message));
}

module.exports = {
  getCharById,
};
