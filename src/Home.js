import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Home extends Component {

    render() {
        return (
            <div style={{ height: '100vh', width: '100%', backgroundColor: '#00ccff' }} >
                <div style={{ textAlign: 'center', paddingTop: '15%', paddingRight: '30%', paddingLeft: '30%' }} >
                    <Card>
                        <CardContent>
                            <Typography>
                                Cadastro dos Clientes
                        </Typography>
                            <Typography>
                                Acesso para Cadastro dos Clientes
                        </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Acessar
                        </Button>
                        </CardActions>
                    </Card>
                </div>
                <div style={{ textAlign: 'center', paddingTop: '15%', paddingRight: '30%', paddingLeft: '30%' }}  >
                    <Card>
                        <CardContent>
                            <Typography>
                                Cadastro dos Pets
                        </Typography>
                            <Typography>
                                Acesso para Cadastro dos Pets
                        </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Acessar
                        </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Home;