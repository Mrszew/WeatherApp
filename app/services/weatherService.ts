// app/services/weatherService.ts
import axios from 'axios';

const API_KEY = '57cf1e5228d321214abdde8e9776e1e8'; // Upewnij się, że klucz API jest poprawny
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    console.log('API response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};
