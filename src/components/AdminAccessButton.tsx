
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings } from 'lucide-react';

const AdminAccessButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/admin')}
      className="fixed bottom-4 right-4 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground p-3 rounded-full transition-all duration-200 opacity-50 hover:opacity-100 z-50"
      title="Admin Access"
    >
      <Settings size={20} />
    </button>
  );
};

export default AdminAccessButton;
