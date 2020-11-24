import React, { ReactElement, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import Footer from '../../components/elements/Footer/Footer'
import Header from '../../components/elements/Header/Header'

import { Container, Typography } from '@material-ui/core'
import * as markdown from '../exercise1/Readme.md'

import CodeBlock from '../exercise1/CodeBlock'


export default function Exercise1(): ReactElement {

    const [mdText, setMdText] = useState<any>("")

    useEffect(() => {
        fetch(markdown).then((res) => res.text()).then((text) => {
            setMdText(text)
        })
    }, [])
    return (
        <>
            <Header />
            <Container maxWidth="md">
                <Typography> Revisamos el pseudocódigo de la operación getTotal de la clase RegisteredUser y
                nos preocupa que el su diseño sea un poco frágil ya que no vemos claro si
contempla los posibles escenarios futuros y su impacto: </Typography>
                <Typography> 1 . Que problemas detectas en la operación y razona la respuesta </Typography>
                <Typography> 2. Propón una solución alternativa (también en pseudocódigo del mismo
                estilo) que corrija los problemas de la
                operación getTotal de RegisteredUser que has detectado en la
                pregunta anterior. Realiza todos los cambios que consideres necesarios
en cualquiera de las clases del modelo del enunciado</Typography>
                <ReactMarkdown children={mdText} renderers={{ code: CodeBlock }} />
            </Container>

            <Footer title="Axpel Test " subtitle="Exercise 1" />
        </>
    )
}