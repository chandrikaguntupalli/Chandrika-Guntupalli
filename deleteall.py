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
    documents_to_delete = {"Format": "Self Placed"}

    # Search for sample document before delete
    print("Searching for sample target: ")
    pprint.pprint(TypesofExams.find_one(documents_to_delete))

    # Write an expression that deletes the target accounts.
    result = TypesofExams.delete_many(documents_to_delete)

    # Search for sample document after delete
    print("Searching for sample target document : ")
    pprint.pprint(TypesofExams.find_one(documents_to_delete))

    print("Documents deleted: " + str(result.deleted_count))


except Exception as e:
    print(e)
finally:
    client.close()