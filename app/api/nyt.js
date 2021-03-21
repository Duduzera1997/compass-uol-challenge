import axios from 'axios';

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'https://api.nytimes.com/svc/topstories/v2',
};

const nyt = axios.create(defaultOptions);

nyt.interceptors.request.use((request) => {
  const defaultParams = {
    'api-key': 'LEe8tARGkETprjQgI7Eeygqn6OSNc4e0',
  };

  request.url = `${request.url}.json`;

  request.params = {
    ...request.params,
    ...defaultParams,
  };

  return request;
});

export default nyt;
