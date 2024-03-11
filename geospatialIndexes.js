db.student.createIndex({"score":"2dsphere"},
{
			"createdCollectionAutomatically": false,
			"numIdexesBefore":1,
			"numIndexesAfter":2,
			"ok":1
})
db.student.getIndexes()
