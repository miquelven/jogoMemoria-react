import * as C from './styles'

interface Props{
    icon: any
    value: string
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export const Button = ({ icon, value, onClick }: Props) =>{
    return (
        <C.Container onClick={onClick}>
            <C.IconArea>
                <C.Icon src={icon} />
            </C.IconArea>
            <C.Label>
                {value}
            </C.Label>
        </C.Container>
    )
}