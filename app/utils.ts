import type { APIProfile, APPProfile } from '~/types/profile';
import type { Course, APPContributors } from '~/types/contributors';

export const apiProfileToAppProfile = (apiProfile: APIProfile): APPProfile => ({
  level: apiProfile.level,
  seasonInfo: {
    rankingPosition: apiProfile.season_info?.[0]?.ranking_position,
    seasonName: apiProfile.season_info?.[0]?.season.name,
  },
  name: apiProfile.name,
  nickname: apiProfile.nickname,
  git: apiProfile.git,
  linkedin: apiProfile.linkedin,
  messagesCount: apiProfile.messages_count,
  badgesCount: apiProfile.badges_count,
  rankingPosition: apiProfile.ranking_position,
  about: apiProfile.about,
  profilePicture:
    apiProfile.discord_avatar_url ??
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      apiProfile.nickname,
    )}`,
});

export const apiContributorsToAppContributors = (
  apiContributors: Course,
): APPContributors => ({
  name: apiContributors.author.name,
  username: apiContributors.author.username,
  avatar: apiContributors.author.avatar_url,
  github: apiContributors.url,
  projectTitle: apiContributors.name,
  projectCategory: apiContributors.category,
  projectDescription: apiContributors.description,
});
