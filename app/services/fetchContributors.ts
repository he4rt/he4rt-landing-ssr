import axios from 'axios';
import type { APIContributors, APPContributors } from '~/types/contributors';
import { serverError } from 'remix-utils';
import { apiContributorsToAppContributors } from '~/utils';

const contributorsURL = process.env.GITHUB_CONTRIBUTORS_URL;

if (!contributorsURL) {
  throw new Error('GITHUB_CONTRIBUTORS_URLenv not found');
}

export async function fetchContributors(): Promise<APPContributors[]> {
  return axios
    .get<APIContributors>(contributorsURL!)
    .then((data) =>
      data.data.courses.map((course) =>
        apiContributorsToAppContributors(course),
      ),
    )
    .catch((err) => {
      console.error(`Error while fetching github contributors`);
      console.error(err);

      throw serverError({});
    });
}
