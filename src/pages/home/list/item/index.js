import React from 'react'

import * as Styled from './styled'
import Img from '../../../../assets/tank-icon.png'

const Item = ({ item }) => {
    return (
        <Styled.Container>
            <Styled.Title>{item.name}</Styled.Title>
            <Styled.Image title={item.name} url={Img} />
            <Styled.Count>{item.count}</Styled.Count>
        </Styled.Container>
    )
}

export default Item
