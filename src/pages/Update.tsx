import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Button, Input } from "antd";
function Update() {
  // const [produces, setProduces] = useState([]);
  const [values, setValues] = useState<any>({
    title: "",
    brand: "",
    category: "",
    price: 0,
    rating: 0,
    stock: 0,
  });
  const [uProducts, setUProducts] = useState({});
  const { id } = useParams();

  // const [title, setTitle] = useState("");
  // const [brand, setBrand] = useState("");
  // const [category, setCategory] = useState("");
  // const [price, setPrice] = useState<number>(0);
  // const [rating, setRating] = useState<number>(0);
  // const [stock, setStock] = useState<number>(0);
  useEffect(() => {
    loadProducesData();
  }, []);

  const loadProducesData = async () => {
    return await axios
      .get(`https://dummyjson.com/products/` + id)
      .then((response: any) => {
        // console.log("update sucess", response);
        setValues({
          title: response.data.title,
          brand: response.data.brand,
          category: response.data.category,
          price: response.data.price,
          rating: response.data.rating,
          stock: response.data.stock,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(uProducts);
    axios
      .patch("https://dummyjson.com/products/" + id, values, {
        headers: { "Content-Type": "application/json" },
      })
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
            value={values.title}
            // onChange={(e) => setTitle(e.target.value)}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
          />
          <Input
            type="text"
            placeholder="Enter Brand"
            value={values.brand}
            // onChange={(e) => setBrand(e.target.value)}
            onChange={(e) => setValues({ ...values, brand: e.target.value })}
          />
          <Input
            type="text"
            placeholder="Enter Category"
            value={values.category}
            // onChange={(e) => setCategory(e.target.value)}
            onChange={(e) => setValues({ ...values, category: e.target.value })}
          />
          <Input
            type=""
            placeholder="Enter Price"
            value={values.price}
            // onChange={(e) => setPrice(parseFloat(e.target.value))}
            onChange={(e) =>
              setValues({ ...values, price: parseFloat(e.target.value) || 0 })
            }
          />
          <Input
            type="text"
            placeholder="Enter Rating  "
            value={values.rating}
            // onChange={(e) => setRating(parseFloat(e.target.value))}
            onChange={(e) =>
              setValues({ ...values, rating: parseFloat(e.target.value) || 0 })
            }
          />
          <Input
            type="text"
            placeholder="Enter Stock"
            value={values.stock}
            // onChange={(e) => setStock(parseFloat(e.target.value))}
            onChange={(e) =>
              setValues({ ...values, stock: parseFloat(e.target.value) || 0 })
            }
          />
          <Button type="primary" onClick={handleUpdate}>
            Update
          </Button>
          <Button type="default">
            <Link to="/products">Back</Link>
          </Button>
        </form>
      </MDBCol>
    </MDBRow>
  );
}

export default Update;
