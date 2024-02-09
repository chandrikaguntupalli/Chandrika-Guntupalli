db.books.replaceOne(
  {_id: ObjectId("65c3f41508ac0649ab5ae43b")}, // Replace document with this _id
  {
    _id: ObjectId("65c3f41508ac0649ab5ae43b"),
    title: "The Art of War",
    ISBN: "978-1590302255",
    thumbnailUrl: "https://example.com/art-of-war-thumbnail.jpg",
    publicationDate: ISODate("2020-01-01T00:00:00.000Z"),
    authors: ["Sun Tzu"],
  }
);

// Find a single book document by its _id
db.books.findOne({_id: ObjectId("65c3f41508ac0649ab5ae43b")});
