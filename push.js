// Update a podcast document with a specific _id to push a new platform into the 'platforms' array
db.podcasts.updateOne(
  {_id: ObjectId("65c3b31c5f2b7a48feaa52e0")},// Specify the document using its _id field
  {$push: {platforms: "Apple Podcast"}}// Use $push to add "Apple Podcast" to the 'platforms' array
);
// Confirmation: Retrieve and display the updated podcast document to ensure the update was successful
db.podcasts.findOne({title: "The Developer Hub"});

