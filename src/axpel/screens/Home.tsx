import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';

import Footer from '../../components/elements/Footer/Footer'
import Header from '../../components/elements/Header/Header'

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Home(): ReactElement {
    const classes = useStyles()
    return (
        <>
            <Header />
            <Container>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography component="h4" className={classes.title}> Ejercio 1 </Typography>
                        <Typography> Disponemos ya de un análisis previo que podemos utilizar como punto de partida, pero que habrá que corregir y mejorar. Se trata de un software para gestionar el streaming de películas en línea. </Typography>
                        <Typography> Como podemos ver en el diagrama de partida, los usuarios tienen una operación que devuelve el importe total pagado por todos los servicios que han solicitado. El precio de un servicio se calcula de la siguiente manera:</Typography>
                        <Typography>• Para todos los usuarios que quieren ver un contenido multimedia por streaming, se aplica el precio de streaming de este contenido multimedia.</Typography>
                        <Typography>• Para todos los usuarios que quieren descargar un contenido multimedia de la plataforma, aplica el precio de descarga de este contenido multimedia.</Typography>
                        <Typography>• Si el contenido es premium, en cualquiera de los casos anteriores se añade el cargo adicional especificado en el atributo additionalFee.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button component={Link} to="/axpel/exercise-1" size="small">Ver Solución </Button>
                    </CardActions>
                </Card>
            </Container>
            <Footer title="Axpel Test" subtitle="Technical Test for frontend position with REact" />
        </>
    )
}
