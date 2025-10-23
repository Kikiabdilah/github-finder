export const ErrorMessage = ({ message }) => {
  if (!message) return null;
  
  return (
    <div className="bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded-lg mb-6">
      {message}
    </div>
  );
};