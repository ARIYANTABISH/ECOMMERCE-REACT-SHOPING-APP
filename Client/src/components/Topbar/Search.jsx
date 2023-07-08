import Form from "react-bootstrap/Form";
import "./Topbar.css";
import { BsSearch } from "react-icons/bs";
// import menTshirtsData from '../../products_Pages/Men_Products/CLOTHING/T_Shirts/Data'
// import { useState } from "react";
const Search = () => {
 
 
  return (
    <div className="flex">
      <Form className="d-flex">
        <Form.Control
          type="text"
          placeholder="Search items"
          className=" search"
          aria-label="Search"
          id="example-search-input"
        />
        <button className="btn border-dark" type="submit">
          <BsSearch className="search_icon" />
        </button>
      </Form>
      <div className="container">
       
      </div>
    </div>
  );
};

export default Search;
