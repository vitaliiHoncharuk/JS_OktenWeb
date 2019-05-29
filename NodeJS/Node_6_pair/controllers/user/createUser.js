// const userModel = require("../models/users");

module.exports =
    async function createBratishka(req, res) {
        const {login, mail, password} = req.body;
        let identity = await userModel.findOne({$or: [{login}, {mail}]});
        console.log(identity);
        if (!login || !password || !mail) res.json("Something went wrong,can't add user! Provide full info...");
        if (identity) res.json("Cmon,bratishka! U're trying to use login/mail of another Bratishka! Don't even try to do this again!");
        else {
            addUser(login, mail, password).then();
            res.redirect("/");
            //res.json(`Your login ${login} and password ${password} have been added! Please,wait...`);
        }
    };

async function addUser(login, mail, password) {
    await userModel.create({
        login: login,
        mail: mail,
        password: password
    });
}
