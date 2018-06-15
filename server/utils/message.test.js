const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Chris';
    let text = 'Quit being a cheeseball';
    let testMessage = generateMessage(from, text);
    expect(typeof testMessage.createdAt).toBe('number');
    expect(testMessage).toMatchObject({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let from = 'Chris';
    let latitude = 1;
    let longitude = 1;
    let url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    let testMessage = generateLocationMessage(from, latitude, longitude);
    expect(typeof testMessage.createdAt).toBe('number');
    expect(testMessage).toMatchObject({from, url});
  });
});
