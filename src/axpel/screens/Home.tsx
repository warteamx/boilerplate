import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';

import Footer from '../../components/elements/Footer/Footer'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import Layout from '../../components/elements/Layout/Layout';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding: "10px",
        height: "100%"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
        padding: 5
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Home(): ReactElement {
    const classes = useStyles()
    return (
        <>
            <Layout >
                <Container maxWidth="lg"  >
                    <Grid container spacing={3} alignItems="stretch">
                        <Grid item xs={12}>
                        <Typography variant="h5"> Axpe </Typography>
                        </Grid>
                       
                        <Grid item xs={12} md={6}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography variant="h2" className={classes.title}> Ejercicio 1 </Typography>
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
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography variant="h2" className={classes.title}> Ejercicio 2  </Typography>
                                    <Typography> Los componentes tienen que estar desacoplados, aunque utilicen la misma api de Google. </Typography>
                                    <Typography> Por cada búsqueda que el usuario realice, se tiene que guardar un “Marker” con la información de éste en un estado gestionado por Redux.</Typography>
                                    <Typography>Los estilos en general, los dejamos a tu elección.</Typography>
                                    <Typography>Implementación de algún test. Puede ser e2e, unitario o funcional.</Typography>
                                    <Typography>Optimiza la app de la mejor manera que puedas para que sea:
                                <br />
                            1. Bundle de tamaño reducido.<br />
                            2. Poca carga de procesamiento del cliente (renders controlados).<br />
                        3. Reducir costes de llamadas a la API de Google.</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button component={Link} to="/axpel/exercise-2" size="small">Ver Solución </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
                <Footer title="Axpe Test" subtitle="Technical Test for frontend position with React" />
            </Layout>
        </>
    )
}
