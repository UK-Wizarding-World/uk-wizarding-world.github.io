var admin = require("firebase-admin");

var serviceAccount = require("./service_account.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),

    databaseURL: "https://uk-wizarding-world-default-rtdb.firebaseio.com"
});
var db = admin.database();

module.exports = db;