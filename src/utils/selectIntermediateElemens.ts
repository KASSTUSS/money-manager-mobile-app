export default function selectIntermediateElemens<T>(arr: T[]): T[] {
  if (arr.length !== 30) {
    throw new Error("Array must have exactly 30 elements.");
  }

  const result: T[] = [];
  for (let i = 0; i < arr.length; i += 5) {
    result.push(arr[i]);
  }

  return result;
}