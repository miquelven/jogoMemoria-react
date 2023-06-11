import  { useEffect, useState } from 'react'
import * as C from './App.styles'
import { InfoItem } from './Components/InfoItem'
import { Button } from './Components/Button'
import logo from '../public/assets/devmemory_logo.png'
import restartIcon from "../public/svgs/restart.svg"
import { GridItemType } from './Types/GridItemType'
import { Items } from './data/Items'
import { GridItem } from './Components/GridItem/indes'
import { formatTimeElapse } from './Helpers/FormatTimeElapse'

function App() {

  const [playing, setPlaying] = useState<boolean>(true);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [timeElapse, setTimeElapse] = useState<number>(0);
  const [showCount, setShowCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>()

  useEffect(()=>{
      let countInterval = setInterval(()=>{
      if(playing) setTimeElapse(timeElapse + 1)}, 1000)
      return () => clearInterval(countInterval)
  }, [playing, timeElapse])

  useEffect(()=>{
    if(showCount == 2){
      let showItem = gridItems?.filter(item => item.shown);
      if(showItem?.length == 2){
        let copyGridItem = [...gridItems!]

        if(showItem[0].item == showItem[1].item){
          for(let i in copyGridItem){
            if(copyGridItem[i].shown){
              copyGridItem[i].shownPersist = true;
              copyGridItem[i].shown = false;
              setShowCount(0);
              setGridItems(copyGridItem);
            }
          }
        }else{
          setTimeout(()=>{
            for(let i in copyGridItem){
              copyGridItem[i].shown = false;
              setShowCount(0);
              setGridItems(copyGridItem);
            }
          }, 700)
        }
        setMoveCount(moveCount => moveCount + 1)
      }
  }
}, [gridItems, showCount])

  useEffect(()=> RestartandCreateGame(),[])

  useEffect(()=> {
    if(moveCount > 0 && gridItems?.every(item => item.shownPersist)) setPlaying(false);
  },[playing, moveCount])

  const RestartandCreateGame = () =>{
    setMoveCount(0);
    setTimeElapse(0);
    setShowCount(0);

    let newGridItem:GridItemType[] = [];

    for(let i=0; i < (Items.length * 2); i++) newGridItem.push({
      item: null,
      shown: false,
      shownPersist: false
    })

    for(let w=0; w < 2; w++){
      for(let i=0; i < Items.length; i++){

        let pos = -1;
        
        while(pos < 0 || newGridItem[pos].item !== null){
          pos = Math.floor(Math.random() * (Items.length * 2));
        }
        newGridItem[pos].item = i;
      }
    }

    setGridItems(newGridItem);

    setPlaying(true)
  }

  const HandleGridItem = (index: number)=>{
      if(playing && (showCount < 2) && (index !== null)){
        let tempGrid = [...gridItems!];

        if(!tempGrid[index].shown && !tempGrid[index].shownPersist){  
          tempGrid[index].shown = true;
          setShowCount(showCount + 1);
        }

        setGridItems(tempGrid);
      }
  }

  return (
    <C.Container>
      <C.Infos>
        <C.Logo>
          <img src={logo} alt="Logo do site" width={200}/>
        </C.Logo>

        <C.InfoArea>
          <InfoItem label="Timer" value={formatTimeElapse(timeElapse)} />
          <InfoItem label="Moves" value={moveCount.toString()} />
          
        </C.InfoArea>


        <Button icon={restartIcon} value={'Restart'} onClick={RestartandCreateGame}/>
      </C.Infos>
      <C.GridArea>
        <C.Grid>
          {gridItems?.map((item, index)=>(
            <GridItem onClick={()=>HandleGridItem(index)} item={item} key={index}/>
          ))}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  )
}

export default App
