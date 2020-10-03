import React from 'react'

import * as Styled from './styled'

const Item = ({ item }) => {
    return (
        <Styled.Container>
            <Styled.Title>{item.name}</Styled.Title>
            <Styled.Image title={item.name} url={item.img} />
            <Styled.Count>{item.count}</Styled.Count>
        </Styled.Container>
    )
}

export default Item
