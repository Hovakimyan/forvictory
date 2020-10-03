import React, { useMemo } from 'react'
import { losses } from 'constants'

import * as Styled from './styled'

const Item = ({ item }) => {
    console.log(item)
    return (
        <Styled.Container>
            <Styled.Title>{item.name}</Styled.Title>
        </Styled.Container>
    )
}

export default Item
