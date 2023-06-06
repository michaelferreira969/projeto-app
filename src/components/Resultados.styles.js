import styled from "styled-components";

export const ResultadosContainer = styled.div`
    background-color: #00474b;
    border-radius:15px;
    padding: 2rem 1.5rem;

    button {
        width:100%;
        color: #00474b;
        background: #26c2ae;
        border:0;
        font-size:1.25rem;
        padding-block: 0.5rem;
        text-transform:uppercase;
        border-radius:5px;
    }

    @media (min-width: 950px){
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }
`
export const GorjetaContainer = styled.div`
    display:flex;
    margin-bottom: 1.25rem;
    justify-content:space-between;
    align-items:center;

    p:first-child{
        color:white;
        line-height:1.5rem;

        span {
            color: #7f9d9f;
            font-size: 0.75rem;
        }
    }

    p:last-child{
        color: #26c2ae;
        font-size:2rem;
        line-height:3rem;
    }
`

export const TotalContainer = styled(GorjetaContainer)`
    margin-bottom:2rem;
`

export const GorjetaTotalContainer = styled.div``