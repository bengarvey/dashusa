// dataCleaner.js
// Converts our dumb json data object into the one that I want. Meant to be run with node.js
// @bengarvey
// 11/09/2014
//

// Convert the data object to a single array
var cleanData = function(oldData) {
  var cleanedData = "date,rate\n";

  for(index in oldData) {
    year = oldData[index].Year;
    cleanedData += year + '-01-01,' + oldData[index]['Jan'] + "\n";
    cleanedData += year + '-02-01,' + oldData[index]['Feb'] + "\n";
    cleanedData += year + '-03-01,' + oldData[index]['Mar'] + "\n";
    cleanedData += year + '-04-01,' + oldData[index]['Apr'] + "\n";
    cleanedData += year + '-05-01,' + oldData[index]['May'] + "\n";
    cleanedData += year + '-06-01,' + oldData[index]['Jun'] + "\n";
    cleanedData += year + '-07-01,' + oldData[index]['Jul'] + "\n";
    cleanedData += year + '-08-01,' + oldData[index]['Aug'] + "\n";
    cleanedData += year + '-09-01,' + oldData[index]['Sep'] + "\n";
    cleanedData += year + '-10-01,' + oldData[index]['Oct'] + "\n";
    cleanedData += year + '-11-01,' + oldData[index]['Nov'] + "\n";
    cleanedData += year + '-12-01,' + oldData[index]['Dec'] + "\n";
  }

  /*
   * JSON
   *
  cleanedData.dates = [];
  cleanedData.values = [];
  for(index in oldData) {
    year = oldData[index].Year;
    cleanedData.dates.push(year + '-01');
    cleanedData.dates.push(year + '-02');
    cleanedData.dates.push(year + '-03');
    cleanedData.dates.push(year + '-04');
    cleanedData.dates.push(year + '-05');
    cleanedData.dates.push(year + '-06');
    cleanedData.dates.push(year + '-07');
    cleanedData.dates.push(year + '-08');
    cleanedData.dates.push(year + '-09');
    cleanedData.dates.push(year + '-10');
    cleanedData.dates.push(year + '-11');
    cleanedData.dates.push(year + '-12');

    cleanedData.values.push(oldData[index]['Jan']);
    cleanedData.values.push(oldData[index]['Feb']);
    cleanedData.values.push(oldData[index]['Mar']);
    cleanedData.values.push(oldData[index]['Apr']);
    cleanedData.values.push(oldData[index]['May']);
    cleanedData.values.push(oldData[index]['Jun']);
    cleanedData.values.push(oldData[index]['Jul']);
    cleanedData.values.push(oldData[index]['Aug']);
    cleanedData.values.push(oldData[index]['Sep']);
    cleanedData.values.push(oldData[index]['Oct']);
    cleanedData.values.push(oldData[index]['Nov']);
    cleanedData.values.push(oldData[index]['Dec']);
  }
  */

  return cleanedData;
}

// Write the new file with the updated data object
var writeOutput = function(data) {
  var fs = require('fs');
  fs.writeFile("data/unemployment-data-clean.csv", data, function(err) {
      if(err) {
          console.log(err);
      } else {
          console.log("The file was saved!");
      }
  });
}

var convertFile = function(cleanData, writeOutput) {

  // Load in the old file
  fs = require('fs');
  fs.readFile('data/unemployment.json', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    // Clean the data and then write it back out
    var cleanedData = cleanData(JSON.parse(data));
    writeOutput(cleanedData);
  });
}

convertFile(cleanData, writeOutput);
