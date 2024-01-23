/** Command-line tool to generate Markov text. */

const fs = require('fs');
const axios = require('axios');
const { MarkovMachine } = require('./markov');

function generateText(text) {
  let mm = new MarkovMachine(text);
  console.log(mm.makeText());
}

function makeText(path) {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    axios.get(path)
      .then(res => {
        generateText(res.data);
      })
      .catch(err => {
        console.error(`Error fetching ${path}:`, err.message);
        process.exit(1);
      });
  } else {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading ${path}:`, err.message);
        process.exit(1);
      } else {
        generateText(data);
      }
    });
  }
}

const [,, source, path] = process.argv;

if (!path) {
  console.error('Usage: node makeText.js [file|url] <path-to-file-or-url>');
  process.exit(1);
}

makeText(path);
