interface Season {
  id: number;
  name: string;
  description: string;
  starts_at: string;
  ends_at: string;
  created_at: string;
  updated_at: string;
  participants_count: number;
  messages_count: number;
  badges_count: number;
  meetings_count: number;
}

interface SeasonInfo {
  id: number;
  user_id: number;
  season_id: number;
  level: number;
  messages_count: number;
  created_at: string;
  updated_at: string;
  meetings_count: number;
  badges_count: number;
  experience: number;
  ranking_position: number;
  season: Season;
}

interface BadgeInfo {
  id: number;
  name: string;
  description: string;
  redeem_code: string;
  image_url: string;
  active: boolean;
  created_at: string;
  updated_at: string;
  pivot: {
    user_id: number;
    badge_id: number;
  };
}

export interface APIProfile {
  id: number;
  discord_id: number;
  discord_avatar_url?: string;
  twitch_id: unknown;
  email: string;
  name: string;
  nickname: string;
  git: string;
  linkedin: string;
  about: string;
  level: number;
  current_exp: number;
  money: string;
  daily: string;
  is_donator: boolean;
  created_at: string;
  updated_at: string;
  uf: string | null;
  ranking_position: number;
  badges_count: number;
  messages_count: number;
  season_info?: SeasonInfo[];
  badges?: BadgeInfo[];
}

export interface APPProfile {
  level: APIProfile['level'];

  seasonInfo?: {
    rankingPosition?: SeasonInfo['ranking_position'];
    seasonName?: SeasonInfo['season']['name'];
  };

  badgeInfo?: {
    id: BadgeInfo['id'];
    name: BadgeInfo['name'];
    description: BadgeInfo['description'];
    badgePicture: BadgeInfo['image_url'];
  }[];

  name: APIProfile['name'];
  nickname: APIProfile['nickname'];
  git: APIProfile['git'];
  linkedin: APIProfile['linkedin'];
  messagesCount: APIProfile['messages_count'];
  badgesCount: APIProfile['badges_count'];
  rankingPosition: APIProfile['ranking_position'];
  about: APIProfile['about'];

  // TODO find a way to get user profile pic
  profilePicture: string;
}
