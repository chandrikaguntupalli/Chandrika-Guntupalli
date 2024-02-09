db.birds.insertMany([
  {
    name: "Ruby-throated Hummingbird",
    scientificName: "Archilochus colubris",
    habitat: "Forests, gardens, meadows",
    diet: ["Nectar", "Insects"],
    conservationStatus: "Least Concern",
    lifespan: 3, // in years
    wingspan: 4.3, // in inches
    imageUrl: "https://example.com/ruby-throated_hummingbird.jpg",
    description: "The ruby-throated hummingbird is a small bird known for its vibrant plumage...",
    relatedSpecies: ["Anna's Hummingbird", "Broad-tailed Hummingbird"],
  },
  {
    name: "American Robin",
    scientificName: "Turdus migratorius",
    habitat: "Forests, gardens, urban areas",
    diet: ["Insects", "Fruits", "Berries"],
    conservationStatus: "Least Concern",
    lifespan: 6, // in years
    wingspan: 12, // in inches
    imageUrl: "https://example.com/american_robin.jpg",
    description: "The American robin is a migratory songbird...",
    relatedSpecies: ["European Robin", "Rufous-backed Robin"],
  }
]);
