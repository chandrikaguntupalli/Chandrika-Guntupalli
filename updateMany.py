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
    select_Foramt = {"Format": "Administrated in a test center"}

    # Print original document
    set_field = {"$set": {"TotalScor": 500}}

    # Write an expression that adds to the target account balance by the specified amount.
    result = TypesofExams.update_many(select_Foramt,set_field)

    # Print updated document
    print("Documents matched: " + str(result.matched_count))
    print("Documents updated: " + str(result.modified_count))
    pprint.pprint(TypesofExams.find_one(select_Foramt))

except Exception as e:
    print(e)
finally:
    client.close()