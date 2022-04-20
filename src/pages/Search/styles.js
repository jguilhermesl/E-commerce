import styled from 'styled-components'
import theme from '../../styles/theme'

export const ContainerMain = styled.div`
    font-family: ${theme.fonts.secondary}
`

export const Breadcrumb = styled.div`
    display: flex;
    width: 80%;
    margin: 1.5rem auto;
    gap: 5px;
    font-size: 15px;
    a {
        color: ${theme.black};
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
    p {
        font-weight: ${theme.fonts.weight.bolder};
    }
    @media (max-width: 510px){
        width: 100%;
        margin: 1.5rem 10px;
        font-size: 12px;
    }
`

export const Results = styled.div`
    display: flex;
    list-style: none;
    width: 85vw;
    margin: 0 auto;
    flex-wrap: wrap;

    justify-content: center;
    align-items: center;
    gap: 4rem;
`