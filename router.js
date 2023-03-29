const openai = require("openai");

const oaConf = new openai.Configuration({
    apiKey: "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"
});
const openAI = new openai.OpenAIApi(oaConf);

const express = require("express");
const router = express.Router();


const ApiHelper = require("./apihelper");

router.post("/simplechat", async (req, res) => {
    var apiObj = new ApiHelper();
    var response = await apiObj.simpleChat(req.body, oaConf, openAI);
    return res.status(200).send(response);
});

module.exports = router;