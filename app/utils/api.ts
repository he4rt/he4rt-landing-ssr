import type { APIProfile, APPProfile } from '~/types/profile';
import type { Course, APPContributors } from '~/types/contributors';

export const apiProfileToAppProfile = (apiProfile: APIProfile): APPProfile => ({
  level: apiProfile.character.level,
  name: apiProfile.information.name,
  nickname: apiProfile.information.nickname,
  git: apiProfile.information.github_url,
  linkedin: apiProfile.information.linkedin_url,
  experience: apiProfile.character.experience,
  messagesCount:
    apiProfile.connectedProviders.find((provider) =>
      provider.provider.includes('discord'),
    )?.messages_count || 0,
  badgesCount: apiProfile.badges.length,
  rankingPosition: apiProfile.pastSeasons[0].ranking_position,
  about: apiProfile.information.about,
  // TODO FIX PROFILE PICTURE
  profilePicture: `https://ui-avatars.com/api/?name=${encodeURIComponent(
    apiProfile.information.nickname,
  )}`,
  seasonInfo: {
    rankingPosition: apiProfile.pastSeasons?.[0]?.ranking_position,
    seasonName: apiProfile.pastSeasons?.[0]?.season_id,
  },
  badgeInfo: apiProfile.badges?.map((badge) => ({
    id: badge.id,
    name: badge.name,
    description: badge.description,
    badgePicture: badge.image_url,
  })),
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
