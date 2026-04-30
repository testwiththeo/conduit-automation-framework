import Ajv from "ajv";

// Initialize AJV with strict
const ajv = new Ajv({
  allErrors: true, // Throw all errors
  strict: true, // Prevent JSON Schema strictness
});

/*
 * Validates any JSON data against a provided JSON Schema using Ajv
 * Throws an error with detailed validation errors if the data does not match the schema.
 *
 * @param schema - The JSON Schema object to validate against.
 * @param data - The parsed JSON response body (typed as unknown for strictness).
 */

export function validateSchema(schema: object, data: unknown): void {
  const validate = ajv.compile(schema);
  const isValid = validate(data);

  if (!isValid) {
    throw new Error(
      `Contract Validation Failed:\n${JSON.stringify(validate.errors, null, 2)}`,
    );
  }
}
