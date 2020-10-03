import React, { useMemo } from 'react'
import { losses } from '../../../constants'
import Item from './item'

import * as Styled from './styled'

const List = () => {
    const lostList = useMemo(() => {
        return losses.map((item) => <Item item={item} />)
    }, [])
    return <Styled.Container>{lostList}</Styled.Container>
}

export default List
