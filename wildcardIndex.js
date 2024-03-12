// creating a wildcard index
db.products.createIndex( { "author.$**" : 1 } )

db.products.getIndexes()

