import type { APIProfile, APPProfile } from '~/types/profile';

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
  profilePicture: `https://ui-avatars.com/api/?name=${encodeURIComponent(
    apiProfile.nickname,
  )}`,
});
