db.podcasts.updateOne(
  {title: "The MongoDB Podcast"},
  {$set: {topics: ["youtube", "Spotify"]}}
);
//confirm
db.podcasts.findOne({title: "The MongoDB Podcast"});
