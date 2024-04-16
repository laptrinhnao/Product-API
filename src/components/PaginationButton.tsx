import ReactPaginate from "react-paginate";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
function PaginationButton({ setCurrentPage, currentPage, totalPages }) {
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const showNextButton = currentPage !== totalPages - 10;
  const showPrevButton = currentPage !== 0;
  return (
    <ReactPaginate
      breakLabel={<span className="mr-4">...</span>}
      nextLabel={
        showNextButton ? (
          <span className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-md">
            <CaretRightOutlined />
          </span>
        ) : null
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={totalPages}
      previousLabel={
        showPrevButton ? (
          <span className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-md mr-4">
            <CaretLeftOutlined />
          </span>
        ) : null
      }
      containerClassName="flex items-center justify-center mt-8 mb-4"
      pageClassName="block border- border-solid border-lightGray hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-4"
      activeClassName="bg-purple text-white"
    />
  );
}

export default PaginationButton;
