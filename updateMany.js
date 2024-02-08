db.books.updateMany(
  {publishedDate: {$lt: ISODate("2019-04-27T08:00:00.000+00:00")}},
  {$set: {status: "OLD"}}
);
