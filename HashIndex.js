//// creating a hash index 
db.products.createIndex( { _id: "hashed" } )
//
db.products.getIndexes()
// Drop a Hash index
db.products.dropIndex("_id")
