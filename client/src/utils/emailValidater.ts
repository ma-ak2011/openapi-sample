export const validateEmail = (email: string): boolean => {
  const regularExpression =
    /^([a-zA-Z0-9])+([a-zA-Z0-9._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9._-]+)+$/;
  const result = regularExpression.exec(email) !== null;
  return result;
};
