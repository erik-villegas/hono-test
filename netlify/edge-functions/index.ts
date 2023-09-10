import { Hono } from "https://deno.land/x/hono/mod.ts";
import { handle } from "https://deno.land/x/hono/adapter/netlify/mod.ts";

const app = new Hono();

app.get("/", (c) =>
  c.json({
    message: "Hello Netlify!",
  })
);

app.get("/foobar", (c) =>
  c.json({
    message: "Hello Foobar!",
  })
);

export default handle(app);
