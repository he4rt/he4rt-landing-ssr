import axios from 'axios';
import { notFound, serverError } from 'remix-utils';
import type { BadgeInfo } from '~/types/profile';

const baseURL = process.env.MSR_MEDALS_URL;

if (!baseURL) {
  throw new Error('MSR_MEDALS_URL env not found');
}

export async function fetchMedals(userId: string): Promise<BadgeInfo[]> {
  return axios
    .create({
      baseURL,
    })
    .get<BadgeInfo[]>(`/user/medals/${userId}`)
    .then((data) => data.data)
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
