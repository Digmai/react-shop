import { useEffect, useLayoutEffect } from "react"
import { Container, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { allProduct, feakeFetch } from "../../../slices/productSlice"
import { PageSlider } from "./PageSlider"


export const PageContainer = ({ page }) => {




    const InitPo = () => {
        try {
            if (page.details.length > 1
                ) {
                    return (
                        <>
                            <tr>
                                <th colSpan={2}>Деталии</th>
                            </tr>
                            {page.details.map(e => (
             
                                <tr key={Math.floor(Math.random() * 10)}>
                                    <td colSpan={2}>{e}</td>
                                </tr>
                            )
                            )} 
                        </>)
                }
                else {
                    return (
                        <tr>
                            <th>Деталии</th>
                            <td>{'page.material'}</td>
                        </tr>)
                }
        } catch (error) {
            console.log(error)
        }
    }
    const Poport = () => {
        if (!!page) {
            return (
                <tbody>
                    <tr>
                        <th>Название</th>
                        <td>{page.name}</td>
                    </tr>
                    <tr>
                        <th>Материал</th>
                        <td>{page.material}</td>

                    </tr>

                    <tr>
                        <th>Размер</th>
                        <td>{page.math}</td>

                    </tr>
                    <tr>
                        <th>Стоимость</th>
                        <td>{`${page.price} р.`}</td>

                    </tr>
                    <InitPo/>
                </tbody> )
                }
        else {
            return (
                <tbody>
                    <tr>
                        <th></th>
                    </tr>
                </tbody>)
        }
        
    }


return (

    <Container className=" mb-5 shadow mx-lg-0 mx-auto ">
        <p style={{}}> Page Container </p>
        <PageSlider />
        <Table striped bordered hover size="sm">
        <Poport />
        </Table>
    </Container>


)} 