import axios, { AxiosError } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

interface Table {
  _id: string;
  mexGuestsNumber: number;
  tableNumber: number;
}

interface GetAllTablesResponse {
  success: boolean;
  message: string;
  data: Table[];
}

const httpGetAllTables = async () => {
  try {
    const response = await axios.get<GetAllTablesResponse>(`${API_BASE_URL}/tables`);
    return response.data.data;
  } catch (error) {
    return (error as AxiosError).response?.data;
  }
};

export { httpGetAllTables };
