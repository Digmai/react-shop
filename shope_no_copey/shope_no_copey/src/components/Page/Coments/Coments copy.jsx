import { useEffect, useLayoutEffect, useState } from 'react';

import { Card, Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import comentsSlace, { pageComents } from "../../../slices/comentsSlace"
import { Toolbar } from './Toolbar';

export const Coments = (props) => {

  const id = props.id


  const [displayedArrey, setDisplayedArrey] = useState([])

  let coments = useSelector(pageComents)[id] || []



  const pages = coments.length > 10 ? Math.ceil((coments.length) * 0.1) : 1


  function displayedArreySlice (first)  {
    if (coments.length > 0) {
      console.log(first )

      for (let index = first; index <= coments.length - 1; index++) {

          setDisplayedArrey(...coments[index]);
        }
      
    }
  }


  function displayedPageNumber (numPage) {
    console.log(numPage )
    displayedArreySlice(numPage *10) 
  }

  useEffect(() => {
    displayedPageNumber(3)
  }, [  ])

  const numberComents = {
    first: {
      number: displayedPageNumber() > 1 ? displayedPageNumber() - 1 : 1,
      valid: displayedPageNumber() > 1 ? true : false
    },
    second: {
      number: displayedPageNumber(),
      valid: false
    },
    third: {
      number: displayedPageNumber() + 1,
      valid: pages > displayedPageNumber() ? true : false
    }
  }

console.log(displayedArrey)

  return (
    <Container className={`mt-4  mb-5 `}>

      {
      displayedArrey.map((e) => (
        <Card style={{ border: "none" }}
          className={`mt-2   shadow mx-lg-0 mx-auto   `} >
          <Card.Body className="d-flex justify-content-between" >
            <Card.Subtitle className="mb-2 text-muted">{"e.name"}</Card.Subtitle>
            <Card.Text>
              {"e.text"}
            </Card.Text>
          </Card.Body>
        </Card>))
      }

      <Toolbar index={numberComents} />
    </Container>
  )
}

