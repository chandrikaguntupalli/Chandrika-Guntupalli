//use sample_restaurents
// ascending order
db.neighborhoods.find({name: "Bedford"}).sort({name: 1});
//descending order
db.neighborhoods.find({name: "Bedford"}).sort({name: -1});
//to simplify for understanding, we can use projections
db.neighborhoods.find({name: "Bedford"}, {name: 1}).sort({name: 1});
db.neighborhoods.find({name: "Bedford"}, {name: -1}).sort({name: -1});

//limiting results to n
db.neighborhoods
  .find({name: "Bedford"}, {name: "Longwood"})
  .sort({name: -1})
  .limit(3);
