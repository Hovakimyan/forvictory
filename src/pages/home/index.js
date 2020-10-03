import React from 'react'

import * as Styled from './styled'
import List from './list'
import { useTranslation } from 'react-i18next'

const Home = () => {
    const { t } = useTranslation();
    return (
        <Styled.Container>
            <Styled.Title>{t("TITLE")}</Styled.Title>
            <List />
            <Styled.Description>
                <p>#ARTSAKHSTRONG</p>
                <p>#NKPEACE</p>
            </Styled.Description>
        </Styled.Container>
    )
}

export default Home
