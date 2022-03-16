import axios, { AxiosResponse } from 'axios';

export const axiosInstance = axios.create({
    baseURL: '/api'
});

export const getRequest = async <T>(url: string): Promise<T> => {
    const response = await axiosInstance.get<T, AxiosResponse<T>>(url);
    return response.data;
};

export const postRequest = async <T, D>(url: string, data: D): Promise<T> => {
    const response = await axiosInstance.post<T, AxiosResponse<T>, D>(url, data);
    return response.data;
};

export const putRequest = async <T, D>(url: string, data: D): Promise<T> => {
    const response = await axiosInstance.put<T, AxiosResponse<T>, D>(url, data);
    return response.data;
};

export const patchRequest = async <T, D>(url: string, data: D): Promise<T> => {
    const response = await axiosInstance.patch<T, AxiosResponse<T>, D>(url, data);
    return response.data;
};

export const deleteRequest = async <T>(url: string): Promise<T> => {
    const response = await axiosInstance.delete<T, AxiosResponse<T>>(url);
    return response.data;
};
