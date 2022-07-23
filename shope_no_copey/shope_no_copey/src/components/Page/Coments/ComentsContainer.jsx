
import { findNonSerializableValue } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { pageComents, setComent } from "../../../slices/comentsSlace";
import { ComentForm } from "./ComentForm";
import { Coments } from "./Coments";
import { Toolbar } from "./Toolbar";




export const ComentsContainer = (props) => {



    let ob = useSelector(pageComents)[props.id] || []

    const [countries, setCauntries] = useState(ob)
    const [currentrisPerPage] = useState(10)// макс. количество коментариев
    const [currentPage, setCurrentPage] = useState(1 )// текущяя ст.
    const [loading, setLoading] = useState(true)

    const lastCountrisIndex = currentPage * currentrisPerPage 
    const firstCountrisIndex = lastCountrisIndex - currentrisPerPage
    const currentCountry = countries.slice(firstCountrisIndex, lastCountrisIndex)

    const pageNumers =  Math.ceil((countries.length )/ currentrisPerPage) // количество страниц
    const paggrNumFc = num => setCurrentPage(num)

    useEffect(() => {
    setCurrentPage(Math.ceil((ob.length )/ currentrisPerPage))
    }, [ob.length])
    
    useEffect(() => {
        setCauntries(ob)
    }, [ob.length])




    const next = () => setCurrentPage(num => num + 1)
    const prev = () => setCurrentPage(num => num - 1)



    return (
        <Container
            className=" mb-5 shadow mx-lg-0 mx-auto "
            style={{ background: '#aaa' }}
        >
            <p>Coment`s Container</p>
            <h2>РыбаТекст Текст-рыба</h2>
            <p style={{ color: '#fff', fontSize: '1em' }}>РыбаТекст Текст-рыба на русском языке Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.</p>

            <ComentForm id={Number(props.id)} />

            <Coments 
            loading={loading} 
            countries={currentCountry}  
            currentPage={currentPage}/>
            <Toolbar 
                next={next} 
                prev={prev} 
                countries={countries.length}
                currentPage={currentPage}
                pageNumers={pageNumers}
                />   
        </Container>

    )
}
