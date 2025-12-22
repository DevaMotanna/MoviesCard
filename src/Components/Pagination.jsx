const Pagination = ({ page, setPage }) => {
  return (
    <div className="flex flex-row py-5 items-center justify-center gap-2">
      <button disabled={page === 1} onClick={() => setPage(page - 1)} className="w-[150px] bg-red-500 text-white rounded-md p-2 border border-transparent 
                   hover:bg-white hover:text-black hover:border-blue-500 transition-all duration-300">
        Prev
      </button>
      <span> Page {page} </span>
      <button onClick={() => setPage(page + 1)} className="w-[150px] bg-blue-500 text-white rounded-md p-2 border border-transparent 
                   hover:bg-white hover:text-black hover:border-blue-500 transition-all duration-300">Next</button>
    </div>
  );
};

export default Pagination;
