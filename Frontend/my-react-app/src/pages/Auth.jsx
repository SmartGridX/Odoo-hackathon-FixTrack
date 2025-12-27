import React, { useState } from 'react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { LoginForm } from '../components/auth/LoginForm';
import { SignupForm } from '../components/auth/SignupForm';
import { ForgotPasswordForm } from '../components/auth/ForgotPasswordForm';

export const Auth = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setError('');
    setSuccess('');
  };

  const handleSuccess = (message) => {
    setSuccess(message);
    setError('');
  };

  const handleError = (message) => {
    setError(message);
    setSuccess('');
  };

  const getTitle = () => {
    switch (currentPage) {
      case 'login': return 'Welcome Back';
      case 'signup': return 'Create Account';
      case 'forgot': return 'Reset Password';
      default: return 'Welcome Back';
    }
  };

  const getSubtitle = () => {
    switch (currentPage) {
      case 'login': return 'Please login to your account';
      case 'signup': return 'Sign up to create a portal user';
      case 'forgot': return 'Enter your email to reset password';
      default: return 'Please login to your account';
    }
  };

  return (
    <AuthLayout
      title={getTitle()}
      subtitle={getSubtitle()}
      error={error}
      success={success}
    >
      {currentPage === 'login' && (
        <LoginForm
          onSuccess={handleSuccess}
          onError={handleError}
          onNavigate={handleNavigate}
        />
      )}
      {currentPage === 'signup' && (
        <SignupForm
          onSuccess={handleSuccess}
          onError={handleError}
          onNavigate={handleNavigate}
        />
      )}
      {currentPage === 'forgot' && (
        <ForgotPasswordForm
          onSuccess={handleSuccess}
          onNavigate={handleNavigate}
        />
      )}
    </AuthLayout>
  );
};