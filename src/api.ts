import { MovieData } from './types/MovieData';
import { ResponseError } from './types/ReponseError';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=92335e2';

export function getMovie(query: string): Promise<MovieData | ResponseError> {
  return fetch(`${API_URL}&t=${query}`)
    .then(res => res.json())
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('API request failed:', error);

      return {
        Response: 'False',
        Error: 'unexpected error',
      };
    });
}
