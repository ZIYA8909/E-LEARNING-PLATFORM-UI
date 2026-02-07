export const Input = ({ placeholder, type = 'text', icon: Icon, onChange }) => (
  <div className="relative w-full">
    {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />}
    <input 
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={`w-full py-4 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none transition-all ${Icon ? 'pl-12' : 'px-4'}`}
    />
  </div>
);