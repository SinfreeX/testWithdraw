
// Слайсер для нарезки суммы денег в привычный формат
export const priceSlicer = (price: number | string, isRound = true) => {
  let [integer, fraction] = String(price).split('.');
  integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  fraction = isRound ? Number(`0.${fraction || 0}`).toFixed(2).split('.')[1] : fraction;
  return fraction ? `${integer}.${fraction}` : integer;
}
