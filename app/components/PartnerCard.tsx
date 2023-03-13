export default function PartnerCard() {
  return (
    <>
      <div className='flex gap-4 bg-white p-12 shadow-xl'>
        <img
          className='h-10 w-10'
          alt='partnerpicture'
          src='/images/partner-picture.png'
        />
        <div>
          <div className='flex flex-col items-center justify-between md:flex-row'>
            <h3 className='font-spline text-xl font-bold text-gray-950'>
              Sinergicon
            </h3>
            <span className='text-gray-650'>Contadora</span>
          </div>
          <p className='mt-2 mb-4 font-dm font-normal text-gray-650'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            viverra lorem eget luctus iaculis.
          </p>
          <button className='w-full rounded-lg bg-purple-500 py-2 text-white'>
            Entrar em contato
          </button>
        </div>
      </div>
    </>
  );
}
