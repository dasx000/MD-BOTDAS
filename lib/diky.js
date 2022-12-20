reply('PROSES1');

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: openaiKey,
});
const openai = new OpenAIApi(configuration);
reply('PROSES1');
try {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt:
      'Translate this into 1. French, 2. Spanish and 3. Japanese:\n\nWhat rooms do you have available?\n\n1.',
    temperature: 0.3,
    max_tokens: 100,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  reply(JSON.stringify(response));
  reply('PROSES2');
  reply(response.data.choices[0].text);
  reply(JSON.stringify(response.data));
} catch (error) {
  reply(JSON.stringify(error));
}
