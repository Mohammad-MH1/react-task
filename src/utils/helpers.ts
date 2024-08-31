export function numToPersian(num: number) {
  return num.toLocaleString('ar-EG');
}

export function checkPriceInput(value: string) {
  const input = value.trim();
  return /^(\d*([.])?\d+)$/.test(input);
}
