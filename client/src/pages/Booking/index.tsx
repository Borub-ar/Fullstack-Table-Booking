import { Link, NavLink, Outlet } from 'react-router-dom';

const BookingLayout = () => {
  return (
    <div className='h-screen max-h-screen flex bg-stone-100 overflow-hidden'>
      <aside className='w-64 bg-stone-800 text-stone-200 flex flex-col shrink-0'>
        <div className='p-6 border-b border-stone-700'>
          <Link to='/booking' className='text-xl font-semibold text-white tracking-tight'>
            Table Reserve
          </Link>
        </div>
        <nav className='flex-1 py-4'>
          <NavLink
            to='/booking'
            end
            className={({ isActive }) =>
              `block px-6 py-3 transition-colors ${
                isActive ? 'bg-stone-700 text-white border-l-4 border-amber-500' : 'hover:bg-stone-700/50'
              }`
            }>
            Rezerwuj stolik
          </NavLink>
          <NavLink
            to='/booking/history'
            className={({ isActive }) =>
              `block px-6 py-3 transition-colors ${
                isActive ? 'bg-stone-700 text-white border-l-4 border-amber-500' : 'hover:bg-stone-700/50'
              }`
            }>
            Moje rezerwacje
          </NavLink>
        </nav>
        <div className='p-4 border-t border-stone-700'>
          <Link to='/auth/login' className='text-sm text-stone-400 hover:text-white transition-colors'>
            Wyloguj
          </Link>
        </div>
      </aside>

      <main className='flex-1 min-h-0 overflow-hidden flex'>
        <div className='flex-1 min-h-0 overflow-hidden'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default BookingLayout;
