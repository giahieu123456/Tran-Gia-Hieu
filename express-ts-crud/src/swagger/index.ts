// src/swagger/index.ts

import { components } from "./component";
import { resourcePaths } from "./paths/resource";

export const swaggerDocs = {
  openapi: "3.0.0",
  info: {
    title: "Resource API",
    version: "1.0.0",
    description: "API documentation for managing resources.",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
    },
  ],
  components,
  paths: {
    ...resourcePaths,
  },
};
