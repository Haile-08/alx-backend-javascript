export default function cleanSet(set, startString) {
  const res = [];
  if (
    !set && !startString && !(set instanceof Set) && typeof startString !== 'string'
  ) {
    return '';
  }
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      res.push(value.replace(startString, ''));
    }
  });
  return res.join('-');
}
