import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import WeatherCard from '../components/WeatherCard';
import { getWeather } from '../services/weatherService';

const HomeScreen = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const data = await getWeather(city);
    setWeather(data);
    console.log('Fetched weather data:', data);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        label="City"
        value={city}
        onChangeText={text => setCity(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={fetchWeather} style={styles.button}>
        Get Weather
      </Button>
      {weather && <WeatherCard weather={weather} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
  },
});

export default HomeScreen;
