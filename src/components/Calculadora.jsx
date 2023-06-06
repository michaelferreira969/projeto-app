import { useState } from "react"
import cifrao from "../images/cifrao.png"
import pessoa from "../images/pessoa.png"
import { 
    ContaContainer, 
    InputContainer,
    Label, 
    MainContainer,
    ButtonsContainer, 
    PorcentagemContainer,
    PessoasContainer
} from "./Calculadora.styles"
import { Resultados } from "./Resultados"

export function Calculadora(){
    const[conta, setConta] = useState(0)
    const[pessoas, setPessoas] = useState(0)
    const[porcentagem, setPorcentagem] = useState(0)
    let gorjeta = 0
    let total = 0

    function handleMudarValorConta(event){
        setConta(event.target.value == "" ? 0 : event.target.valueAsNumber)
        
    }

    function handleMudarQuantidadePessoas(event){
        setPessoas(event.target.value == "" ? 0 : event.target.valueAsNumber)
    }

    if(conta != 0 && pessoas != 0 && porcentagem != 0){
        gorjeta = conta * porcentagem / 100 / pessoas        
        total = conta / pessoas + gorjeta
    } 

    function handleLimpar(){
        setConta(0)
        setPessoas(0)
        setPorcentagem(0)        
    }

    return(

        <MainContainer>
            
            <form action="">
                <ContaContainer>
                    
                    <Label htmlFor="bill">Conta</Label>
                    <InputContainer>
                        <img src={cifrao} alt="" />
                        <input type="number" 
                            id="bill" 
                            placeholder="0" 
                            onChange={handleMudarValorConta}
                            value={conta == 0 ? "":conta}
                        />
                    </InputContainer>
                </ContaContainer>

                <PorcentagemContainer>
                    <Label htmlFor="custom-tip">Selecione a Porcentagem %</Label>
                    <ButtonsContainer>
                        <input 
                            type="button" value="5%"  onClick={() => setPorcentagem(5)} className={porcentagem == 5 ? "selected" : ""}/>
                        <input 
                            type="button" value="10%" onClick={() => setPorcentagem(10)} className={porcentagem == 10 ? "selected" : ""}/>
                        <input 
                            type="button" value="15%" onClick={() => setPorcentagem(15)} className={porcentagem == 15 ? "selected" : ""}/>
                        <input 
                            type="button" value="50%" onClick={() => setPorcentagem(25)} className={porcentagem == 25 ? "selected" : ""}/>
                        <input 
                            type="button" value="25%" onClick={() => setPorcentagem(50)} className={porcentagem == 50 ? "selected" : ""}/>
                        <input 
                            type="number" id="custom-tip" placeholder="Outro" onChange={(event) => setPorcentagem(event.target.valueAsNumber)} 
                            value={porcentagem == 0 ? "" : porcentagem}
                            />
                    </ButtonsContainer>
                </PorcentagemContainer>

                <PessoasContainer>
                    <Label htmlFor="people">Número de Pessoas</Label>
                        <InputContainer>
                            <img src={pessoa} alt="" />
                            <input type="number" 
                                id="people" 
                                placeholder="0"  
                                onChange={handleMudarQuantidadePessoas}
                                value={pessoas == 0 ? "": pessoas}
                            />
                        </InputContainer>
                </PessoasContainer>
            </form>

            <Resultados  
                total={total}
                gorjeta={gorjeta}
                limpar = {handleLimpar}
            />
        </MainContainer>
    )
}