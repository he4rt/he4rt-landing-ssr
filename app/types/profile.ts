interface UserInfo {
  id: string;
  user_id: string;
  name: string;
  nickname: string;
  linkedin_url: string;
  github_url: string;
  birthdate: string | null;
  about: string;
}

interface CharacterInfo {
  user_id: string;
  reputation: number;
  level: number;
  experience: number;
  percentage_experience: number;
  daily_bonus_claimed_at: {
    date: string;
    timezone_type: number;
    timezone: string;
  };
}

interface ProvidersInfo {
  id: string;
  user_id: string;
  provider: string;
  provider_id: string;
  email: string | null;
  created_at: string;
  updated_at: string;
  messages_count: number;
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

interface SeasonInfo {
  id: string;
  season_id: string;
  character_id: string;
  ranking_position: number;
  experience: number;
  messages_count: number;
  badges_count: number;
  meetings_count: number;
}

export interface APIProfile {
  information: UserInfo;
  address: {
    country: null;
    state: 'SP';
  };
  character: CharacterInfo;
  connectedProviders: ProvidersInfo[];
  badges: BadgeInfo[];
  pastSeasons: SeasonInfo[];
}

export interface APPProfile {
  level: CharacterInfo['level'];

  seasonInfo?: {
    rankingPosition?: SeasonInfo['ranking_position'];
    seasonName?: SeasonInfo['id'];
  };

  badgeInfo?: {
    id: BadgeInfo['id'];
    name: BadgeInfo['name'];
    description: BadgeInfo['description'];
    badgePicture: BadgeInfo['image_url'];
  }[];

  experience: CharacterInfo['percentage_experience'];
  name: UserInfo['name'];
  nickname: UserInfo['nickname'];
  git: UserInfo['github_url'];
  linkedin: UserInfo['linkedin_url'];
  messagesCount: ProvidersInfo['messages_count'];
  badgesCount: SeasonInfo['badges_count'];
  rankingPosition: SeasonInfo['ranking_position'];
  about: UserInfo['about'];
  profilePicture: string;
}
