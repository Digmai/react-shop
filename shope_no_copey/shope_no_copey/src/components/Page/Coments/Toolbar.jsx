import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

export const Toolbar = ({ 
  next,
  prev,
  countries,
  currentPage,
  pageNumers}) => {

    const bullNext = currentPage < pageNumers ?  true : false 
    const bullPrev = currentPage > 1 ?  true : false 

console.log(bullNext)
  return (
    <Container className="d-flex justify-content-center mt-4 mb-5">
          <ButtonToolbar aria-label=" Toolbar with button groups">
      <ButtonGroup className="me-2 shadow " aria-label="First group">
        <Button 
        disabled={!bullPrev}
        onClick={() => prev( )}>{"<<"}</Button>
      </ButtonGroup>

      <ButtonGroup className="shadow " aria-label="Third group">
        <Button
        disabled={!bullNext}
        onClick={() =>  next()}>{">>"}</Button>
      </ButtonGroup>
    </ButtonToolbar>
    </Container>
  );
} 

    // const pageNumers = []

    // for (let index = 1; index <= Math.ceil(countries, currentrisPerPage); index++) {
    //   pageNumers.push(index);
      
    // }


      {/* <ButtonGroup className="me-2 shadow " aria-label="Second group">
        <Button disabled={!(numberComents.first.valid)}>{numberComents.first.number}</Button> 
        <Button disabled={!(numberComents.second.valid)}>{numberComents.second.number}</Button>
        <Button disabled={!(numberComents.third.valid)}>{numberComents.third.number}</Button>
      </ButtonGroup> */}


// const pageNumers = Math.ceil(totalCountris / currentrisPerPage)

  // const numberComents = {
  //   first: {
  //     number: pageNumers > 1 ? pageNumers - 1 : 1,
  //     valid: pageNumers > 1 ? true : false
  //   },
  //   second: {
  //     number: pageNumers > 1 ? pageNumers : 1 ,
  //     valid: false
  //   },
  //   third: {
  //     number: pageNumers + 1,
  //     valid: pageNumers ? true : false
  //   }
  // }