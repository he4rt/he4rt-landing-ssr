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
            <div className='mr-3 flex flex-1 flex-col overflow-hidden rounded-lg shadow-md'>
              <div className='flex flex-1 flex-row items-center justify-center gap-4 bg-gradient-to-tr from-[#782BF1] to-[#C92BF1] p-4 text-white'>
                <img
                  src={project.avatar}
                  alt='Avatar do usuário'
                  className='h-8 w-8 rounded-full shadow-md'
                />

                <div className='flex w-32 flex-col'>
                  <p className='text-xs font-bold'>{project.username}</p>
                  <p className='text-xs'>{project.github}</p>
                </div>
              </div>

              <div className='flex flex-1 flex-col bg-white p-4'>
                <p className='text-sm font-bold text-[#782BF1]'>
                  4Noobs{' '}
                  <span className='font-normal text-[#424141]'>
                    - {project.projectTitle}
                  </span>
                </p>
                <p className='text-xs font-medium text-[#8C8B8E]'>
                  {project.projectCategory}
                </p>

                <span className='boder-[#F1E9FF] mt-2 flex w-full border-t' />

                <p className='mt-2 w-full text-xs font-normal text-[#8C8B8E]'>
                  {project.projectDescription}
                </p>
              </div>

              <a
                href={project.projectUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-1 flex-col bg-purple-500 py-1 text-center font-bold text-white transition-all hover:bg-purple-600'
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
