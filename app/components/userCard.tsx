import { AiOutlineTwitter } from "react-icons/ai";

export type UserCardProps = {
  avatar: string;
  username: string;
  occupation: string;
  twitter: string;
};

export default function UserCard({
  avatar,
  username,
  occupation,
  twitter,
}: UserCardProps) {
  return (
    <div className="max-w-fit">
      <img
        src={avatar}
        alt={`Avatar do ${username}`}
        className="rounded-xl mb-2.5 max-h-60 h-60 w-60 object-cover"
      />
      <div className="flex justify-between">
        <div>
          <p className="font-spline font-bold text-xl text-gray-950">
            {username}
          </p>
          <span className="text-gray-650 font-dm text-base">{occupation}</span>
        </div>
        <a
          href={twitter}
          rel="noopener noreferrer"
          target="_blank"
          className="h-fit"
        >
          <AiOutlineTwitter color="#1DA1F2" size={28} />
        </a>
      </div>
    </div>
  );
}
