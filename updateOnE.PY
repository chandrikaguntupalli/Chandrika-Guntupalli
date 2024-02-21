from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson.objectid import ObjectId
import pprint
uri = "mongodb+srv://chandrikaguntupalli2:chandu99@cluster0.trp076i.mongodb.net/?retryWrites=true&w=majority"


# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'LanguageProficiency' database
    db = client.LanguageProficiency

    # Get reference to 'TypesofExams' collection
    TypesofExams = db.TypesofExams

    # Filter
    document_to_update = {"_id": ObjectId("65d639d5c3282b8562bb8551")}

    # Update
    TotalScore = {"$inc": {"TotalScor": 450}}

    # Print original document
    pprint.pprint(TypesofExams.find_one(document_to_update))

    # Write an expression that adds to the target account balance by the specified amount.
    result = TypesofExams.update_one(document_to_update, TotalScore)
    print("Documents updated: " + str(result.modified_count))

    # Print updated document
    pprint.pprint(TypesofExams.find_one(document_to_update))


except Exception as e:
    print(e)
finally:
    client.close()