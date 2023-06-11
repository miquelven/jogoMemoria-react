import styles from "styled-components"

export const Container = styles.div`
    width:100%;
    max-width: 750px;
    margin: auto;
    padding:50px 0;
    display:flex;

    @media (max-width: 750px){
        flex-direction:column;
    }
`;

export const Infos = styles.div`
    
    display:flex;
    flex-direction:column;

    @media (max-width: 750px){
        margin-bottom: 50px;
        text-align:center;
    }
`;

export const Logo = styles.a`
    display:block;
    padding:20px
`;

export const InfoArea = styles.div`
    width:100%;
    margin: 10px;

    @media (max-width:750px){
        display:flex;
        flex-direction:column;
        justify-content:space-around;
    }
    
`;

export const GridArea = styles.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
    
    @media (max-width: 750px){
        justify-content:center;
        margin: 0 20px
    }
`;

export const Grid = styles.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    gap:10px;
    width:430px;

    @media (max-width: 510px){
        justify-content:center;
        grid-template-columns: repeat(3, 100px);
        // background-color:#f00
    }
`