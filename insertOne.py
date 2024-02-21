from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import datetime
from pprint import pprint
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

    # inserting one language
    new_TypesofExams = {
        "title": "DUOLINGO",
  "Format": "Self Placed",
  "Scoring": "Point Based System",
  "TotalScor": "160",
    }

    # Write an expression that inserts the 'new_TypesofExams' document into the 'TypesofExams' collection.
    result = TypesofExams.insert_one(new_TypesofExams)

    document_id = result.inserted_id
    pprint(f"_id of inserted document: {document_id}")

except Exception as e:
    print(e)
finally:
    client.close()