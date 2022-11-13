import axios from 'axios';

interface GetCatFact {
  fact: string;
  length: number;
}

export const apiRoutes = {
  getCatFact: () => axios.get<GetCatFact>('https://catfact.ninja/fact'),
};
