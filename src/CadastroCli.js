import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Cad from './img/Cad.png';



class CadCli extends Component {

  state = {
    Nome: '',
    Sobrenome: '',
    Cidade: '',
    Endereço: '',
    Bairro: '',
    Numero: '',
    Telefone: '',
    Celular: '',

  }

  handlesetnome = (textnome) => {
    this.setState(() => {
      return {
        nome: textnome,

      }
    })
  }

  handlesetsobrenome = (textsobre) => {
    this.setState(() => {
      return {
        sobrenome: textsobre
      }
    })
  }

  handlesetcidade = (textcidade) => {
    this.setState(() => {
      return {
        Cidade: textcidade
      }
    })
  }

  handlesetendereco = (textendereco) => {
    this.setState(() => {
      return {
        Endereço: textendereco
      }
    })
  }

  handlesetbairro = (textbairro) => {
    this.setState(() => {
      return {
        Bairro: textbairro
      }
    })
  }

  handlesetnumero = (numero) => {
    this.setState(() => {
      return {
        Numero: numero
      }
    })
  }

  handlesettelefone = (telefone) => {
    this.setState(() => {
      return {
        Telefone: telefone
      }
    })
  }

  handlesetcelular = (celular) => {
    this.setState(() => {
      return {
        Celular: celular
      }
    })
  }



  render() {
    // console.log(this.state.Celular)
    return (
      <div style={{ height: '100vh', width: '100%', backgroundColor: '#00ccff' }} >
        <div style={{height:'15%', textAlign:'center'  }} ><img src={Cad} style={{height:'110px',marginTop:'8px'}} />Cadastro Cliente</div>
        <Card style={{ backgroundColor: '#F2F2F2' }}>
          <CardContent>
            <form  >
              <TextField fullWidth onChange={e => this.handlesetnome(e.target.value)} style={{ margin: '5px' }} label="Nome" variant="outlined" />
              <TextField fullWidth onChange={e => this.handlesetsobrenome(e.target.value)} style={{ margin: '5px' }} label="Sobrenome" variant="outlined" />
              <TextField fullWidth onChange={e => this.handlesetcidade(e.target.value)} style={{ margin: '5px', }} label="Cidade" variant="outlined" />
              <TextField fullWidth onChange={e => this.handlesetendereco(e.target.value)} style={{ margin: '5px', }} label="Endereço" variant="outlined" />
              <TextField fullWidth onChange={e => this.handlesetbairro(e.target.value)} style={{ margin: '5px', }} label="Bairro" variant="outlined" />
              <TextField fullWidth onChange={e => this.handlesetnumero(e.target.value)} style={{ margin: '5px' }} label="Numero" variant="outlined" />
               <TextField  placeholder="(00) 0000 - 0000 " onChange={e => this.handlesettelefone(e.target.value)} style={{ margin: '5px', }} label="Telefone" variant="outlined" />
              <TextField fullWidth  placeholder="(00) 00000 - 0000 " onChange={e => this.handlesetcelular(e.target.value)} style={{ margin: '5px', }} label="Celular" variant="outlined" />
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

export default CadCli;