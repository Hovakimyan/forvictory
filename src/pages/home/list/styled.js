import styled from 'styled-components'

export const Container = styled.div`
    margin: 30px 0;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(360px, 0fr));
    grid-auto-rows: max-content;
    grid-auto-flow: row dense;
`
