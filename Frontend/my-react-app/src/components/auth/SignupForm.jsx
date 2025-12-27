import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { validatePassword } from '../../utils/Validation';
import { checkDuplicateEmail, createUser } from '../../utils/authHelpers';

export const SignupForm = ({ onSuccess, onError, onNavigate }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = () => {
    if (checkDuplicateEmail(formData.email)) {
      onError('Email ID should not be a duplicate in database');
      return;
    }

    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      onError(passwordError);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      onError('Passwords do not match');
      return;
    }

    createUser(formData.email, formData.password);
    onSuccess('Portal user created successfully!');
    setFormData({ email: '', password: '', confirmPassword: '' });
    
    setTimeout(() => {
      onNavigate('login');
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSignup();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          icon={<Mail className="w-5 h-5 text-gray-400" />}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <Input
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Create a password"
          icon={<Lock className="w-5 h-5 text-gray-400" />}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-gray-400" />
              ) : (
                <Eye className="w-5 h-5 text-gray-400" />
              )}
            </button>
          }
        />
        <p className="mt-2 text-xs text-gray-500">
          Must be 8+ characters with uppercase, lowercase, and special character
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Confirm Password
        </label>
        <Input
          type={showPassword ? 'text' : 'password'}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Confirm your password"
          icon={<Lock className="w-5 h-5 text-gray-400" />}
        />
      </div>

      <Button onClick={handleSignup}>Create Account</Button>

      <div className="text-center">
        <p className="text-gray-600">
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => onNavigate('login')}
            className="text-indigo-600 hover:text-indigo-700 font-semibold"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};