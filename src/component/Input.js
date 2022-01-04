const Input = ({ icon, placeholder, type, value, onChange }) => {
  return (
    <div className=" bg-light-100 z-10 text-dark p-3 rounded-full flex space-x-2 items-center">
      <span className="material-icons">{icon}</span>
      <input
        className="bg-light-100 w-full font-semibold font-quicksand focus:outline-none text-lg"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
