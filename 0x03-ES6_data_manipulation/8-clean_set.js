export default function cleanSet(set, startString) {
  const res = [];
  if (startString.length === 0) {
    return '';
  }
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      res.push(value.replace(startString, ''));
    }
  });
  return res.join('-');
}
