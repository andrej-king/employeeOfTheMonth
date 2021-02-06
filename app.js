//region declaring variable
const express       = require("express");
const ejs           = require("ejs");
const bodyParser    = require("body-parser");
const mainRouter    = require("./routes/employeeRouter");
const PORT          = process.env.PORT ||3000;
const app           = express();
// endregion

app.set("view engine", ejs);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//region routes
app.use(mainRouter);
// endregion

//region port listener
app.listen(PORT, () => {
	console.log(`${PORT} is running`);
});
//endregion