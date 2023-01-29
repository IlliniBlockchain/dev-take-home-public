const request = require('request');

if (process.argv.length !== 3) {
  console.log("Incorrect number of command line arguments provided.");
  console.log("Usage: node check.js <secret>");
  return
}

const inputString = process.argv[2];

const options = {
  url: `http://dev-take-home.illiniblockchain.com/check?secret=${inputString}`,
  method: 'GET'
};

request(options, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    console.log(body);
  }
});
