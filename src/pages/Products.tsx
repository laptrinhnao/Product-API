import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import PaginationButton from "../components/PaginationButton";
function Produces() {
  interface Produce {
    brand: string;
    category: string;
    decription: string;
    discoutPercent: number;
    id: number;
    images: string;
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
  }
  const [produces, setProduces] = useState<Produce[]>([]);
  const [value, setValue] = useState("");
  const [sortvalue, setSortvalue] = useState("");

  const totalPages: number = 10;
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const [selectedProductId, setSelectedProductId] = useState(null);

  const sortOptions = ["title", "brand", "price", "rating", "category"];

  useEffect(() => {
    loadProducesData();
  }, []);

  const loadProducesData = async () => {
    const skip = Math.min(currentPage + 10, totalPages);
    try {
      setLoading(true);
      const res = await axios.get(
        `https://dummyjson.com/products?_skip=${skip}&limit=10`
      );
      console.log(res.data.products);
      setProduces(res.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    return {
      loading,
      produces,
      totalPages,
      setCurrentPage,
    };
  };

  const handleReset = () => loadProducesData();
  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`https://dummyjson.com/products/search?q=${value}`)
      .then((response) => {
        setProduces(response.data.products);
        setValue("");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const handleSort = async (e) => {
    let value = e.target.value;
    setSortvalue(value);
    return await axios
      .get(`https://dummyjson.com/products?_sort=${value}&_order=asc`)
      .then((response) => {
        setProduces(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        console.log("Delete success", response.data);
        // location.reload();
      })
      .catch((error) => console.error("Error:", error));
  };

  const produceInfor = (id) => {
    setSelectedProductId(id);
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <MDBContainer>
        <form
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
          className="d-flex input-group w-auto"
          onSubmit={handleSearch}
        >
          <Input
            type="text"
            className="form-control"
            placeholder="Search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <MDBBtn type="submit" color="dark">
            Search
          </MDBBtn>
          <MDBBtn className="mx-2" color="dark" onClick={() => handleReset()}>
            Reset
          </MDBBtn>
        </form>

        {/* render */}
        <MDBRow>
          <MDBCol>
            <Button type="primary">
              <Link to="/create"> Add product</Link>
            </Button>
            <Button type="primary">
              <Link to="/carts"> Carts</Link>
            </Button>
            <MDBTable>
              <MDBTableHead dark>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Title</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Categories</th>
                  <th scope="col">Price</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Action</th>
                </tr>
              </MDBTableHead>
              {produces.map.length === 0 ? (
                <MDBTableBody className="align-center mb-0">
                  <tr>
                    <td colSpan={8} className="text-center mb-0">
                      {" "}
                      No data Found
                    </td>
                  </tr>
                </MDBTableBody>
              ) : loading ? (
                <>
                  <MDBTableBody className="align-center mb-0">
                    <tr className="text-center text-5xl"></tr>
                  </MDBTableBody>
                </>
              ) : (
                <>
                  {produces.map((item, index) => (
                    <MDBTableBody key={index}>
                      <tr onClick={() => produceInfor(item.id)}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.title}</td>
                        <td>{item.brand}</td>
                        <td>{item.category}</td>
                        <td>{item.price}</td>
                        <td>{item.rating}</td>
                        <td>{item.stock}</td>
                        <td>
                          <Button type="primary">
                            <Link to={`/update/${item.id}`}> Update</Link>
                          </Button>
                          <Button
                            type="primary"
                            onClick={() => handleDelete(item.id)}
                          >
                            delete
                          </Button>
                          <Button type="primary">
                            <Link to={`/read/${item.id}`}> Read</Link>
                          </Button>
                        </td>
                      </tr>
                    </MDBTableBody>
                  ))}
                  <PaginationButton
                    totalPages={totalPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </>
              )}
            </MDBTable>
          </MDBCol>
        </MDBRow>

        {/* sort */}
        <MDBRow>
          <MDBCol size="8">
            <select
              style={{ width: "50%", borderRadius: "5px", height: "40px" }}
              onChange={handleSort}
              value={sortvalue}
            >
              <option>Sort By</option>
              {sortOptions.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Produces;
