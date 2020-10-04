import styled from 'styled-components'
import { device } from '../../constants';

export const Container = styled.div`
    margin: 0 auto;
    padding-bottom: 15px;
`

export const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
    @media ${device.mobileM} {  
        font-size: 40px;
    }
    @media ${device.laptop} {  
        font-size: 60px;
    }
`

export const Description = styled.div`
    text-align: left;
    padding: 0 10px;
    max-width: 1000px;
    margin: 0 auto;
    & > p {
        line-height: 1.4;
        padding-top: 10px;
    }
`
