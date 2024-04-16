import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Button, Input } from "antd";
function Read() {
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

  const { id } = useParams();

  useEffect(() => {
    loadProducesData();
  }, []);

  const loadProducesData = async () => {
    return await axios
      .get(`https://dummyjson.com/products/` + id)
      .then((response) => {
        setProduces(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <MDBRow>
      <MDBRow className="mr-10">
        <Button type="primary">
          <Link to={`/update/${id}`}> Update</Link>
        </Button>
        <Button type="default">
          <Link to="/products"> Back</Link>
        </Button>
      </MDBRow>
      <MDBCol size="8">
        <h1>Infor</h1>
        <div>
          <strong>Title:{produces.title}</strong>
        </div>

        <div>
          <strong>Description:{produces.description}</strong>
        </div>
        <div>
          <strong>Price:{produces.price}</strong>
        </div>
        <div>
          <strong>DiscountPercentage:{produces.discountPercentage}</strong>
        </div>
        <div>
          <strong>Rating:{produces.rating}</strong>
        </div>
        <div>
          {" "}
          <strong>Stock:{produces.stock}</strong>
        </div>
        <div>
          <strong>Brand:{produces.brand}</strong>
        </div>

        <div>
          <strong>Category:{produces.category}</strong>
        </div>
        <div>
          <div>
            <strong>Thumbnail:</strong>
          </div>
          <img src={produces.thumbnail} alt="" />
        </div>
        <div>
          <div>
            <div>
              <strong>Images:</strong>
            </div>
            {/* {produces.images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))} */}
          </div>
        </div>
      </MDBCol>
    </MDBRow>
  );
}

export default Read;
