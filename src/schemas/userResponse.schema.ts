/*
 * JSON Schema for Conduit user response
 * Used for Login, Register, and Current User endpoints
 */
export const userResponseSchema = {
  type: "object",
  properties: {
    user: {
      type: "object",
      properties: {
        email: { type: "string" },
        token: { type: "string" },
        username: { type: "string" },
        bio: { type: ["string", "null"] },
        image: { type: ["string", "null"] },
      },
      required: ["email", "token", "username", "bio", "image"],
      additionalProperties: false,
    },
  },
  required: ["user"],
  additionalProperties: false,
};
