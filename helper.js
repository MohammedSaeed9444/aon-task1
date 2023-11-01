const getAllUser = (list) => {
  return list;
};

const getFirstUser = (list) => {
  return list[0];
};

const getLast = (list) => {
  return list[list.length - 1];
};

const getUserByID = (list, userID) => {
  return list.find((user) => user.id === userID);
};

const getUserByCompanyName = (list, companyName) => {
  return list.find((user) => user.company.name === companyName);
};

const getUsersByCity = (list, city) => {
  return list.filter((user) => user.address.city === city);
};

const getStreet = (list, userID) => {
  const user = list.find((user) => user.id === userID);
  return user ? user.address.street : null;
};

const addNewUser = (list, userObject) => {
  list.push(userObject);
};

const updateUser = (list, userID, newEmail) => {
  const user = list.find((user) => user.id === userID);
  if (user) {
    user.email = newEmail;
  }
};

const deleteUserById = (list, userID) => {
  const index = list.findIndex((user) => user.id === userID);
  if (index !== -1) {
    list.splice(index, 1);
  }
};

module.exports = {
  getAllUser,
  getFirstUser,
  getLast,
  getUserByID,
  getUserByCompanyName,
  getUsersByCity,
  getStreet,
  addNewUser,
  updateUser,
  deleteUserById,
};
