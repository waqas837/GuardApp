import { BaseURL } from "./BaseUrl";
//* This file contains only admin API_routes*//
export const serverImagePath = "http://localhost:1000/";
// 1.BaseURL Localhost
// please provide all routes here
// 1.Admin Login Himself
export const AdminLogin = `${BaseURL}/adminUserApi/AdminLogin`;

// 2.Admin Fetching All Users
export const AdminFetchAllUsers = `${BaseURL}/adminUserApi/FetchAllUsers`;

// 3.Admin Delete Single User
export const DeletSingleUser = (userId) =>
  `${BaseURL}/adminUserApi/DeletSingleUser/${userId}`;

// 4.Admin Updates Single User
export const UpdateUser = (userId) =>
  `${BaseURL}/adminUserApi/UpdateUser/${userId}`;

// 5.adding a new user
export const addNewUser = `${BaseURL}/adminUserApi/addNewUser`;

// 6. getting dummy data/now it has become real retrieval of data
export const getdummydata = `${BaseURL}/adminUserApi/getdummydata`;

// 7. imageUploadForUsers
export const imageUploadForUsers = (id) =>
  `${BaseURL}/adminUserApi/imageUploadForUsers/${id}`;
// 8.UpdateUserImageOnly
export const UpdateUserImageOnly = (id) =>
  `${BaseURL}/adminUserApi/UpdateUserImageOnly/${id}`;
