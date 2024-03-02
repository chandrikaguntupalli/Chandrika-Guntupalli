from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import datetime

uri = "mongodb+srv://chandrikaguntupalli2:chandu99@cluster0.trp076i.mongodb.net/?retryWrites=true&w=majority"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'sample_training' database
    db = client.sample_training

    # Get reference to 'zips' collection
    accounts_collection = db.zips
    collections = db.list_collection_names()

    new = [
    {
       "$group":{
       "_id":"$state",
	   "total_pop":{"$sum":"$pop"}
	}
    },
    {
    "$match":{
    "total_pop":{"$lt":1000000}}
    },
    {
    "$out":"small_states"
    }
    ]

    result = list(accounts_collection.aggregate(new))

    for i in collections:
         print(i)


except Exception as e:
    print(e)
finally:
    client.close()
