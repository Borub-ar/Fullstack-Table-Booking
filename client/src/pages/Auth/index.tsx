import { Outlet } from 'react-router-dom';

import signupBackground from '../../assets/images/auth-background.jpg';

const Signup = () => {
  return (
    <div
      className='min-h-screen bg-cover bg-center flex justify-center items-center'
      style={{ backgroundImage: `url(${signupBackground})` }}>
      <Outlet />
    </div>
  );
};

export default Signup;
