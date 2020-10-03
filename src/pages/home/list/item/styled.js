import styled from 'styled-components'

export const Container = styled.div`
    box-sizing: border-box;
    padding: 20px;
    border-radius: 10px;
    box-shadow: #8f8f8f 0 0 12px 0;
    width: 100%;
    background: rgba(255, 0, 0, 0.1);
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h3`
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
`

export const Count = styled.p`
    text-align: center;
    font-size: 50px;
    font-weight: 800;
`

export const Image = styled.div`
    width: 200px;
    height: 200px;
    background: url(${({ url }) => url}) no-repeat center;
    background-size: contain;
    margin: 15px;
`
