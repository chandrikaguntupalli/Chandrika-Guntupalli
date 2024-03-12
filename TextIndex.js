// creating a text index on the title field
db.products.createIndex({ title: "text" })
db.products.getIndexes()
// Performing a text search for the phrase Cosmos DB.
db.products.find(
    { $text: { $search: "Cosmos DB" } }
)
// Drop a text index
db.products.dropIndex({ title: "text" })
