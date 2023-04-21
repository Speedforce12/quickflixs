import { useState } from "react";
import PeopleMovieCard from "./PeopleMovieCard";

export default function Paginator({ OtherMedia }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(12);

  // Calculate the indexes of the first and last orders to display
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;

  // Create an array of orders to display based on the current page and orders per page
  const currentOrders = OtherMedia.slice(indexOfFirstOrder, indexOfLastOrder);

  // Handle the prev and next button clicks
  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 mt-3'>
        {currentOrders.map((media) => (
          <PeopleMovieCard media={media} />
        ))}
      </div>
      <div className='flex justify-center mt-3'>
        <button
          className='px-3 py-2 bg-gray-200 rounded-md mr-2'
          onClick={handlePrevClick}
          disabled={currentPage === 1}>
          Prev
        </button>
        <button
          className='px-3 py-2 bg-gray-200 rounded-md'
          onClick={handleNextClick}
          disabled={indexOfLastOrder >= OtherMedia.length}>
          Next
        </button>
      </div>
    </div>
  );
}
