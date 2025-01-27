// src/swagger/paths/resources.ts

// src/swagger/paths/resources.ts

export const resourcePaths = {
  // GET list of resources
  "/resources": {
    post: {
      summary: "Create a new resource",
      description:
        "Add a new resource with a name and an optional description.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/CreateResource" },
          },
        },
      },
      responses: {
        201: {
          description: "Resource created successfully.",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Resource" },
            },
          },
        },
        400: { $ref: "#/components/responses/ResourceNotFound" },
        500: {
          description: "Internal server error.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Error creating resource",
                  },
                },
              },
            },
          },
        },
      },
    },
    get: {
      summary: "List all resources",
      description: "Retrieve a list of all resources.",
      parameters: [
        {
          in: "query",
          name: "take",
          schema: { type: "integer", example: 10 },
          description: "Number of resources to retrieve.",
        },
        {
          in: "query",
          name: "skip",
          schema: { type: "integer", example: 0 },
          description: "Number of resources to skip.",
        },
        {
          in: "query",
          name: "search",
          schema: { type: "string", example: "example search" },
          description: "Search term to filter resources.",
        },
      ],
      responses: {
        200: {
          description: "List of resources retrieved successfully.",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ResourceList" },
            },
          },
        },
        500: { $ref: "#/components/responses/InternalServerError" },
      },
    },
  },
  "/resources/{id}": {
    get: {
      summary: "Get a resource by ID",
      description: "Retrieve a single resource by its ID.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "integer" },
          description: "The ID of the resource to retrieve.",
        },
      ],
      responses: {
        200: {
          description: "Resource retrieved successfully.",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Resource" },
            },
          },
        },
        404: { $ref: "#/components/responses/ResourceNotFound" },
        500: { $ref: "#/components/responses/InternalServerError" },
      },
    },
    delete: {
      summary: "Delete a resource",
      description:
        "Mark a resource as deleted by setting its `isDeleted` flag to true.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "integer" },
          description: "The ID of the resource to delete.",
        },
      ],
      responses: {
        200: {
          description: "Resource deleted successfully.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Resource deleted successfully",
                  },
                },
              },
            },
          },
        },
        404: { $ref: "#/components/responses/ResourceNotFound" },
        500: {
          description: "Internal server error.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Error deleting resource",
                  },
                },
              },
            },
          },
        },
      },
    },
    put: {
      summary: "Update a resource by ID",
      description: "Update the details of an existing resource by its ID.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "integer" },
          description: "The ID of the resource to update.",
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/UpdateResource" },
          },
        },
      },
      responses: {
        200: {
          description: "Resource updated successfully.",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Resource" },
            },
          },
        },
        404: { $ref: "#/components/responses/ResourceNotFound" },
        500: { $ref: "#/components/responses/InternalServerError" },
      },
    },
  },
};
