import axios from 'axios';

interface GetCatFactResponse {
  fact: string;
  length: number;
}

export const getCatFact = () =>
  axios.get<GetCatFactResponse>('https://catfact.ninja/fact');
