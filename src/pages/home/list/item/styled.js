import styled from 'styled-components'

export const Container = styled.div`
    box-sizing: border-box;
    padding: 20px;
    width: 200px;
    background: #526547;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h3`
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
`

export const Count = styled.p`
    text-align: center;
    font-size: 60px;
    font-weight: 800;
`

export const Image = styled.div`
    width: 140px;
    height: 140px;
    background: url(${({ url }) => url}) no-repeat center;
    background-size: contain;
    margin: 15px;
    filter: invert(1);
`
