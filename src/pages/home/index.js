import React from 'react'

import * as Styled from './styled'
import List from './list'

const Home = () => {
    return (
        <Styled.Container>
            <Styled.Title>Azerinerin korustner</Styled.Title>
            <List />
            <Styled.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mollis, felis sed imperdiet placerat, ligula ipsum pellentesque
                nulla, at maximus magna ipsum at eros. In ultrices massa felis,
                sit amet tristique ligula blandit nec. Donec quis risus id diam
                ultricies convallis eu ut eros. Maecenas blandit nulla et
                fermentum tempus. Sed at elit lectus. Mauris sollicitudin quis
                felis vel mattis. Aenean id ligula sit amet metus consequat
                semper. Mauris in lobortis augue. Suspendisse non urna justo.
                Suspendisse maximus euismod sollicitudin. Maecenas volutpat
                tincidunt mi in tristique.
            </Styled.Description>
        </Styled.Container>
    )
}

export default Home
