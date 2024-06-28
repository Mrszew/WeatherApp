import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

const WeatherCard = ({ weather }) => {
  return (
    <Card style={{ marginTop: 20 }}>
      <Card.Content>
        <Title>{weather.name}</Title>
        <Paragraph>Temperature: {weather.main.temp} °C</Paragraph>
        <Paragraph>Weather: {weather.weather[0].description}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default WeatherCard;
