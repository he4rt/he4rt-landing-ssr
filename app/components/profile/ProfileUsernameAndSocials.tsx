import type { APPProfile } from '~/types/profile';

type ProfileUsernameAndSocialsProps = Pick<
  APPProfile,
  'name' | 'nickname' | 'git' | 'linkedin'
>;

export default function ProfileUsernameAndSocials({
  name,
  nickname,
  git,
  linkedin,
}: ProfileUsernameAndSocialsProps) {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center space-x-4'>
        <span className='font-spline text-xl font-bold text-gray-900'>
          {name}
        </span>
        <span className='text-base font-bold text-gray-700'>{nickname}</span>
      </div>
      <div className='mt-4 flex space-x-4 text-[#868686]'>
        <a href={linkedin} target='_blank' rel='noreferrer'>
          <LinkedinIcon />
        </a>
        <a href={git} target='_blank' rel='noreferrer'>
          <GithubIcon />
        </a>
      </div>
    </div>
  );
}

const LinkedinIcon = () => (
  <svg
    viewBox='0 0 16 17'
    className='h-5'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M14.8156 0.602539H1.18125C0.528125 0.602539 0 1.11816 0 1.75566V15.4463C0 16.0838 0.528125 16.6025 1.18125 16.6025H14.8156C15.4688 16.6025 16 16.0838 16 15.4494V1.75566C16 1.11816 15.4688 0.602539 14.8156 0.602539ZM4.74687 14.2369H2.37188V6.59941H4.74687V14.2369ZM3.55938 5.55879C2.79688 5.55879 2.18125 4.94316 2.18125 4.18379C2.18125 3.42441 2.79688 2.80879 3.55938 2.80879C4.31875 2.80879 4.93437 3.42441 4.93437 4.18379C4.93437 4.94004 4.31875 5.55879 3.55938 5.55879ZM13.6344 14.2369H11.2625V10.5244C11.2625 9.64004 11.2469 8.49941 10.0281 8.49941C8.79375 8.49941 8.60625 9.46504 8.60625 10.4619V14.2369H6.2375V6.59941H8.5125V7.64316H8.54375C8.85938 7.04316 9.63438 6.40879 10.7875 6.40879C13.1906 6.40879 13.6344 7.99004 13.6344 10.0463V14.2369Z'
      fill='currentColor'
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    viewBox='0 0 16 17'
    className='h-5'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_2540_1876)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.00107 0.935852C6.10189 0.936837 4.26498 1.60949 2.81881 2.83353C1.37263 4.05758 0.411497 5.75319 0.107258 7.61718C-0.196981 9.48118 0.175513 11.392 1.15814 13.008C2.14077 14.6239 3.66945 15.8397 5.47085 16.4378C5.86826 16.5116 6.01796 16.2653 6.01796 16.0558C6.01796 15.8464 6.01001 15.2392 6.00736 14.5753C3.78183 15.0561 3.31155 13.6362 3.31155 13.6362C2.94858 12.7141 2.42399 12.4718 2.42399 12.4718C1.69804 11.9792 2.4783 11.9884 2.4783 11.9884C3.28241 12.045 3.705 12.809 3.705 12.809C4.4177 14.0247 5.57682 13.6731 6.03253 13.4676C6.10406 12.9526 6.31205 12.6022 6.54123 12.4033C4.76345 12.2031 2.89559 11.5208 2.89559 8.4728C2.88457 7.68232 3.17958 6.91789 3.71957 6.33764C3.63744 6.13743 3.36321 5.32867 3.79772 4.23014C3.79772 4.23014 4.46936 4.01676 5.99809 5.04548C7.30934 4.68893 8.69281 4.68893 10.0041 5.04548C11.5315 4.01676 12.2018 4.23014 12.2018 4.23014C12.6376 5.32604 12.3634 6.13479 12.2812 6.33764C12.823 6.91798 13.1186 7.68375 13.1065 8.47543C13.1065 11.53 11.2347 12.2031 9.45429 12.3993C9.74043 12.647 9.9961 13.1304 9.9961 13.8733C9.9961 14.9376 9.98683 15.7937 9.98683 16.0558C9.98683 16.2679 10.1312 16.5155 10.5366 16.4378C12.3382 15.8396 13.867 14.6237 14.8496 13.0074C15.8323 11.3912 16.2045 9.48005 15.9 7.61589C15.5954 5.75172 14.6338 4.05609 13.1871 2.83226C11.7405 1.60842 9.90313 0.936213 8.00372 0.935852H8.00107Z'
        fill='currentColor'
      />
      <path
        d='M3.02905 12.3572C3.01183 12.3967 2.94825 12.4086 2.89658 12.3809C2.84492 12.3533 2.8065 12.3019 2.82505 12.2611C2.8436 12.2202 2.90586 12.2097 2.95752 12.2373C3.00919 12.265 3.04893 12.3177 3.02905 12.3572Z'
        fill='white'
      />
      <path
        d='M3.3535 12.7168C3.32607 12.7305 3.29468 12.7344 3.26472 12.7276C3.23475 12.7209 3.20807 12.704 3.18924 12.6799C3.13757 12.6246 3.12697 12.5482 3.16671 12.5139C3.20645 12.4797 3.27799 12.4955 3.32966 12.5508C3.38132 12.6061 3.39324 12.6825 3.3535 12.7168Z'
        fill='white'
      />
      <path
        d='M3.6686 13.1739C3.61959 13.2081 3.53612 13.1739 3.48976 13.1054C3.47694 13.0931 3.46674 13.0784 3.45978 13.0621C3.45281 13.0458 3.44922 13.0283 3.44922 13.0106C3.44922 12.9929 3.45281 12.9753 3.45978 12.959C3.46674 12.9427 3.47694 12.928 3.48976 12.9157C3.53877 12.8828 3.62224 12.9157 3.6686 12.9829C3.71497 13.0501 3.71629 13.1396 3.6686 13.1739Z'
        fill='white'
      />
      <path
        d='M4.09774 13.6164C4.05402 13.6651 3.96527 13.652 3.89241 13.5861C3.81955 13.5203 3.80232 13.4307 3.84604 13.3833C3.88975 13.3359 3.97851 13.349 4.05402 13.4136C4.12953 13.4781 4.1441 13.569 4.09774 13.6164Z'
        fill='white'
      />
      <path
        d='M4.6968 13.8746C4.67693 13.9365 4.58685 13.9642 4.49676 13.9378C4.40668 13.9115 4.34707 13.8377 4.36429 13.7745C4.38151 13.7113 4.47292 13.6823 4.56433 13.7113C4.65573 13.7403 4.71402 13.8101 4.6968 13.8746Z'
        fill='white'
      />
      <path
        d='M5.35091 13.9194C5.35091 13.9839 5.27673 14.0393 5.18135 14.0406C5.08597 14.0419 5.00781 13.9892 5.00781 13.9247C5.00781 13.8601 5.08199 13.8048 5.17737 13.8035C5.27275 13.8022 5.35091 13.8535 5.35091 13.9194Z'
        fill='white'
      />
      <path
        d='M5.96094 13.818C5.97286 13.8825 5.90662 13.9497 5.81124 13.9655C5.71586 13.9813 5.63241 13.9431 5.62048 13.8799C5.60856 13.8167 5.67745 13.7482 5.77018 13.7311C5.86291 13.7139 5.94902 13.7534 5.96094 13.818Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_2540_1876'>
        <rect
          width='16'
          height='16'
          fill='white'
          transform='translate(0 0.602539)'
        />
      </clipPath>
    </defs>
  </svg>
);
