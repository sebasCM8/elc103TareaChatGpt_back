class ApiHelper {
    async simpleChat(data, oaConf, openAI) {
        var response;
        var exisMsg;
        try {
            exisMsg = 'msg' in data;
        } catch (e) {
            response = { ok: false, msg: "Envie un mensaje valido" };
            return response;
        }

        if (!exisMsg) {
            response = { ok: false, msg: "Envie un mensaje valido" };
            return response;
        }

        var msgTxt = data.msg;
        if (msgTxt == null || msgTxt == "") {
            response = { ok: false, msg: "Mensaje no puede ser vacio" };
            return response;
        }

        response = await this.handleAPIReq(msgTxt, oaConf, openAI);
        return response;
    }

    async handleAPIReq(msg, oaConf, openAI) {
        var response;
        if (!oaConf.apiKey) {
            console.log(oaConf);
            response = { ok: false, msg: "OpenAI API key not configured, please follow instructions in README.md" };
            return response;
        }

        try {
            const completion = await openAI.createCompletion({
                model: "text-davinci-003",
                prompt: msg,
                temperature: 0.6,
            });
            response = { ok: true, result: completion.data.choices[0].text };
        } catch (error) {
            // Consider adjusting the error handling logic for your use case
            console.log(error);
            response = { ok: false, msg: String(error) };
        }
        return response;
    }
}

module.exports = ApiHelper;