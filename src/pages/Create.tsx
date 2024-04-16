import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Button, Input } from "antd";

function Add() {
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
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);

  useEffect(() => {
    loadProducesData(0, 5, 0);
  }, []);

  const loadProducesData = async (start: number, end: number, jump: number) => {
    return await axios
      .get(`https://dummyjson.com/products?_start=${start}&end=${end}`)
      .then((response) => {
        setProduces(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    const id = produces.length + 1;
    axios
      .post(
        "https://dummyjson.com/products/add",
        {
          id: id,
          title: title,
          brand: brand,
          category: category,
          price: price,
          rating: rating,
          stock: stock,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log("success", res.data);
        navigate("/products");
        // location.reload();
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <MDBRow>
      <MDBCol size="8">
        <form>
          <Input
            type="text"
            placeholder="Enter Title"
            value={produces.title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Enter Brand"
            onChange={(e) => setBrand(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Enter Category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <Input
            type=""
            placeholder="Enter Price"
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
          <Input
            type="text"
            placeholder="Enter Rating  "
            onChange={(e) => setRating(parseFloat(e.target.value))}
          />
          <Input
            type="text"
            placeholder="Enter Stock"
            onChange={(e) => setStock(parseFloat(e.target.value))}
          />
          <Button type="primary" onClick={handleAdd}>
            ADD
          </Button>
          <Button type="default">
            <Link to="/products">Back</Link>
          </Button>
        </form>
      </MDBCol>
    </MDBRow>
  );
}

export default Add;
