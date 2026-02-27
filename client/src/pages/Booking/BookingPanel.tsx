import BookingTable from './BookingTable';

const BookingPage = () => {
  return (
    <div className='h-full flex flex-col p-6 w-full'>
      <h1 className='text-xl font-semibold text-stone-800 mb-4 shrink-0'>Rezerwacja stolika</h1>

      <div className='bg-white rounded-xl shadow-sm border border-stone-200 p-4 mb-8 shrink-0'>
        <h2 className='text-xs font-medium text-stone-500 uppercase tracking-wider mb-3'>Wybierz datę i godzinę</h2>
        <div className='flex gap-4'>
          <div className='flex-1 min-w-0'>
            <label className='block text-sm text-stone-600 mb-1'>Data</label>
            <div className='h-10 px-4 rounded-lg border border-stone-300 bg-stone-50 flex items-center text-stone-500 text-sm'>
              Wybierz datę
            </div>
          </div>
          <div className='flex-1 min-w-0'>
            <label className='block text-sm text-stone-600 mb-1'>Godzina</label>
            <div className='h-10 px-4 rounded-lg border border-stone-300 bg-stone-50 flex items-center text-stone-500 text-sm'>
              Wybierz godzinę
            </div>
          </div>
          <div className='flex-1 min-w-0'>
            <label className='block text-sm text-stone-600 mb-1'>Liczba gości</label>
            <div className='h-10 px-4 rounded-lg border border-stone-300 bg-stone-50 flex items-center text-stone-500 text-sm'>
              2 osoby
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white rounded-xl shadow-sm border border-stone-200 p-6 flex-1 min-h-0 flex flex-col'>
        <h2 className='text-xs font-medium text-stone-500 uppercase tracking-wider mb-4 shrink-0'>Dostępne stoliki</h2>
        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 flex-1 min-h-0 content-start'>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
            <BookingTable key={n} number={n} />
          ))}
        </div>
      </div>

      <div className='flex justify-end gap-3 pt-4 shrink-0'>
        <button
          type='button'
          className='px-5 py-2.5 rounded-lg border border-stone-300 text-stone-600 hover:bg-stone-50 transition-colors text-sm'>
          Anuluj
        </button>
        <button
          type='button'
          className='px-5 py-2.5 rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition-colors text-sm'>
          Zarezerwuj
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
