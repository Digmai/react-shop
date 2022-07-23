import axios from "axios";
import { useState } from "react";

import { useLayoutEffect } from "react";
import { Container, Card, Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allProduct, feakeFetch } from "../../../slices/productSlice";
import { CardButtonBasket } from "./CardButtonBasket";
import { CardButton } from "./CardButtonLike";

// альтернативное svg "Нрвиться"
const altSVG = '<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M18.333 19.25Zm0 15.708-4.5-4.083q-3.625-3.292-5.958-5.667t-3.729-4.25q-1.396-1.875-1.938-3.5-.541-1.625-.541-3.458 0-3.833 2.562-6.417Q6.792 5 10.542 5q2.333 0 4.333 1.042 2 1.041 3.458 3 1.625-2 3.584-3.021Q23.875 5 26.125 5q3.583 0 6.229 2.542Q35 10.083 35 14q0 1-.188 1.938-.187.937-.437 1.562h-2.958q.291-.708.541-1.708.25-1 .25-1.834 0-2.791-1.916-4.479-1.917-1.687-4.167-1.687-2.125 0-3.875 1.229t-2.917 3.437h-2q-1.166-2.166-2.937-3.416t-3.854-1.25q-2.584 0-4.334 1.771-1.75 1.77-1.75 4.437 0 1.458.542 2.875t2.042 3.313q1.5 1.895 4.229 4.541 2.729 2.646 7.062 6.563 1.25-1.125 2.521-2.25T23.208 27l.313.292q.312.291.667.646l.666.666.313.313q-1.042.958-2.334 2.062-1.291 1.104-2.541 2.229ZM25 23.042v-2.75h13.333v2.75Z"/></svg>'


export const PositionProduct = () => {



  const postStatus = useSelector(state => state.product.status)

  const dispatch = useDispatch()

  useLayoutEffect(() => {
    if (postStatus === 'idle') {
      dispatch(feakeFetch())
    }
  }, [postStatus, dispatch])

  let img = 'https://picsum.photos/300/300'


  const product = useSelector(allProduct)
  const Product = Object.values(product.product.entities) // преобразум обект в масив

  // const  message  = useSelector((state) => state.message);
  //  if(product.entities[1]){  console.log( Object.values(product.entities)[1].albumId)}


  if (Product.length % 2 !== 0) { // стабилизирум масив для коректного отбражения

    Product.push({ albumId: Product.length + 1 })


  }
  console.log(Product)


  const PrtductLength = () => {
    if (product.product.entities) {
      return (Product.map(item => (

        item.id ?

          <Card style={{ width: "18rem", border: "none" }}
            className={`  mb-5 shadow mx-lg-0 mx-auto   `}
            key={item.id}
          >
             <Card.Img
                className="img-fluid rounded"
                //  style={{ width: "100%", height: "100%" }}
                variant="top"
                // src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22358%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20358%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_180f892f714%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_180f892f714%22%3E%3Crect%20width%3D%22358%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22133.6875%22%20y%3D%2298.7%22%3E358x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"

                src={img}
              />

            <Link

              variant="link"
              to={`page/${item.id}`}

            >
             <div
              style={{ color: '#fff' , marginBottom : '80px' }}
              className="card-img-overlay  mt-auto p-0">
              <h5  style={{ marginTop : '80%' }} className="card-title">Card title</h5>
            </div>
            </Link>




            <Card.Body className="d-flex justify-content-between" >


<CardButton />
<CardButtonBasket />

            </Card.Body>
          </Card>
          :
          <div
            key={item.albumId}
            style={{ width: "18rem" }}
            className={`  mb-5  mx-lg-0 mx-auto `}
          ></div>

      )
      )
      )
    }
  }


  return (
    <Container className={`PositionProduct  d-flex justify-content-lg-between  flex-wrap`} >


      < PrtductLength />


    </Container>
  )
};



