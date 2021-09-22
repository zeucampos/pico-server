const app = require("./app");

app.listen(process.env.PORT || 3000, function(res, req) {
    console.log(`listening server on port: ${process.env.PORT || 3000}`)
    console.log();
});
