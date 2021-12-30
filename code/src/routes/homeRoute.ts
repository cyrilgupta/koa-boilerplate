import Router from "@koa/router";

let prefix: string = "";
const router = new Router({
  prefix: prefix,
});

router.get(`${prefix}/`, async (ctx, next) => {
  await ctx.render("home/home", {
    name: "Jeet",
    title: "home page"
  });
  await next();
});

//Post example with an interface
interface IndexRequest {
  name: String;
}
router.post(`${prefix}/`, async (ctx, next) => {
  const data = <IndexRequest>ctx.request.body;

  ctx.render("home/home", {
    name: data.name,
    title: "home page"
  });

  await next();
});

//Sample
router.get(`${prefix}/sample`, async (ctx, next) => {
  await ctx.render("home/sample", {
    title: "This is a title"
  });
  await next();
});

export default router;
