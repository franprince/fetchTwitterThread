const Buscador = ({ handleChange }) => {
  return (
    <div className="w-screen bg-white shadow p-4 flex">
      <span className="w-auto flex justify-end items-center text-gray-500 p-2">
        <i className="material-icons text-3xl">Buscar</i>
      </span>
      <input
        onChange={handleChange}
        className="w-full rounded p-2"
        type="text"
        placeholder="Por ej. 'Cuadernos'"
      />
    </div>
  );
};
export default Buscador;
