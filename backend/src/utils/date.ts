export const getCurrentDate = () => {
  return new Date().toISOString().split('T')[0];
};

export const formatDate = (date: Date) => {
  return date.toLocaleDateString();
};