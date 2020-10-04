import styled from 'styled-components'
import { device } from '../../../../constants';

export const Container = styled.div`
    box-sizing: border-box;
    padding: 20px;
    width: 140px;
    background: #526547;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 8px;
    @media ${device.mobileL} {  
        width: 200px;
    }
`

export const Title = styled.h3`
    text-align: center;
    text-transform: uppercase;
    font-size: 15px;
    @media ${device.mobileL} {  
        font-size: 20px;
    }
`

export const Count = styled.p`
    text-align: center;
    font-weight: 800;
    font-size: 30px;
    @media ${device.mobileL} {  
        font-size: 60px;
    }
`

export const Image = styled.div`
    width: 80px;
    height: 80px;
    background: url(${({ url }) => url}) no-repeat center;
    background-size: contain;
    margin: 15px;
    filter: invert(1);
    @media ${device.mobileL} {  
        width: 140px;
        height: 140px;
    }
`
