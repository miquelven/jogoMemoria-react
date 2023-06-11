import styled from 'styled-components'

export const Container = styled.div`
    margin:auto;
    width:200px;
    height:50px;
    display:flex;
    background-color:#1550ff;
    border-radius:10px;
    cursor:pointer;
    opacity:1;
    transition: opacity ease 300ms;

    &:hover{
        opacity: .8
    }
`

export const IconArea = styled.div`
    height:inherit;
    padding:0 15px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-right: 1px solid rgba(255,255,255,0.2)
`;

export const Icon = styled.img`
    width: 20px
`;

export const Label = styled.div`
    color: #fff;
    height:inherit;
    display:flex;
    justify-content:center;
    align-items:center;
    flex:1;
    padding: 0 20px      
`;