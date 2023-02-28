const Pagination = ({ pageNumbers, currentPage, onSetCurrentPage }) => {
  return (
    <div className="pagination w-full flex flex-wrap justify-center mt-20">
      {pageNumbers.map((pageNum, index) => (
        <span
          key={index}
          className={
            pageNum === currentPage
              ? "cursor-pointer flex items-center justify-center w-12 h-12 rounded-md bg-gradient-to-tr from-indigo-500 to-pink-500 text-white m-1"
              : "cursor-pointer flex items-center justify-center w-12 h-12 border-2 rounded-md m-1"
          }
          onClick={() => {
            onSetCurrentPage(pageNum);
          }}
        >
          {pageNum}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
