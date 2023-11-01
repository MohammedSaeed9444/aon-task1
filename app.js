let helper = require("./helper");

let list = helper.getAllUser();
console.log(list);

// Get the first user
let firstUser = helper.getFirstUser(list);
console.log(firstUser);

// Get the last user
let lastUser = helper.getLast(list);
console.log(lastUser);

// Get a user by ID (replace userID with the desired ID)
let userByID = helper.getUserByID(list, userID);
console.log(userByID);

// Get a user by company name (replace companyName with the desired name)
let userByCompanyName = helper.getUserByCompanyName(list, companyName);
console.log(userByCompanyName);

// Get users by city (replace city with the desired city)
let usersByCity = helper.getUsersByCity(list, city);
console.log(usersByCity);

// Get street name by user ID (replace userID with the desired ID)
let street = helper.getStreet(list, userID);
console.log(street);

// Add a new user (replace userObject with the user object you want to add)
let newUserList = helper.addNewUser(list, userObject);
console.log(newUserList);

// Update a user's email by ID (replace userID and newEmail with the desired values)
let updatedList = helper.updateUser(list, userID, newEmail);
console.log(updatedList);

// Delete a user by ID (replace userID with the desired ID)
let newList = helper.deleteUserById(list, userID);
console.log(newList);

