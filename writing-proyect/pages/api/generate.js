import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.initialTopic),
    temperature: 0.8,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(initialTopic) {
  const capitalizedInitialTopic =
  initialTopic[0].toUpperCase() + initialTopic.slice(1).toLowerCase();
  return `Suggest three titles for an essay.

Topic: Plato
Title: Plato and politics, Plato and literature, What is the contribution of Plato in Greek literature?
Topic: Nietzsche
Title: Nihilism and Nietzsche, Nietzsche and Platonism, Nietzsche 's Philosophy On Morality
Topic: Hegel and religion
Title: Hegel and religion the rational understanding of reality , religion and the substance of eticity in hegel, christianity as the axis of hegelian philosophy.
Topic: ${capitalizedInitialTopic}
Title:
`;
}