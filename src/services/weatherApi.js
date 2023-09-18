const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1d7bd2d2bamsh2766db896bc7be2p169930jsne86a11129438',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
};

const errors = [
  {
    errorCode: 1006,
    statusCode: 400,
    message: 'No location found',
  },
  {
    errorCode: 2006,
    statusCode: 401,
    message: 'API key provided is invalid',
  },
  {
    errorCode: 2007,
    statusCode: 403,
    message: 'Has exceeded calls per month quota',
  },
  {
    errorCode: 2008,
    statusCode: 403,
    message: 'Key has been disabled',
  },
  {
    errorCode: 2009,
    statusCode: 403,
    message: 'Does not have access to the resource',
  },
  {
    errorCode: 9999,
    statusCode: 400,
    message: 'Internal application error',
  },
];

export const getWeatherData = async (location) => {
  try {
    const res = await fetch(url + location, options);

    const data = await res.json();
    console.log(data);
    if (res.status !== 200) throw data.error;

    return createWeatherData(data.location, data.current);
  } catch (e) {
    return createErrorData(e);
  }
};

const createErrorData = ({ code }) => {
  const error = errors.find((e) => {
    if (e.errorCode !== code) return;

    return e;
  });

  const errorData = {
    code: error.statusCode,
    message: error.message,
  };

  return errorData;
};

const createWeatherData = (locationData, currentData) => {
  const weatherData = {
    code: 200,
    country: locationData.country,
    name: locationData.name,
    coordinates: `${locationData.lat}, ${locationData.lon}`,
    condition: currentData.condition.text,
    icon: currentData.condition.icon,
    windKph: currentData.wind_kph,
    temp: currentData.temp_c,
    isDay: currentData.is_day,
    humidity: currentData.humidity,
  };

  return weatherData;
};
