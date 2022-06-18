const BASE_URL = "https://api.coinpaprika.com/v1";
const COINS_URL = `${BASE_URL}/coins`;

export const coins = () => fetch(COINS_URL).then((response) => response.json());

export const info = ({ queryKey }) =>
  fetch(`${COINS_URL}/${queryKey[1]}`).then((response) => response.json());

export const history = ({ queryKey }) => {
  return fetch(
    `${BASE_URL}/tickers/${queryKey[1]}/historical?start=2022-06-01&interval=1d`
  ).then((response) => response.json());
};
