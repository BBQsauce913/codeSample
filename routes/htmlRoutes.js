var path = require("path");

module.exports = function(app) {
    
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/view.html"));
    });

    app.get("/funds", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/funds.html"));
    });
};