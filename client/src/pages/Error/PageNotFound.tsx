import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <main className='flex flex-col items-center justify-center h-screen bg-blue-50'>
      <h1 className='text-2xl font-bold'>Page Not Found</h1>
      <p className='text-gray-500 pb-4'>The page you are looking for does not exist.</p>
      <Link to='/auth/login' className='text-blue-500'>Go to Home</Link>
    </main>
  );
};

export default PageNotFound;
