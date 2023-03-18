export default async function handler(req, res) {

    const requestText = req.body.requestText;
    const apiKey = req.body.apiKey;
    const organization = req.body.organization;
    const engine = req.body.engine;
    const translateTo = req.body.translateTo;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        body: JSON.stringify({
            model: engine,
            messages: [{"role": "user", "content": requestText}],
        }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
            "Organization": organization
        }
    });
    
    const resJson = await response.json();
    console.log(resJson);

    console.log("=== new request ===");
    console.log("requestText:", requestText,"translateTo:", translateTo, "ResponseData:", resJson);
    if(resJson.error == "invalid_api_key") {
        res.status(500).json({ response: resJson});
        return;
    }
    res.status(200).json({ response: resJson});
  }
  