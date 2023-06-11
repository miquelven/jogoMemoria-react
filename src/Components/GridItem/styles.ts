import styled from 'styled-components'

type ContainerProps = {
    showBackground: boolean
}

export const Container = styled.div<ContainerProps>`
    background-color: ${p => p.showBackground ? '#1550ff' : '#e2e3e3'};
    height:100px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:20px;
    cursor:pointer
`

interface ImgProps{
    opacity?: number
}

export const Item = styled.img<ImgProps>`
    width: 40px;
    opacity: ${props => props.opacity ?? 1}
`