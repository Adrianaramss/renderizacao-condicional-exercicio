import {useState} from "react";
import {Form , FormContainer,StyledLabel,SendButton, Inpu} from "./styled"

function TelacadastroEndereco(props) {
const[endereco,setEndereco] = useState("")
const[residencia,setResidencia] = useState("")
const [telefone,setTelefone] = useState ("")
const [complemento, setComplemento]= useState("")


const onChangeEndereco = (event) => {
    setEndereco(event.target.value)
}
const onChangeResidencia = (event) => {
    setResidencia(event.target.value) 
}

const onChangeTelefone = (event) =>{
    setTelefone(event.target.value)
}

const onChangeComplemento = (event) => {
   setComplemento(event.target.value)
}

const send = () => {
    setEndereco("")
    setResidencia("")
    setComplemento("")
    props.TelaUsuariocastrado(4);
};


return (
    <FormContainer>
    <h1>Dados para Entrega:</h1>
    <form>
 <StyledLabel htmlFor ="Endereço">
    Endereço:
    <input id= "Endereço" value={endereco} onChange={onChangeEndereco} ></input>
 </StyledLabel>
 <br></br>

 <StyledLabel htmlFor ="Residência">
    Número da Residência
    <input id= "Residencia " value={residencia} onChange={onChangeResidencia} ></input>
 </StyledLabel>
 <br></br>

 <StyledLabel htmlFor ="Telefone">
    Número do Telefone
    <input id= "telefone " value={telefone} onChange={onChangeTelefone} ></input>
 </StyledLabel>
 <br></br>

 <StyledLabel htmlFor ="complemento">
    Nome do complemento
    <input id= "complemento" value={complemento} onChange={onChangeComplemento} ></input>
 </StyledLabel>
 <br></br>



<SendButton onClick={()=>props.mudarTela(4)}>cadastra informações</SendButton>
    </form>
    </FormContainer>
);
}
export default TelacadastroEndereco