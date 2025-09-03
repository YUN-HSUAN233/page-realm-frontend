import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import RegisterEmailPage from './pages/RegisterEmailPage';
import EmailVerificationPage from './pages/EmailVerificationPage';
import UserMainPage from './pages/UserMainPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import PasswordSettings from './pages/UserSettings/PasswordSettings';
import BirthdateSettings from './pages/UserSettings/BirthdateSettings';
import GenderSettings from './pages/UserSettings/GenderSettings';
import UsernameSettings from './pages/UserSettings/UsernameSettings';
import AvatarSettings from './pages/UserSettings/AvatarSettings';
import TotpSettings from './pages/Totp/TotpSettings';
import OAuth2RedirectHandler from './pages/OAuth2RedirectHandler';
import SupportTicketPage from './pages/SupportTicketPage';
import SupportMessagePage from './pages/SupportMessagePage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register-email" element={<RegisterEmailPage />} />
            <Route path="/email-verification" element={<EmailVerificationPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
            <Route 
              path="/user-main" 
              element={
                <ProtectedRoute>
                  <UserMainPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/support" 
              element={
                <ProtectedRoute>
                  <SupportTicketPage />
                </ProtectedRoute>
              }
            />
            <Route 
              path="/support/new" 
              element={
                <ProtectedRoute>
                  <SupportMessagePage />
                </ProtectedRoute>
              }
            />
            <Route 
              path="/settings/password" 
              element={
                <ProtectedRoute>
                  <PasswordSettings />
                </ProtectedRoute>
              }
            />
            <Route 
              path="/settings/birthdate" 
              element={
                <ProtectedRoute>
                  <BirthdateSettings />
                </ProtectedRoute>
              }
            />
            <Route 
              path="/settings/gender" 
              element={
                <ProtectedRoute>
                  <GenderSettings />
                </ProtectedRoute>
              }
            />
            <Route 
              path="/settings/username" 
              element={
                <ProtectedRoute>
                  <UsernameSettings />
                </ProtectedRoute>
              }
            />
            <Route 
              path="/settings/avatar" 
              element={
                <ProtectedRoute>
                  <AvatarSettings />
                </ProtectedRoute>
              }
            />
            {/* 二階段認證首次登入（持有 tempJwt）可直接存取 */}
            <Route path="/settings/totp" element={<TotpSettings />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
