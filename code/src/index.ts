import Koa from "koa";
import Router from "@koa/router";
import logger from "koa-logger";
import json from "koa-json";
import bodyParser from "koa-bodyparser";
import render from "koa-ejs";
import path from "path";
import serve from "koa-static";
import mount from "koa-mount";

const app = new Koa();
const router = new Router();

render(app, {
  root: path.join(__dirname, "./views"),
  layout: "./layouts/template",
  viewExt: "html",
  cache: false,
  debug: true,
  async: true,
});

//Static files
console.log(path.join(__dirname, "/public"));
app.use(mount("/public", serve(path.join(__dirname, "/public"))));

//Routes
import setRoutes from "./routes/setRoutes";
setRoutes(app, router);

app.use(json());
app.use(logger());
app.use(bodyParser());

app.listen(3000, () => {
  console.log("Server started @ 3000");
});
