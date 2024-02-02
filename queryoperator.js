//Using Sample_restaurants data
// logic and query
db.restaurants.find({$and: [{cuisine: "Jewish"}, {cuisine: "Hamburgers"}]}); 
// logic or query
db.restaurants.find({$or: [{borough: "Manhattan"}, {borough: "Brooklyn"}]});
// logic nor query
db.restaurants.find({ $nor: [{cuisine: "Bakery"},{cuisine: "American"}]})
//Using Sample_airbnb data
// logic not query
db.grades.find({class_id:{$not:{$gt:460}}})
//andoror
db.listingsAndReviews.find({
  $and: [
    { $nor: [{ amenities: "Iron" }, { amenities: "Internet" }] },
    { $nor: [{ amenities: "Hangers" }, { amenities: "Heating" }] },
  ],
});
// insertOne query
db.listingsAndReviews.insertOne({
  student_id: 123456,
  products: [
    { type: "exam", score: 85 },
    { type: "homework", score: 92 },
    { type: "quiz", score: 78 },
  ],
  class_id: 550,
});
>>{
  acknowledged: true,
  insertedId: ObjectId('65ba7df3f1d84eeb1df5ea49')
}
// insertMany query
db.listingsAndReviews.insertMany([
  {
    restaurant_id: 987655,
    cuisine: "Mexican",
    address: {
      street: "456 Oak Avenue",
      city: "Smallville",
      state: "TX",
      zip: "67890",
    },
    rating: 4.2,
    reviews: [
      { username: "tacoLover", rating: 5, comment: "Best tacos in town!" },
      { username: "spiceFanatic", rating: 4, comment: "Spicy and delicious." },
    ],
  },
  {
    restaurant_id: 987656,
    cuisine: "Japanese",
    address: {
      street: "789 Pine Street",
      city: "Metroville",
      state: "NY",
      zip: "54321",
    },
    rating: 4.8,
    reviews: [
      { username: "sushiMaster", rating: 5, comment: "Fresh sushi, amazing!" },
      { username: "ramenFan", rating: 4, comment: "Authentic ramen." },
    ],
  },
 
]);
>>{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('65bb258082d409d7f2efeece'),
    '1': ObjectId('65bb258082d409d7f2efeecf')
  }
}
//elementsmatch
db.listingsAndReviews.find({amenities: {$elemMatch: {$eq: "Wifi"}}});
//find
db.grades.find({ _id: ObjectId("65b9b6f769c4895078585dc0") })
//findArray
db.listingsAndReviews.find({amenities: "Wifi"});
// greaterthan
db.grades.find({ "products.score": { $lt: 59  } })
// lessthan
db.grades.find({ "products.score": { $lt: 59  } })
// GREATERTHAN EQUAL TO
db.zips.find({ "pop": { $lte: 1500  } })
// Lessthan Equal to
db.zips.find({ "pop": { $lte: 1500  } })
//in
db.grades.find({ student_id: { $in: [654321, 546789] } })
db.grades.find({ _id: { $in: [ObjectId('65b9b75969c4895078585dc1'), ObjectId('65b9b75969c4895078585dc2')] } })
// MongoPY
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://chandrikaguntupalli2:chandu99@cluster0.trp076i.mongodb.net/"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
    '''for db_name in client.list_database_names():
        print(db_name)*/''' #once sucessfully established connection
except Exception as e:
    print(e)
/* output
>>>PS C:\Users\Dell\.vscode> & "C:/Program Files/Python310/python.exe" 
"c:/Users/Dell/OneDrive/Desktop/Adv Data Base design/mangodb python.py"
Pinged your deployment. You successfully connected to MongoDB!


