import type { LoaderArgs } from '@remix-run/node';
import { badRequest } from 'remix-utils';
import { useLoaderData } from '@remix-run/react';
import { fetchProfile } from '~/services/fetchProfile';

import ProfileBadge from '~/components/profile/ProfileBadge';
import ProfileAboutMe from '~/components/profile/ProfileAboutMe';
import ProfileBackground from '~/components/profile/ProfileBackground';
import ProfileHeader from '~/components/profile/ProfileHeader';
import ProfilePicture from '~/components/profile/ProfilePicture';

export const loader = async ({ params }: LoaderArgs) => {
  const userId = params['userId'];

  if (!userId) {
    throw badRequest({ message: 'No user id provided' });
  }

  return await fetchProfile(userId);
};

type LoaderType = typeof loader;

export default function Profile() {
  const data = useLoaderData<LoaderType>();

  return (
    <div className='w-screen h-screen bg-gray-50 font-dm'>
      <div className='relative w-full h-full max-w-screen-lg mx-auto bg-white shadow-sm'>
        <ProfileBackground />
        <div className='relative px-8'>
          <ProfilePicture {...data} />
          <ProfileHeader {...data} />
          <ProfileAboutMe description={data.about} />
          <ProfileBadge badgeInfo={data.badgeInfo} />
        </div>
      </div>
    </div>
  );
}
