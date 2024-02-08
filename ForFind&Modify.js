// Insert a new podcast document into the "podcasts" collection
db.podcasts.insertOne({
  title: "Tech Trend Talk",// Specify the title of the podcast
  platforms: ["Apple Podcasts", "Google Podcasts","Spotify","SoundCloud"],// Specify the platforms where the podcast is available
  downloads: 6012,// Specify the number of downloads for the podcast
});
