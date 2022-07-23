import { useEffect, useLayoutEffect, useMemo } from "react"
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { useParams, useSearchParams } from "react-router-dom";
import { pageComentsById, setComent } from "../../slices/comentsSlace";
import { allProduct, feakeFetch } from "../../slices/productSlice"
import { ComentsContainer } from "./Coments/ComentsContainer";
import { PageContainer } from "./PageConteaner/PageContainer";

export const Page = () => {
   

    const { id } = useParams();

    // const post = useSelector((state) => selectPostById(state, postId));


    const dispatch = useDispatch()

    const postStatus = useSelector(state => state.product.status)


    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(feakeFetch()) 
        }
    }, [postStatus, dispatch])



    const pages = useSelector(allProduct)
    const Product = Object.values(pages.product.entities) //преобразование в масив


    const page = Product.find(element => element.id == id )


    return (
     
        <Container  className=" Page d-flex justify-content-lg-between " >
               {/* { window.scrollTo(0, 0)} */}
            <PageContainer page={page} />
            <ComentsContainer id={id}/>
        </Container>
    )
}