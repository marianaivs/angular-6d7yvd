export function convertToBoolProperty(value: any): boolean {
  if (typeof value === 'string') {
    value = value.toLowerCase().trim();

    return value === 'true' || value === '';
  }

  return !!value;
}
