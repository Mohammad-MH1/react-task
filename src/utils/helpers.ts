export function numToPersian(num: number) {
  return num.toLocaleString('ar-EG');
}

function checkPriceInput(value: string) {
  return /^[0-9]*\.?[0-9]*$/.test(value);
}

export function handlePriceInput(
  inputVal: string,
  action: (value: string) => void,
  value: string,
) {
  const isValid = checkPriceInput(inputVal);
  if (!isValid || inputVal === '0') return action(value);
  action(inputVal);
}
