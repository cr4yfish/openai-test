const { Configuration, OpenAIApi } = require('openai');
const { apiKey, organization } = require('./constants/api_key');
const configuration = new Configuration({
    apiKey: apiKey,
    organization: organization
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {

    const requestText = req.body.requestText;
    const translateTo = req.body.translateTo;
    const model = req.body.model;

    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        body: JSON.stringify({
            model: model,
            prompt: `Translate the following text into ${translateTo}: ${requestText}`,
            temperature: 0.3,
            max_tokens: 75,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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",
            "Organization": "org-b7dpNp0b9T8SECJj23Gk5"
        }
    })
    
    const resJson = await response.json();

    const data = resJson.choices[0].text;

    console.log("=== new request ===");
    console.log("Model:", model,
    "requestText:", requestText,"translateTo:", translateTo, "ResponseData:", data);

    res.status(200).json({ response: data});
  }
  