import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Cad from './img/pet.png';



class CadPet extends Component {

  state = {
    Nome: '',
    Raça: '',
    Dono: '',

  }

  handlesetnome = (textnome) => {
    this.setState(() => {
      return {
        Nome: textnome

      }
    })
  }

  handlesetraca = (textraca) => {
    this.setState(() => {
      return {
        Raca: textraca
      }
    })
  }

  handlesetdono = (textdono) => {
    this.setState(() => {
      return {
        Dono: textdono
      }
    })
  }



  render() {
    //  console.log(this.state.Nome)
    return (
      <div style={{ height: '100vh', width: '100%', backgroundColor: '#00ccff' }} >
        <div style={{ height: '15%', textAlign: 'center' }} ><img src={Cad} style={{ height: '110px', marginTop: '8px' }} />Cadastro Pet</div>
        <Card style={{ backgroundColor: '#F2F2F2' }}>
          <CardContent>
            <form  >
              <TextField fullWidth onChange={e => this.handlesetnome(e.target.value)} style={{ margin: '5px' }} label="Nome" variant="outlined" />
              <TextField fullWidth onChange={e => this.handlesetraca(e.target.value)} style={{ margin: '5px' }} label="Raça" variant="outlined" />
              <TextField fullWidth onChange={e => this.handlesetdono(e.target.value)} style={{ margin: '5px', }} label="Dono" variant="outlined" />

              <div style={{ textAlign: 'center' }} >
                <Button style={{ marginTop: '20px' }} variant="outlined" color="primary">
                  Salvar
                </Button>
              </div>

            </form>
          </CardContent>
        </Card>
      </div>

    );
  }
}

export default CadPet;