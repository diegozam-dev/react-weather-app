const url = 'https://weatherapi-com.p.rapidapi.com/current.json';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_API_HOST,
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
    const res = await fetch(`${url}?q=${location}`, options);
    const data = await res.json();

    if (res.status !== 200) throw data.error;

    return createWeatherData(data.location, data.current);
  } catch (e) {
    return createErrorData(e);
  }
};

const createErrorData = (error) => {
  const newError = errors.find((e) => {
    if (e.errorCode !== error.code) return;
    return e;
  });

  const errorData = {
    code: newError.statusCode,
    message: newError.message,
  };

  return errorData;
};

const createWeatherData = (locationData, currentData) => {
  const weatherData = {
    code: 200,
    country: locationData.country,
    name: locationData.name,
    condition: currentData.condition.text,
    isDay: currentData.is_day,
    icon: currentData.condition.icon,
    temp: currentData.temp_c,
    windKph: currentData.wind_kph,
    humidity: currentData.humidity,
    coordinates: `${locationData.lat}, ${locationData.lon}`,
  };

  return weatherData;
};
