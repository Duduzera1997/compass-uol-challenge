import axios from 'axios';

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'https://api.nytimes.com/svc/topstories/v2',
};

const nyt = axios.create(defaultOptions);

nyt.interceptors.request.use((config) => {
  const defaultParams = {
    'api-key': 'LEe8tARGkETprjQgI7Eeygqn6OSNc4e0',
  };

  const configuration = {
    ...config,
    url: `${config.url}.json`,
    params: {
      ...config.params,
      ...defaultParams,
    },
  };

  return configuration;
});

export default nyt;
