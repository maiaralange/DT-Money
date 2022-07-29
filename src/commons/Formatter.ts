export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('pt-BR').format(date);

export const formatAmount = (value: number) => {
  if (!value) return '';
  return value.toString();
};
