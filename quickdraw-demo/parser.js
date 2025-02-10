/*

*/
var fs = require('fs');
var ndjson = require('ndjson'); // npm install ndjson

function parseSimplifiedDrawings(fileName, callback) {
  var drawings = [];
  var fileStream = fs.createReadStream(fileName)
  fileStream
    .pipe(ndjson.parse())
    .on('data', function(obj) {
      drawings.push(obj)
    })
    .on("error", callback)
    .on("end", function() {
      callback(null, drawings)
    });
}

/*
parseSimplifiedDrawings("data/face-simple.ndjson", function(err, drawings) {
  if(err) return console.error(err);
  drawings.forEach(function(d) {
    // Do something with the drawing
    console.log(d.key_id, d.countrycode);
  })
  console.log("# of drawings:", drawings.length);
})
*/

parseSimplifiedDrawings("data/face-simple.ndjson", function(err, drawings) {
    if (err) return console.error(err);
    
    // Save the drawings as a JSON file
    fs.writeFileSync('drawings.json', JSON.stringify(drawings));
    
    console.log("Drawings saved as drawings.json");
  });