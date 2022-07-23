import { useEffect, useLayoutEffect, useState } from 'react';

import { Card, Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import comentsSlace, { pageComents } from "../../../slices/comentsSlace"
import { Toolbar } from './Toolbar';

export const Coments = ({ loading, countries , currentPage}) => {

//  const currentCountry = countries.slice(lastCountrisIndex, firstCountrisIndex)

console.log(countries)

  return (
    <Container className={`mt-4  mb-5 `}>
<p>{currentPage}</p>
      {
      countries.map((country, i) => (
        <Card style={{ border: "none" }}
          className={`mt-2   shadow mx-lg-0 mx-auto   `}  key={i}>
          <Card.Body className="d-flex justify-content-between" >
            <Card.Subtitle className="mb-2 text-muted">{country.name}</Card.Subtitle>
            <Card.Text>
              {country.text}
            </Card.Text>
          </Card.Body>
        </Card>))
      }

  
    </Container>
  )
}

