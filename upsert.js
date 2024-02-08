// Update a podcast document with the title "The Developer Hub" or insert a new document if it doesn't exist
db.podcasts.updateOne(
  {title: "The Developer Hub"}, // Specify the query to find the document by its title
  {$set: {topics: ["databases", "MongoDB", "MongoDB Compass"]}}, // Set the 'topics' field with an array of topics
  {upsert: true} // Enable upsert to insert a new document if no matching document is found
);
