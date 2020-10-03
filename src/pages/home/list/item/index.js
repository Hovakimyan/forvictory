import React from 'react'
import { useTranslation } from "react-i18next";

import * as Styled from './styled'

const Item = ({ item }) => {
    const { t } = useTranslation();
    const name= t(item.name)
    return (
        <Styled.Container>
            <Styled.Title>{name}</Styled.Title>
            <Styled.Image title={name} url={item.img} />
            <Styled.Count>{item.count}+</Styled.Count>
        </Styled.Container>
    )
}

export default Item
