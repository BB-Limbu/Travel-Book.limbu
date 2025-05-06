import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { HelmetProvider } from 'react-helmet-async';
import 'sonner/dist/styles.css'; 
import { AuthProvider } from './utils/AuthContext';
import ProtectedRoute from './utils/ProtectedRoute';

// Lazy loaded components
const Login = lazy(() => import('./pages/Auth/login.jsx'));
const Signup = lazy(() => import('./pages/Auth/Signup.jsx'));
const ForgotPassword = lazy(() => import('./pages/Auth/ForgotPassword.jsx'));
const ResetPassword = lazy(() => import('./pages/Auth/ResetPassword.jsx'));
const ChangePassword = lazy(() => import('./pages/Auth/ChangePassword.jsx'));
const Home = lazy(() => import('./pages/home/Home.jsx'));
const Hero = lazy(() => import('./../src/pages/hero/Hero.jsx'));
const Mistake = lazy(() => import('./pages/mistake.jsx')); 
const StoryDetails = lazy(() => import('./../src/pages/home/StoryDetails.jsx'));
const Terms = lazy(() => import('./pages/legal/Terms.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy.jsx'));
const Profile = lazy(() => import('./pages/profile/Profile.jsx'));
const PublicProfile = lazy(() => import('./pages/profile/PublicProfile.jsx'));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-cyan-50 dark:bg-gray-900">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-500 dark:border-cyan-400"></div>
  </div>
);

const App = () => {
  return (
    <div>
      <Toaster />
      <HelmetProvider>
        <Router>
          <AuthProvider>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" exact element={<Hero />} />
                <Route path="/dashboard" exact element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/signup" exact element={<Signup />} />
                <Route path="/forgot-password" exact element={<ForgotPassword />} />
                <Route path="/reset-password" exact element={<ResetPassword />} />
                <Route path="/change-password" exact element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
                <Route path="/terms" exact element={<Terms />} />
                <Route path="/privacy-policy" exact element={<PrivacyPolicy />} />
                <Route path="/profile" exact element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                <Route path="/public-profile/:userId" exact element={<PublicProfile />} />
                <Route path="*" exact element={<Mistake />} />
                <Route path="/story/:id" element={<StoryDetails />} />
              </Routes>
            </Suspense>
          </AuthProvider>
        </Router>
      </HelmetProvider>
    </div>
  );
};

export default App;