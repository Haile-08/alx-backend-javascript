export default function hasValuesFromArray(setArg, arrayArg) {
  return arrayArg.every((value) => setArg.has(value));
}
