import { BaseURL } from "./BaseUrl";

// ImageUrl
export const imageUrl = `http://localhost:1000`;

// 1.Add an incident by admin
export const AddIncidentByAdmin = `${BaseURL}/adminIncidentApi/AddIncidentByAdmin`;

// 2.Add image for incident by admin
export const addFilesForIncidentByAdmin = (id) =>
  `${BaseURL}/adminIncidentApi/addFilesForIncidentByAdmin/${id}`;
// 3.Get all incidents
export const getAllDataOfIncidentsToAdmin = `${BaseURL}/adminIncidentApi/getAllDataOfIncidentsToAdmin`;

// 4.Delete an incident
export const deleteIncident = (postId) =>
  `${BaseURL}/adminIncidentApi/deleteIncident/${postId}`;
