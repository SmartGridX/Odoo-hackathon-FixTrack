// Simulate database (in real app, this would be API calls)
let usersDB = [{ email: "test@example.com", password: "Test@123" }];

export const findUserByEmail = (email) => {
  return usersDB.find((u) => u.email === email);
};

export const createUser = (email, password) => {
  const newUser = { email, password };
  usersDB.push(newUser);
  return newUser;
};

export const checkDuplicateEmail = (email) => {
  return usersDB.some((u) => u.email === email);
};
