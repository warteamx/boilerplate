import React, { ReactElement } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import Footer from '../../components/elements/Footer/Footer'
import Header from '../../components/elements/Header/Header'
import { solution } from '../exercise1/solution.js'

import { Container, Typography } from '@material-ui/core'


export default function Exercise1(): ReactElement {
    return (
        <>
            <Header />
            <Container>
                <Typography> Revisamos el pseudocódigo de la operación getTotal de la clase RegisteredUser y
                nos preocupa que el su diseño sea un poco frágil ya que no vemos claro si
contempla los posibles escenarios futuros y su impacto: </Typography>
                <Typography> 1 . Que problemas detectas en la operación y razona la respuesta </Typography>
                <Typography> 2. Propón una solución alternativa (también en pseudocódigo del mismo
                estilo) que corrija los problemas de la
                operación getTotal de RegisteredUser que has detectado en la
                pregunta anterior. Realiza todos los cambios que consideres necesarios
en cualquiera de las clases del modelo del enunciado</Typography>
                <ReactMarkdown plugins={[gfm]}>
                    {solution.data}
                </ReactMarkdown>
            </Container>

            <Footer title="Axpel Test " subtitle="Exercise 1" />
        </>
    )
}