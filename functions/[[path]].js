import * as build from "@remix-run/dev/server-build";
import { createRequestHandler } from "@remix-run/cloudflare";

const handleRequest = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});

export function onRequest(context) {
  return handleRequest(context.request);
}
