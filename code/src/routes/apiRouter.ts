import Router from "@koa/router";

let prefix: string = "/api";
const router = new Router({
  prefix: prefix,
});

router.get("/", async (ctx, next) => {
  ctx.response.body = { name: "api", testme: "hello" };
  await next();
});

router.get("/prototype", async (ctx, next) => {
  ctx.response.body = { name: "PROTOTYPE", testme: "hello" };
  await next();
});

export default router;
