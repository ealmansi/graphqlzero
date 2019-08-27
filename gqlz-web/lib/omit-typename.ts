export function omitTypename(key: string, value: any) {
  if (key === '__typename') {
    return undefined;
  }
  return value;
}
