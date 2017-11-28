export default function arrayMultiFilter(data) {
  return Object.keys(this).every((key) => {
    const a = data[key];
    const b = this[key];

    const isNumeric = !isNaN(a - b);

    if (isNumeric) return a === b;

    return a.toLowerCase().includes(b.toLowerCase());
  });
}