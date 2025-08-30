interface StatusMessageProps {
  type: 'success' | 'error';
  message: string;
  className?: string;
}

export default function StatusMessage({ type, message, className = '' }: StatusMessageProps) {
  const styles = {
    success: {
      container: 'bg-success/10 border-success/20',
      icon: 'text-success',
      text: 'text-success',
      iconPath: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
    },
    error: {
      container: 'bg-red-50 border-red-200',
      icon: 'text-red-600',
      text: 'text-red-700',
      iconPath: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
    }
  };

  const currentStyle = styles[type];

  return (
    <div className={`mt-4 p-4 border rounded-lg ${currentStyle.container} ${className}`}>
      <div className="flex items-start space-x-2">
        <svg
          className={`w-6 h-6 pt-[3px] flex-shrink-0 ${currentStyle.icon}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d={currentStyle.iconPath} clipRule="evenodd" />
        </svg>
        <p className={`font-medium ${currentStyle.text}`}>
          {message}
        </p>
      </div>
    </div>
  );
}
