import axios from 'axios';
import type { APIContributors, APPContributors } from '~/types/contributors';
import { apiContributorsToAppContributors } from '~/utils';

const contributorsURL = process.env.GITHUB_CONTRIBUTORS_URL;

if (!contributorsURL) {
  throw new Error('GITHUB_CONTRIBUTORS_URL env not found');
}

export async function fetchContributors(): Promise<APPContributors[]> {
  const response = await axios.get<APIContributors>(contributorsURL!);

  const contributors = response.data.courses.map((course) =>
    apiContributorsToAppContributors(course),
  );

  return contributors;
}
