import axios from 'axios';

// API base URL
const baseURL = 'https://comp539-team2-backend-dot-rice-comp-539-spring-2022.uk.r.appspot.com/api';


const axiosInstance = axios.create({
    withCredentials: false,
});

// Function to get history by email
export const getHistory = async (email) => {
    try {
        const response = await axiosInstance.post(`${baseURL}/getHistory`, { email });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Function to remove spam by short URL
export const removeSpam = async (email, shortUrl) => {
    try {
        const response = await axiosInstance.put(`${baseURL}/removeSpam`, { email: email, short_url: shortUrl });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Function to get info by short URL
export const getInfo = async (email, shortUrl) => {
    try {
        const response = await axiosInstance.post(`${baseURL}/getInfo`, { email: email, short_url: shortUrl });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Function to mark spam by short URL
export const markSpam = async (email, shortUrl) => {
    try {
        const response = await axiosInstance.put(`${baseURL}/markSpam`, { email: email, short_url: shortUrl });
        return response.data;
    } catch (error) {
        throw error;
    }
};
