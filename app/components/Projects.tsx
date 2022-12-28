import Slider from 'react-slick';
import * as data from '~/mocks/projects';

export type ProjectsProps = {
  avatar: string;
  username: string;
  github: string;
  projectTitle: string;
  projectCategory: string;
  projectDescription: string;
  projectUrl: string;
};

const Projects = () => {
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
        {data.projects.map((project) => (
          <div key={project.username}>
            <div className='rounded-lg overflow-hidden shadow-md flex flex-col flex-1 m-4'>
              <div className='flex flex-row flex-1 gap-4 items-center justify-center p-4 bg-gradient-to-tr from-[#782BF1] to-[#C92BF1] text-white'>
                <img
                  src={project.avatar}
                  alt='Avatar do usuário'
                  className='w-8 h-8 rounded-full shadow-md'
                />

                <div className='flex flex-col w-32'>
                  <p className='text-xs font-bold'>{project.username}</p>
                  <p className='text-xs'>{project.github}</p>
                </div>
              </div>

              <div className='flex flex-col flex-1 p-4 bg-white'>
                <p className='text-sm text-[#782BF1] font-bold'>
                  4Noobs{' '}
                  <span className='text-[#424141] font-normal'>
                    - {project.projectTitle}
                  </span>
                </p>
                <p className='text-xs font-medium text-[#8C8B8E]'>
                  {project.projectCategory}
                </p>

                <span className='flex w-full border-t boder-[#F1E9FF] mt-2' />

                <p className='w-full text-xs font-normal text-[#8C8B8E] mt-2'>
                  {project.projectDescription}
                </p>
              </div>

              <a
                href={project.projectUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col flex-1 text-center bg-purple-500 hover:bg-purple-600 text-white font-bold py-1 transition-all'
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
