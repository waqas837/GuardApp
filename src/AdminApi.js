//* This file contains only admin API_routes*//
export const serverImagePath = "http://localhost:1000/"
// 1.BaseURL Localhost
const BaseURL = `http://localhost:1000/api`;
// please provide all routes here
// 1.Admin Login Himself
export const AdminLogin = `${BaseURL}/admin/AdminLogin`;

// 2.Admin Fetching All Users
export const AdminFetchAllUsers = `${BaseURL}/admin/FetchAllUsers`;

// 3.Admin Delete Single User
export const DeletSingleUser = (userId) =>
  `${BaseURL}/admin/DeletSingleUser/${userId}`;

// 4.Admin Updates Single User
export const UpdateUser = (userId) => `${BaseURL}/admin/UpdateUser/${userId}`;

// 5.adding a new user
export const addNewUser = `${BaseURL}/admin/addNewUser`;

// 6. getting dummy data/now it has become real retrieval of data
export const getdummydata = `${BaseURL}/admin/getdummydata`;

// 7. getting dummy data/now it has become real retrieval of data
export const imageUploadForUsers = (id) =>
  `${BaseURL}/admin/imageUploadForUsers/${id}`;
