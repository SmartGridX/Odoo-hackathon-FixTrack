import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Input } from '../common/Input';
import { Button } from '../common/Button';

export const ForgotPasswordForm = ({ onSuccess, onNavigate }) => {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    onSuccess('Password reset link sent to your email!');
    setTimeout(() => {
      onNavigate('login');
    }, 2000);
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          icon={<Mail className="w-5 h-5 text-gray-400" />}
        />
      </div>

      <Button onClick={handleReset}>Send Reset Link</Button>
      <Button onClick={() => onNavigate('login')} variant="secondary">
        Back to Login
      </Button>
    </div>
  );
};