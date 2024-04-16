// import axios from "axios";
// import { useState, useEffect } from "react";
// import {
//   MDBTable,
//   MDBTableHead,
//   MDBTableBody,
//   MDBRow,
//   MDBCol,
//   MDBContainer,
//   MDBBtn,
// } from "mdb-react-ui-kit";
// import { Button, Input } from "antd";
// import { Link } from "react-router-dom";

// function Carts() {
//   interface Cart {
//     id: number;
//     products: string;
//     total: number;
//     totalProducts: number;
//     totalQuantity: number;
//     userId: string;
//   }
//   useEffect(() => {
//     loadCartsData();
//   }, []);
//   const [carts, setCarts] = useState<Cart[]>([]);
//     await axios
//       .get("https://dummyjson.com/carts")
//       .then((response) => {
//         setCarts(response.data.carts);
//         console.log(response.data.carts);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const handleDelete = async () => {};
//   return (
//     <MDBContainer>
//       <form
//         style={{
//           margin: "auto",
//           padding: "15px",
//           maxWidth: "400px",
//           alignContent: "center",
//         }}
//         className="d-flex input-group w-auto"
//       ></form>

//       {/* render */}
//       <MDBRow>
//         <MDBCol>
//           <MDBTable>
//             <MDBTableHead dark>
//               <tr>
//                 <th scope="col">No.</th>
//                 <th scope="col">Title</th>
//                 <th scope="col">Brand</th>
//                 <th scope="col">Categories</th>
//                 <th scope="col">Price</th>
//                 {/* <th scope="col">Action</th> */}
//               </tr>
//             </MDBTableHead>
//             {carts.map.length === 0 ? (
//               <MDBTableBody className="align-center mb-0">
//                 <tr>
//                   <td colSpan={8} className="text-center mb-0">
//                     {" "}
//                     No data Found
//                   </td>
//                 </tr>
//               </MDBTableBody>
//             ) : (
//               <>
//                 {carts.map((item, index) => (
//                   <MDBTableBody key={index}>
//                     <tr>
//                       <th scope="row">{index + 1}</th>
//                       <td>{item.products}</td>
//                       <td>{item.total}</td>
//                       <td>{item.totalProducts}</td>
//                       <td>{item.totalQuantity}</td>

//                       {/* <td>
//                         <Button
//                           type="primary"
//                           onClick={() => handleDelete(item.id)}
//                         >
//                           delete
//                         </Button>
//                         <Button type="primary">
//                           <Link to={`/read/${item.id}`}> Read</Link>
//                         </Button>
//                       </td> */}
//                     </tr>
//                   </MDBTableBody>
//                 ))}
//               </>
//             )}
//           </MDBTable>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }

// export default Carts;
