//to find
db.podcasts.findOne({title: "The Developer Hub"});
db.podcasts.findOne({_id: ObjectId("65c3b31c5f2b7a48feaa52e0")});

//to set array
db.podcasts.updateOne({_id: ObjectId("65c3b31c5f2b7a48feaa52e0")},{$set:{subscribers:98562}})
