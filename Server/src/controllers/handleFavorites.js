let myFavorites = [];

function postFav(req, res) {
  myFavorites.push(req.body);
  return res.status(200).json(myFavorites);
}

function deleteAll (req,res){
myFavorites = [];
return res.status(200).json(myFavorites)
}
function deleteFav(req, res) {
  const { id } = req.params;
myFavorites = myFavorites.filter((myFav) => myFav.id !== +id);
  return res.status(200).json(myFavorites);
}

module.exports = {
  postFav,
  deleteFav,
  deleteAll
};
