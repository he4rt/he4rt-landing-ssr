import type { APIProfile, APPProfile } from '~/types/profile';

export const apiProfileToAppProfile = (apiProfile: APIProfile): APPProfile => ({
  level: apiProfile.level,
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
  seasonInfo: {
    rankingPosition: apiProfile.season_info?.[0]?.ranking_position,
    seasonName: apiProfile.season_info?.[0]?.season.name,
  },
  badgeInfo: apiProfile.badges?.map((badge) => ({
    id: badge.id,
    name: badge.name,
    description: badge.description,
    badgePicture: badge.image_url,
  })),
});
