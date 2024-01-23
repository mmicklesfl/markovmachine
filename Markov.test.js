const { MarkovMachine } = require('./markov');

describe('MarkovMachine tests', () => {

  test('Test Initialization', () => {
    const text = "the cat in the hat";
    const mm = new MarkovMachine(text);
    expect(mm.words.length).toBeGreaterThan(0);
  });

  test('Test Chain Generation', () => {
    const text = "the cat in the hat";
    const mm = new MarkovMachine(text);
    expect(mm.chains.size).toBeGreaterThan(0);
  });

  test('Test Text Generation', () => {
    const text = "the cat in the hat";
    const mm = new MarkovMachine(text);
    const generatedText = mm.makeText(10);
    expect(typeof generatedText).toBe('string');
    expect(generatedText.split(" ").length).toBeLessThanOrEqual(10);
  });

});
