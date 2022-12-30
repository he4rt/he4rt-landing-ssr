import { AiOutlineTwitter } from 'react-icons/ai';
import { UserCardProps } from '~/components/Staff';

const UserCard = ({ avatar, username, occupation, twitter }: UserCardProps) => (
  <div className='max-w-fit'>
    <img
      src={avatar}
      alt={`Avatar do ${username}`}
      className='mb-2.5 h-60 max-h-60 w-60 rounded-xl object-cover'
    />
    <div className='flex justify-between'>
      <div>
        <p className='font-spline text-xl font-bold text-gray-950'>
          {username}
        </p>
        <span className='font-dm text-base text-gray-650'>{occupation}</span>
      </div>
      <a
        href={twitter}
        rel='noopener noreferrer'
        target='_blank'
        className='h-fit'
      >
        <AiOutlineTwitter color='#1DA1F2' size={28} />
      </a>
    </div>
  </div>
);

export default UserCard;
