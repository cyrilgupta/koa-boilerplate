import Koa from "koa";
import Router from "@koa/router";

import homeRouter from "./homeRoute";
import apiRouter from "./apiRouter";

let setRoutes = function (
  app: Koa<Koa.DefaultState, Koa.DefaultContext>,
  router: Router<Koa.DefaultState, Koa.DefaultContext>
): void {
  //Set all routes here
  app.use(homeRouter.routes()).use(router.allowedMethods());
  app.use(apiRouter.routes()).use(router.allowedMethods());
};

export default setRoutes;