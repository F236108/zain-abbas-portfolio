
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Eye, EyeOff } from 'lucide-react';

const PasswordManager = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswords, setShowPasswords] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    const storedPassword = localStorage.getItem('admin-password') || 'admin123';
    
    if (currentPassword !== storedPassword) {
      toast.error('Current password is incorrect');
      return;
    }
    
    if (newPassword.length < 6) {
      toast.error('New password must be at least 6 characters');
      return;
    }
    
    if (newPassword !== confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }
    
    setIsChanging(true);
    
    // Simulate processing
    setTimeout(() => {
      localStorage.setItem('admin-password', newPassword);
      toast.success('Password changed successfully');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setIsChanging(false);
    }, 1000);
  };

  const handleResetPassword = () => {
    const confirmed = window.confirm(
      'Are you sure you want to reset the password to default (admin123)? This action cannot be undone.'
    );
    
    if (confirmed) {
      localStorage.setItem('admin-password', 'admin123');
      toast.success('Password reset to default (admin123)');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div className="p-6 bg-card rounded-lg border border-border">
      <h3 className="text-lg font-medium mb-4">Password Management</h3>
      
      <form onSubmit={handleChangePassword} className="space-y-4 mb-6">
        <div>
          <label htmlFor="currentPassword" className="block text-sm font-medium mb-1">
            Current Password
          </label>
          <div className="relative">
            <input
              id="currentPassword"
              type={showPasswords ? 'text' : 'password'}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full px-4 py-2 bg-muted rounded border border-border focus:outline-none focus:ring-2 focus:ring-electric pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPasswords(!showPasswords)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPasswords ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
        
        <div>
          <label htmlFor="newPassword" className="block text-sm font-medium mb-1">
            New Password
          </label>
          <input
            id="newPassword"
            type={showPasswords ? 'text' : 'password'}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-2 bg-muted rounded border border-border focus:outline-none focus:ring-2 focus:ring-electric"
            minLength={6}
            required
          />
        </div>
        
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
            Confirm New Password
          </label>
          <input
            id="confirmPassword"
            type={showPasswords ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 bg-muted rounded border border-border focus:outline-none focus:ring-2 focus:ring-electric"
            minLength={6}
            required
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isChanging}
          className="btn-primary w-full"
        >
          {isChanging ? 'Changing Password...' : 'Change Password'}
        </button>
      </form>
      
      <div className="pt-4 border-t border-border">
        <p className="text-sm text-muted-foreground mb-3">
          Forgot your password? Reset it to the default password.
        </p>
        <button 
          onClick={handleResetPassword}
          className="btn-secondary"
        >
          Reset to Default Password
        </button>
      </div>
    </div>
  );
};

export default PasswordManager;
