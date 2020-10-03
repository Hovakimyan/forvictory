import styled from 'styled-components'
import { device } from '../../constants';

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 10px 0;
`

export const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    font-size: 40px;
    @media ${device.laptop} {  
        font-size: 60px;
    }
`

export const Description = styled.p`
    text-align: center;
`
