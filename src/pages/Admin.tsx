
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CVUploader from '../components/admin/CVUploader';
import PasswordManager from '../components/admin/PasswordManager';

const Admin = () => {
  const navigate = useNavigate();
  
  // Simple admin protection - in a real app you'd use proper authentication
  const [password, setPassword] = React.useState('');
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Get stored password or use default
    const storedPassword = localStorage.getItem('admin-password') || 'admin123';
    
    if (password === storedPassword) {
      setIsAuthenticated(true);
      localStorage.setItem('admin-auth', 'true');
    } else {
      alert('Incorrect password');
    }
  };
  
  React.useEffect(() => {
    // Check if already authenticated
    if (localStorage.getItem('admin-auth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('admin-auth');
    setIsAuthenticated(false);
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          {isAuthenticated ? (
            <div className="flex gap-4">
              <button 
                onClick={() => navigate('/')} 
                className="btn-secondary"
              >
                View Website
              </button>
              <button 
                onClick={handleLogout} 
                className="text-destructive hover:underline"
              >
                Logout
              </button>
            </div>
          ) : null}
        </div>
        
        {!isAuthenticated ? (
          <div className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-muted rounded border border-border focus:outline-none focus:ring-2 focus:ring-electric"
                  placeholder="Enter admin password"
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Login
              </button>
            </form>
            <p className="text-sm text-muted-foreground mt-4">
              Default password: admin123
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            <CVUploader />
            <PasswordManager />
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
