import type { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { badRequest } from 'remix-utils';
import { fetchMedals } from '~/services/fetchMedals';
import { fetchProfile } from '~/services/fetchProfile';

import ProfileAboutMe from '~/components/profile/ProfileAboutMe';
import ProfileBackground from '~/components/profile/ProfileBackground';
import ProfileBadge from '~/components/profile/ProfileBadge';
import ProfileHeader from '~/components/profile/ProfileHeader';
import ProfilePicture from '~/components/profile/ProfilePicture';

export const loader = async ({ params }: LoaderArgs) => {
  const userId = params['userId'];

  if (!userId) {
    throw badRequest({ message: 'No user id provided' });
  }

  return {
    profile: await fetchProfile(userId),
    medals: await fetchMedals(userId),
  };
};

type LoaderType = typeof loader;

export default function Profile() {
  const { profile, medals } = useLoaderData<LoaderType>();

  return (
    <div className='h-screen w-screen bg-gray-50 font-dm dark:bg-[#272727]'>
      <div className='relative mx-auto h-full w-full max-w-screen-lg shadow-sm dark:bg-[#101010]'>
        <ProfileBackground />
        <div className='relative px-8'>
          <ProfilePicture {...profile} />
          <ProfileHeader {...profile} />
          <ProfileAboutMe description={profile.about} />
          <ProfileBadge badges={medals} />
        </div>
      </div>
    </div>
  );
}
