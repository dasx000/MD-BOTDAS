const client = axios.create({
  headers: {
    Authorization: 'Bearer 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',
  },
});

const params = {
  prompt: 'Once upon a time',
  max_tokens: 10,
};

client
  .post('https://api.openai.com/v1/completions', params)
  .then((result) => {
    console.log(params.prompt + result.data.choices[0].text);
  })
  .catch((err) => {
    console.log(err);
  });
