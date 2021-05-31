const horseSeeds = require("./seeds.json");

BlogPost.deleteMany({})
  .then(() => {
    return horseSeeds.insertMany(horseSeeds);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
