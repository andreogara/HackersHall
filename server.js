import express from "express";
import path from "path";
import bodyParser from "body-parser";
import {router as indexRoute} from "./routes/index";

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", indexRoute);
app.listen(process.env.PORT, function () {
    console.log("listening on port "+process.env.PORT);
});

module.exports = app;