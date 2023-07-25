const axios = require("axios");

async function getCharById(req, res) {


  
  try {
   
    const { data } = await axios(
      `https://rickandmortyapi.com/api/character/${req.params.id}`
    );
    
    const obj = {
      id: data.id,
      status: data.status,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
    };
if(!data.name)throw new Error("Not Found")
else res.status(200).json({obj})

  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

module.exports =  getCharById

