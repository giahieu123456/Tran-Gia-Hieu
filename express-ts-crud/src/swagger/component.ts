// src/swagger/components.ts

export const components = {
  schemas: {
    Resource: {
      type: "object",
      properties: {
        id: { type: "integer", example: 1 },
        name: { type: "string", example: "Sample Resource" },
        description: { type: "string", example: "This is a sample resource" },
        createdAt: {
          type: "string",
          format: "date-time",
          example: "2025-01-27T12:00:00.000Z",
        },
      },
    },
    CreateResource: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string", example: "Sample Resource" },
        description: {
          type: "string",
          example: "This is a sample resource description",
        },
      },
    },
    UpdateResource: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string", example: "Sample Resource" },
        description: {
          type: "string",
          example: "This is a sample resource description",
        },
      },
    },
  },
  responses: {
    ResourceNotFound: {
      description: "Resource not found.",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: { type: "string", example: "Resource not found" },
            },
          },
        },
      },
    },
  },
};
