import { AiOutlineTwitter } from 'react-icons/ai';
import { users } from '~/mocks/users';

export type UserCardProps = {
  avatar: string;
  username: string;
  occupation: string;
  twitter: string;
};

const UserCard = ({ avatar, username, occupation, twitter }: UserCardProps) => (
  <div className='max-w-fit'>
    <img
      src={avatar}
      alt={`Avatar do ${username}`}
      className='rounded-xl mb-2.5 max-h-60 h-60 w-60 object-cover'
    />
    <div className='flex justify-between'>
      <div>
        <p className='font-spline font-bold text-xl text-gray-950'>
          {username}
        </p>
        <span className='text-gray-650 font-dm text-base'>{occupation}</span>
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

export default function Staff() {
  return (
    <>
      <h3 className='font-sans font-bold text-4xl text-gray-700 md:text-center mb-2'>
        Venha conhecer a equipe da{' '}
        <span className='text-purple-500'>He4rt Devs.</span>
      </h3>
      <p className='font-sans text-xl	font-normal text-gray-750 md:text-center mb-12 max-w-4xl mx-auto'>
        Nós temos os recursos para levar qualquer ideia para frente, nenhum
        sonho é louco demais para nós. Descubra como desenvolver projetos que
        revolucionam a maneira de aprender.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-y-8 gap-x-11'>
        {users.map((user) => (
          <UserCard key={`user-key-${user.username}`} {...user} />
        ))}
      </div>
    </>
  );
}
