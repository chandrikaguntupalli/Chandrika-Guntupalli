from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import datetime

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

    # inserting many accounts
    new_TypesofExams = [{ "title": "DUOLINGO",
  "Format": "Self Placed",
  "Scoring": "Point Based System",
  "TotalScor": "160"},
  {"title": "IELTS",
  "Format": "Administrated in a test center",
  "Scoring": "Band Score",
  "TotalScor": 9},
  { "title": "TOFEL",
  "Format": "Test center evaluated by examiners",
  "Scoring": "Scaled Score",
  "TotalScor": "120"},
  {"title": "PTE",
  "Format": "Academic",
  "Scoring": "Scaled Score",
  "TotalScor": "90"},
{"title":"GRE",
 "Format":"Self Placed",
 "Scoring":"Scaled Score",
 "TotalScor":"340"}]

    # Write an expression that inserts the 'new_account' document into the 'accounts' collection.
    result = TypesofExams.insert_many(new_TypesofExams)

    document_ids = result.inserted_ids
    print("# of documents inserted: " + str(len(document_ids)))
    print(f"_ids of inserted documents: {document_ids}")


except Exception as e:
    print(e)
finally:
    client.close()