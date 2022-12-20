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
