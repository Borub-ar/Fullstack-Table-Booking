const BookingHistoryPage = () => {
  return (
    <div className='h-full flex flex-col p-6 max-w-4xl'>
      <h1 className='text-xl font-semibold text-stone-800 mb-4 shrink-0'>Moje rezerwacje</h1>

      <div className='bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden flex-1 min-h-0 flex flex-col'>
        <table className='w-full shrink-0'>
          <thead>
            <tr className='bg-stone-50 border-b border-stone-200'>
              <th className='text-left py-3 px-4 text-xs font-medium text-stone-600'>Data</th>
              <th className='text-left py-3 px-4 text-xs font-medium text-stone-600'>Godzina</th>
              <th className='text-left py-3 px-4 text-xs font-medium text-stone-600'>Stolik</th>
              <th className='text-left py-3 px-4 text-xs font-medium text-stone-600'>Goście</th>
              <th className='text-right py-3 px-4 text-xs font-medium text-stone-600'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-stone-100 hover:bg-stone-50/50'>
              <td className='py-3 px-4 text-stone-700 text-sm'>—</td>
              <td className='py-3 px-4 text-stone-700 text-sm'>—</td>
              <td className='py-3 px-4 text-stone-700 text-sm'>—</td>
              <td className='py-3 px-4 text-stone-700 text-sm'>—</td>
              <td className='py-3 px-4 text-right'>
                <span className='inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-600'>
                  —
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='flex-1 flex items-center justify-center text-stone-400 text-sm'>
          Brak rezerwacji. Wybierz datę i stolik, aby utworzyć rezerwację.
        </div>
      </div>
    </div>
  );
};

export default BookingHistoryPage;
