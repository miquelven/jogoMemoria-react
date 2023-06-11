import { GridItemType } from '../../Types/GridItemType'
import { Items } from '../../data/Items';
import b7web from '../../../public/svgs/b7.svg'
import * as C from './styles'

interface Props {
    item: GridItemType
    onClick: () => void
}

export const GridItem = ({ item, onClick }: Props) =>{
    return (
        <C.Container 
            showBackground={item.shown || item.shownPersist}
            onClick={onClick} 
        >
            {(!item.shown && !item.shownPersist) &&
                <C.Item src={b7web} alt="Imagem dos icones" width={100}
                opacity={.1}/>
            }

            {(item.shown || item.shownPersist) && item.item !== null &&
                <C.Item src={Items[item.item].icon} alt="Imagem dos icones" />
            }
        </C.Container>
    )
}