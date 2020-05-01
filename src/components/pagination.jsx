import React from "react";
import { unlink } from "fs";

const Pagination = props => {
  let { limit, size, currentPage, getPageNumber } = props;
  let noOfPages = Math.ceil(size / limit);

  const arr = [];

  for (let i = 1; i <= noOfPages; i++) {
    arr.push(i);
  }

  return (
    <nav className="...">
      <ul className="pagination pagination-lg">
        {arr.map(pageNumber => {
          return (
            currentPage === pageNumber ?
              <li className="page-item active"
                id={pageNumber + "a"}
                onClick={() => {
                  getPageNumber(pageNumber);
                }}
              >
                <span className="page-link">{pageNumber}</span>
              </li> :

              <li className="page-item"
                id={pageNumber + "a"}
                onClick={() => {
                  getPageNumber(pageNumber);
                }}
              >
                <span className="page-link">{pageNumber}</span>
              </li>
          );
        })}
      </ul>
    </nav>

  );
};
export default Pagination;