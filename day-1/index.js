const lineReader = require("line-reader");

const part1 = (input) => {
  lineReader.eachLine('input.txt', function(line) {
    console.log(line);
  }).then(function (err) {
    if (err) throw err;
    console.log("I'm done!!");
  });
  let solution = null;
  return solution;
}

const part2 = (input) => {

  let solution = null;
  return solution;
}

module.exports = {
  part1: part1,
  part2: part2,
}
