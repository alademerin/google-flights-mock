export function objectAccessor<T extends object, R = unknown>(
  obj: T,
  desc: string
): R | undefined {
  const arr = desc ? desc.split(".") : [];
  let result: any = obj;

  while (arr.length && (result = result?.[arr.shift() as keyof typeof result])) {}

  return result as R | undefined;
}
