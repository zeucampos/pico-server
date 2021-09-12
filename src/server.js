const app = require("./app");

app.listen(process.env.APP_PORT, function(res, req) {
    console.log("listening server on port: ${process.env.APP_PORT}")
});
