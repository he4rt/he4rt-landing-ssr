export interface Course {
  name: string;
  tags: string[];
  description: string;
  category: string;
  author: {
    name: string;
    username: string;
    avatar_url: string;
  };
  url: string;
}

export interface APIContributors {
  courses: Course[];
  socials: {
    twitter: number;
    instagram: number;
    github: number;
    discord: number;
  };
  categories: [];
}

export interface APPContributors {
  name: Course['author']['name'];
  username: Course['author']['username'];
  avatar: Course['author']['avatar_url'];
  github: Course['url'];
  projectTitle: Course['name'];
  projectCategory: Course['category'];
  projectDescription: Course['description'];
}
