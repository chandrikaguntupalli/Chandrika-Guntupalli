//use sample_training
db.trips.countDocuments();
//for counting trip duration more than 12o and subsriber
db.trips.countDocuments({tripduration: {$gt: 200}, usertype: "Subscriber"});
