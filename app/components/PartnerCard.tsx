export default function PartnerCard() {
  return (
    <>
      <div className='bg-white shadow-xl flex p-12 gap-4'>
        <img
          className='h-10 w-10'
          alt='partnerpicture'
          src='/images/partner-picture.png'
        />
        <div>
          <div className='flex justify-between items-center'>
            <h3 className='font-spline text-gray-950 text-xl font-bold'>
              Sinergicon
            </h3>
            <span className='text-gray-650'>Contadora</span>
          </div>
          <p className='text-gray-650 font-normal font-dm mt-2 mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            viverra lorem eget luctus iaculis.
          </p>
          <button className='w-full bg-purple-500 text-white py-2 rounded-lg'>
            Entrar em contato
          </button>
        </div>
      </div>
    </>
  );
}
