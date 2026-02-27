import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AuthWrapper from './pages/Auth/AuthWrapper';
import AuthEmailVerificationNotice from './pages/Auth/AuthEmailVerificationNotice';
import AuthEmailVerificationResult from './pages/Auth/AuthEmailVerificationResult';
import AuthLoginForm from './pages/Auth/AuthLoginForm';
import AuthRegistrationForm from './pages/Auth/AuthRegistrationForm';
import AuthSignup from './pages/Auth/index';

import BookingHistoryPage from './pages/Booking/BookingHistoryPage';
import BookingLayout from './pages/Booking';
import BookingPage from './pages/Booking/BookingPanel';

import PageNotFound from './pages/Error/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/auth' element={<AuthSignup />}>
          <Route element={<AuthWrapper />}>
            <Route path='register' element={<AuthRegistrationForm />} />
            <Route path='login' element={<AuthLoginForm />} />
            <Route path='verify-email' element={<AuthEmailVerificationNotice />} />
            <Route path='verify-email-result' element={<AuthEmailVerificationResult />} />
          </Route>
        </Route>

        <Route path='/booking' element={<BookingLayout />}>
          <Route index element={<BookingPage />} />
          <Route path='history' element={<BookingHistoryPage />} />
        </Route>

        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
