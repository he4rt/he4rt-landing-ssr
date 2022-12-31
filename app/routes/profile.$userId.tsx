import type { LoaderArgs } from '@remix-run/node';
import ProfileAboutMe from '~/components/profile/ProfileAboutMe';
import ProfileBackground from '~/components/profile/ProfileBackground';
import ProfileHeader from '~/components/profile/ProfileHeader';
import ProfilePicture from '~/components/profile/ProfilePicture';
import { badRequest } from 'remix-utils';
import { useLoaderData } from '@remix-run/react';
import { fetchProfile } from '~/services/fetchProfile';

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
    <div className='h-screen w-screen bg-gray-50 font-dm'>
      <div className='relative mx-auto h-full w-full max-w-screen-lg bg-white shadow-sm'>
        <ProfileBackground />
        <div className='relative px-8'>
          <ProfilePicture {...data} />
          <ProfileHeader {...data} />
          <ProfileAboutMe description={data.about} />
        </div>
      </div>
    </div>
  );
}
