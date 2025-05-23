
import React, { useState } from 'react';
import { toast } from 'sonner';

const CVUploader = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (!file) return;
    
    // Only accept PDF files
    if (file.type !== 'application/pdf') {
      toast.error('Please upload a PDF file');
      return;
    }

    try {
      setIsUploading(true);
      setProgress(10);

      // Simulate upload progress (in a real app, this would be real progress from an upload API)
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 20;
          if (newProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return newProgress;
        });
      }, 500);

      // Save the file to localStorage (this is a demo - in a real app you'd use a proper backend)
      // Convert to base64 for storage
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target?.result) {
          const base64PDF = event.target.result.toString();
          localStorage.setItem('cv-pdf-data', base64PDF);
          localStorage.setItem('cv-pdf-name', file.name);
          localStorage.setItem('cv-upload-date', new Date().toISOString());
          
          clearInterval(interval);
          setProgress(100);
          
          setTimeout(() => {
            setIsUploading(false);
            setProgress(0);
            toast.success('CV uploaded successfully');
          }, 500);
        }
      };
      
      reader.readAsDataURL(file);
    } catch (error) {
      toast.error('Error uploading CV');
      setIsUploading(false);
      setProgress(0);
    }
  };

  return (
    <div className="p-6 bg-card rounded-lg border border-border">
      <h3 className="text-lg font-medium mb-4">Update Your CV</h3>
      <p className="text-sm text-gray-400 mb-4">
        Upload a new PDF file to update your CV. This will be available for download
        when users click the "Download CV" button on your portfolio.
      </p>
      
      <label className="block">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          disabled={isUploading}
          className="hidden"
        />
        <div className="btn-secondary flex items-center justify-center">
          {isUploading ? 'Uploading...' : 'Select PDF File'}
        </div>
      </label>
      
      {isUploading && (
        <div className="mt-4">
          <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
            <div 
              className="bg-electric h-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-1 text-right">{progress}%</p>
        </div>
      )}
      
      {localStorage.getItem('cv-pdf-name') && !isUploading && (
        <div className="mt-4 text-sm">
          <p>Current CV: <span className="text-electric">{localStorage.getItem('cv-pdf-name')}</span></p>
          <p className="text-xs text-gray-400">
            Uploaded: {new Date(localStorage.getItem('cv-upload-date') || '').toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default CVUploader;
