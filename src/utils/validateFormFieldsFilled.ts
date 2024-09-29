export function validateFormFieldsFilled(fields: string[]): boolean {
  return fields.every((field) => field !== undefined && field !== '')
}
