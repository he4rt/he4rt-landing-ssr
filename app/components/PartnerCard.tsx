export default function PartnerCard() {
  return (
    <>
      <div className='flex gap-4 p-12 shadow-xl'>
        <img
          className='w-10 h-10'
          alt='partnerpicture'
          src='/images/partner-picture.png'
        />
        <div>
          <div className='flex flex-col items-center justify-between md:flex-row'>
            <h3 className='text-xl font-bold font-spline'>Sinergicon</h3>
            <span className='dark:text-white/80'>Contadora</span>
          </div>
          <p className='mt-2 mb-4 font-normal font-dm dark:text-white/80'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            viverra lorem eget luctus iaculis.
          </p>
          <button className='w-full py-2 text-white bg-purple-500 rounded-lg'>
            Entrar em contato
          </button>
        </div>
      </div>
    </>
  );
}
