import {
    ResultadosContainer,
    GorjetaContainer,
    TotalContainer,
    GorjetaTotalContainer
} from "./Resultados.styles"

export function Resultados({total, gorjeta, limpar}){
    return(
        <ResultadosContainer>
            <GorjetaTotalContainer>
                <GorjetaContainer>
                    <p>
                        Gorjeta <br/>
                        <span>/ pessoa</span>
                    </p>
                    <p>R$ {gorjeta.toFixed(2)}</p>
                </GorjetaContainer>

                <TotalContainer>
                    <p>
                        Total <br/>
                        <span>/ pessoa</span>
                    </p>
                    <p>R$ {total.toFixed(2)}</p>
                </TotalContainer>
            </GorjetaTotalContainer>
            <button onClick={limpar}>Limpar</button>

        </ResultadosContainer>
    )
}