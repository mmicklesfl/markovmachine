const { MarkovMachine } = require('./markov');

function testInitialization() {
  const text = "the cat in the hat";
  const mm = new MarkovMachine(text);
  console.assert(mm.words.length > 0, "Initialization failed: words array is empty.");
  console.log("Test for Proper Initialization passed.");
}

function testChainGeneration() {
  const text = "the cat in the hat";
  const mm = new MarkovMachine(text);
  console.assert(mm.chains.size > 0, "Chain generation failed: chains map is empty.");
  console.log("Test for Chain Generation passed.");
}

function testTextGeneration() {
  const text = "the cat in the hat";
  const mm = new MarkovMachine(text);
  const generatedText = mm.makeText(10);
  console.assert(typeof generatedText === 'string', "Text generation failed: Output is not a string.");
  console.assert(generatedText.split(" ").length <= 10, "Text generation failed: Output exceeds expected word count.");
  console.log("Test for Text Generation passed.");
}

testInitialization();
testChainGeneration();
testTextGeneration();
