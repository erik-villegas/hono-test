import { Hono } from 'https://deno.land/x/hono/mod.ts'
import { handle } from 'https://deno.land/x/hono/adapter/netlify/mod.ts'

const app = new Hono()

app.get('/country', (c) =>
  c.json({
    message: 'Hello Netlify!',
  })
)

export default handle(app)