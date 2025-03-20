import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

export const api = setupCache(
    axios.create({
        baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en'
    }),
    { ttl: 1000 * 60 * 60 },
)
