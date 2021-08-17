//* This file contains only admin API_routes*//

// 1.BaseURL Localhost
const BaseURL = `http://localhost:1000/api`;

// 1.Admin Login Himself
export const AdminLogin = `${BaseURL}/admin/AdminLogin`;

// 2.Admin Fetching All Users
export const AdminFetchAllUsers = `${BaseURL}/admin/FetchAllUsers`;

// 3.Admin Adds New Users
export const AddNewUser = `${BaseURL}/admin/AddNewUser`;

// 4.Admin Delete Single User
export const DeletSingleUser = (userId) =>
  `${BaseURL}/admin/DeletSingleUser/${userId}`;

// 5.Admin Updates Single User
export const UpdateUser = (userId) => `${BaseURL}/admin/UpdateUser/${userId}`;
