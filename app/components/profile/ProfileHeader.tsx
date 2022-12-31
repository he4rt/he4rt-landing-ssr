import ProfileStats from './ProfileStats';
import ProfileUsernameAndSocials from './ProfileUsernameAndSocials';
import type { APPProfile } from '~/types/profile';

type ProfileHeaderProps = Pick<
  APPProfile,
  | 'git'
  | 'linkedin'
  | 'name'
  | 'nickname'
  | 'messagesCount'
  | 'badgesCount'
  | 'rankingPosition'
>;

export default function ProfileHeader(props: ProfileHeaderProps) {
  return (
    <section className='pt-20'>
      <div className='flex w-full justify-between'>
        <ProfileUsernameAndSocials {...props} />
        <ProfileStats
          type='messages'
          count={props.messagesCount}
          name='Mensagens enviadas'
        />
        <ProfileStats
          type='badges'
          count={props.badgesCount}
          name='Badges adquiridas'
        />
        <ProfileStats
          type='ranking'
          count={props.rankingPosition}
          name='Ranking atual'
        />
      </div>
      <hr className='my-8 w-full border border-[#F2E9FF]' />
    </section>
  );
}
