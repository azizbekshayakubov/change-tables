// eslint-disable-next-line react/prop-types
function FormComp({ setchange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = +e.target[0].value - 1;
    if (inputValue < 0 || inputValue >= 3) {
      alert("Not found");

      return;
    }
    setchange(inputValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-5/6 border-0 border-b-2 border-neutral-400 focus:outline-0 focus:ring-0"
        type="number"
        placeholder="Enter tab index"
      />
      <button
        className=" ml-2 inline-block border bg-neutral-200 px-3 py-2  font-normal transition hover:bg-slate-600 hover:text-white"
        type="submit"
      >
        Change tab
      </button>
    </form>
  );
}

export default FormComp;
