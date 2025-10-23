export const Button = ({ children, onClick, disabled, variant = 'primary', className = '' }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-colors disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700',
    secondary: 'bg-gray-800 hover:bg-gray-700 border border-gray-700'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};