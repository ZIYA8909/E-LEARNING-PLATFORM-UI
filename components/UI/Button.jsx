export const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const styles = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-emerald-500 text-white hover:bg-emerald-600',
    outline: 'border-2 border-slate-200 text-slate-600 hover:border-indigo-600 hover:text-indigo-600'
  };
  
  return (
    <button 
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-bold transition-all duration-200 active:scale-95 ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};