export function numToPersian(num: number) {
  return num.toLocaleString('ar-EG');
}

export function checkPriceInput(value: string) {
  return /^[0-9]*\.?[0-9]*$/.test(value);
}
