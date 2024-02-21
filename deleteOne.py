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

    # Filter by ObjectId
    document_to_delete = {"_id": ObjectId("65d636a3f6e637825c5e2f40")}

    # Search for document before delete
    print("Searching for target document : ")
    pprint.pprint(TypesofExams.find_one(document_to_delete))

    # Write an expression that deletes the target account.
    result = TypesofExams.delete_one(document_to_delete)

    # Search for document after delete
    print("Searching for target document after delete: ")
    pprint.pprint(TypesofExams.find_one(document_to_delete))

    print("Documents deleted: " + str(result.deleted_count))


except Exception as e:
    print(e)
finally:
    client.close()