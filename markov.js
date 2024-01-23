/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.chains = new Map(); 
    this.makeChains();
  }
  

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    for (let i = 0; i < this.words.length; i++) {
      if (this.chains.has(this.words[i])) {
        this.chains.get(this.words[i]).push(this.words[i + 1] || null);
      } else {
        this.chains.set(this.words[i], [this.words[i + 1] || null]);
      }
    }
  }  


  /** return random text from chains */

  makeText(numWords = 100) {
    let keysArray = Array.from(this.chains.keys());
    let randomIndex = Math.floor(Math.random() * keysArray.length);
    let currentWord = keysArray[randomIndex];
    let text = currentWord;
    let wordCount = 1;
  
    while (wordCount < numWords) {
      let nextWords = this.chains.get(currentWord);
  
      if (!nextWords || nextWords.length === 0) {
        break;
      }
  
      let randomNextWordIndex = Math.floor(Math.random() * nextWords.length);
      let nextWord = nextWords[randomNextWordIndex];
  
      if (nextWord === null) {
        break;
      }
  
      text += " " + nextWord;
      currentWord = nextWord;
      wordCount++;
    }  

    return text;
  }
}

module.exports = {
  MarkovMachine,
};