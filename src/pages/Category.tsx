import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtnGroup,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Button } from "antd";
import { Link } from "react-router-dom";

function Category() {
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

  const [utitle, setuTitle] = useState("");
  const [ubrand, setuBrand] = useState("");
  const [ucategory, setuCategory] = useState("");
  const [uprice, setuPrice] = useState(0);
  const [urating, setuRating] = useState(0);
  const [ustock, setuStock] = useState(0);

  const [editId, setEditID] = useState(-1);

  const [findcategory, setFindcategory] = useState([]);
  const [categoryvalue, setCategoryvalue] = useState("");
  const [categoryProduces, setCategoryProduces] = useState<Produce[]>([]);

  const sortOptions = ["title", "brand", "price", "rating", "category"];

  useEffect(() => {
    loadProducesData();
  }, []);

  const loadProducesData = async () => {
    return await axios
      .get("https://dummyjson.com/products?_start=0&end=5")
      .then((response) => {
        setProduces(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // console.log(produces);
  const handleDelete = (id) => {
    axios
      .delete(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        console.log(response.data);
        // location.reload();
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleEdit = (id) => {
    setEditID(id);
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        // console.log(response.data);
        setuTitle(response.data.title);
        setuBrand(response.data.brand);
        setuCategory(response.data.category);
        setuPrice(response.data.price);
        setuRating(response.data.rating);
        setuStock(response.data.stock);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const handleUpdate = () => {
    axios
      .put(
        `https://dummyjson.com/products/${editId}`,
        {
          id: editId,
          title: utitle,
          brand: ubrand,
          category: ucategory,
          price: uprice,
          rating: urating,
          stock: ustock,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        console.log(response);
        location.reload();
        setEditID(-1);
      })
      .catch((error) => console.error("Error:", error));
  };
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        setFindcategory(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  const handleCategory = async (e) => {
    let id = e.target.value;
    setCategoryvalue(id);
    return await axios
      .get(`https://dummyjson.com/products/category/${id}`)
      .then((response) => {
        setCategoryProduces(response.data.products);
      })
      .catch((error) => console.error("Error:", error));
  };

  const produceInfor = (id) => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <MDBContainer>
        {/* FindbyCategory */}
        <MDBCol size="8">
          <h5>Find by Category:</h5>
          <select
            style={{ width: "50%", borderRadius: "5px", height: "40px" }}
            onChange={handleCategory}
            value={categoryvalue}
          >
            <option>Find by Category</option>
            {findcategory.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </MDBCol>
        <MDBRow>
          <MDBCol>
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
              {categoryProduces.map.length === 0 ? (
                <MDBTableBody className="align-center mb-0">
                  <tr>
                    <td colSpan={8} className="text-center mb-0">
                      {" "}
                      No data Found
                    </td>
                  </tr>
                </MDBTableBody>
              ) : (
                categoryProduces.map((item, index) => (
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
                ))
              )}
            </MDBTable>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Category;
