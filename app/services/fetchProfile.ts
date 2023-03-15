import axios from 'axios';
import type { APIProfile, APPProfile } from '~/types/profile';
import { apiProfileToAppProfile } from '~/utils/api';
import { notFound, serverError } from 'remix-utils';

const baseURL = process.env.BASE_URL;

if (!baseURL) {
  throw new Error('BASE_URL env not found');
}
const apikey = process.env.API_KEY;

if (!apikey) {
  throw new Error('API_KEY env not found');
}

export async function fetchProfile(userId: string): Promise<APPProfile> {
  return axios
    .create({
      baseURL,
      headers: {
        Authorization: apikey,
      },
    })
    .get<APIProfile>(`/users/${userId}`)
    .then((data) => apiProfileToAppProfile(data.data))
    .catch((err) => {
      console.error(`Error while fetching ${userId}`);
      console.error(err);

      if (!axios.isAxiosError(err)) {
        throw serverError({});
      }

      // Api returns a 422 when user doesnt exists on the DB
      if (err.status === 422) {
        throw notFound({});
      }

      throw serverError({});
    });
}
