export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(price).replace('€', '€'); // Gerekirse sembol yerini özelleştirebilirsin
};