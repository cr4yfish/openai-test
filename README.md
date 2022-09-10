# This is a test implementation of the OpenAI API

It's possible to translate a sentence to a different language while choosing which model to use.

## Getting started

1. Make a new folder constants/
2. Make a new file api_key.js
3. Enter your OpenAPI Api key in following manner:

```js
const apiKey = "YOUR_API_KEY";
const organization = "YOUR_ORG_ID";

const _apiKey = apiKey;
const _organization = organization;

export { _apiKey as apiKey, _organization as organization};
```

4. Start
```sh
npm run start
```