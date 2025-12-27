import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { findUserByEmail } from '../../utils/authHelpers';

export const LoginForm = ({ onSuccess, onError, onNavigate }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = () => {
    const user = findUserByEmail(formData.email);

    if (!user) {
      onError('Account not exist');
      return;
    }

    if (user.password !== formData.password) {
      onError('Invalid Password');
      return;
    }

    onSuccess('Login successful!');
    setFormData({ email: '', password: '' });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
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
          onKeyPress={handleKeyPress}
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
          onKeyPress={handleKeyPress}
          placeholder="Enter your password"
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
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => onNavigate('forgot')}
          className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
        >
          Forgot Password?
        </button>
      </div>

      <Button onClick={handleLogin}>Login</Button>

      <div className="text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={() => onNavigate('signup')}
            className="text-indigo-600 hover:text-indigo-700 font-semibold"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};