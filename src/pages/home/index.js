import React from 'react'

import * as Styled from './styled'
import List from './list'

const Home = () => {
    return (
        <Styled.Container>
            <Styled.Title>Ադրբեջանի կորուստները</Styled.Title>
            <List />
            <Styled.Description>
                <p>#ARTSAKHSTRONG</p>
                <p>#NKPEACE</p>
            </Styled.Description>
        </Styled.Container>
    )
}

export default Home
