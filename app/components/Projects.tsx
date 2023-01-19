import Slider from 'react-slick';
import type { APPContributors } from '~/types/contributors';

const Projects = ({ contributors }: { contributors: APPContributors[] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className='w-full md:w-[715px]'>
      <Slider {...settings}>
        {contributors?.map((contributor) => (
          <div key={contributor.username} className='select-none'>
            <div className='flex flex-col flex-1 mx-4 my-4 overflow-hidden rounded-lg shadow-md h-72 md:mx-0 md:w-56'>
              <div className='flex h-full max-h-14 flex-1 flex-row items-center justify-center gap-4 bg-gradient-to-tr from-[#782BF1] to-[#C92BF1] p-4 text-white'>
                <img
                  src={contributor.avatar}
                  alt='Avatar do usuário'
                  className='w-8 h-8 rounded-full shadow-md'
                />

                <div className='flex flex-col w-32'>
                  <p className='... truncate text-xs font-bold'>
                    {contributor.name}
                  </p>
                  <p className='text-xs'>{contributor.username}</p>
                </div>
              </div>

              <div className='flex flex-col flex-1 p-4 bg-white'>
                <p className='text-sm font-bold text-[#782BF1]'>
                  4Noobs{' '}
                  <span className='font-normal text-[#424141]'>
                    -{' '}
                    {contributor.projectTitle.split('4noobs'.toLowerCase())[0]}
                  </span>
                </p>
                <p className='text-xs font-medium text-[#8C8B8E]'>
                  {contributor.projectCategory}
                </p>

                <span className='mt-2 flex w-full border-t border-[#F1E9FF]' />

                <p className='mt-2 w-full text-xs font-normal text-[#8C8B8E]'>
                  {contributor.projectDescription}
                </p>
              </div>

              <a
                href={contributor.github}
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col flex-1 h-full py-1 font-bold text-center text-white transition-all bg-purple-500 max-h-9 hover:bg-purple-600'
              >
                Acessar
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
