export const validatePassword = (password: string): boolean => {
  const regularExpression = /^[a-z\d]{8,12}$/i;
  const result = regularExpression.exec(password) !== null;
  return result;
};
