import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AccessContextProvider } from './contexts/AccessContext';

import AuthWrapper from './pages/Auth/AuthWrapper';
import AuthEmailVerificationNotice from './pages/Auth/EmailVerificationNotice';
import AuthEmailVerificationResult from './pages/Auth/EmailVerificationResult';
import AuthLoginForm from './pages/Auth/LoginForm';
import AuthRegistrationForm from './pages/Auth/RegistrationForm';
import AuthSignup from './pages/Auth/index';

import BookingHistoryPage from './pages/Booking/BookingHistoryPage';
import BookingLayout from './pages/Booking';
import BookingPage from './pages/Booking/BookingPanel';

import PageNotFound from './pages/Error/PageNotFound';
import RequireAuth from './components/Routing/RequireAuth';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AccessContextProvider>
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

            {/* <Route element={<RequireAuth />}> */}
            <Route path='/booking' element={<BookingLayout />}>
              <Route index element={<BookingPage />} />
              <Route path='history' element={<BookingHistoryPage />} />
            </Route>
            {/* </Route> */}

            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </Router>
      </AccessContextProvider>
    </QueryClientProvider>
  );
}

export default App;
