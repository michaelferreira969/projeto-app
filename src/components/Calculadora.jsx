import { useState } from "react"
import cifrao from "../../img/cifrao.png"
import pessoa from "../../img/pessoa.png"
import {
    ContaContainer,
    InputContainer,
    Label, 
    MainContainer, 
    PessoasContainer, 
    PorcentagemContainer,
    ButtonsContainer
} from "./Calculadora.styles"

import { Resultados } from "./Resultados"


export function Calculadora() {

    const[conta, setConta] = useState(0)
    const[pessoas, setPessoas] = useState(0)
    const[porcentagem, setPorcentagem] = useState(0)

    function handleMudarValorConta(event) {
        setConta(Number(event.target.value))
    }

    function handleMudarValorPessoas(event) {
        setPessoas(Number(event.target.value))
    }

    function handleMudarPorcentagem(event, numero) {
        setPorcentagem(Number(event.target.value))
    }

    return (
        <MainContainer>
            <form action="">
                <ContaContainer className="bill-box">
                    <Label htmlFor="bill">Conta</Label>
                    <InputContainer className="input-box">
                        <img src={cifrao} alt="Cifrão"/>
                        <input type="number" id="bill" placeholder="0" onChange={handleMudarValorConta}/>
                    </InputContainer>
                </ContaContainer>

                <PorcentagemContainer>
                    <Label htmlFor="custom-tip">Selecione a porcentagem %</Label>
                    <ButtonsContainer>
                        <input type="button" value="5%"/>
                        <input type="button" value="10%"/>
                        <input type="button" value="15%"/>
                        <input type="button" value="25%"/>
                        <input type="button" value="50%"/>
                        <input type="text" id="custom-tip" placeholder="Outra"/>
                    </ButtonsContainer>
                </PorcentagemContainer>

                <PessoasContainer>
                    <Label htmlFor="people">Número de pessoas</Label>
                    <InputContainer className="input-box">
                        <img src={pessoa} alt="Pessoa"/>
                        <input type="number" id="people" placeholder="0" onChange={handleMudarValorPessoas}/>
                    </InputContainer>
                </PessoasContainer>
            </form>
            <Resultados/>
        </MainContainer>
    )
}