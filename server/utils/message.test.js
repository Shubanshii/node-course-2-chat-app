const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Chris';
    let text = 'Quit being a cheeseball';
    let testMessage = generateMessage(from, text);
    expect(typeof testMessage.createdAt).toBe('number');
    expect(testMessage).toMatchObject({from, text});
  });
});
