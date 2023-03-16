export default function accessImmutableObject(object, array) {

  let value = object;
  for (const key of array) {
    value = value.get(key);
}
  return value;
}