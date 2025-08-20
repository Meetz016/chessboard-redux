import {useDispatch,useSelector} from 'react-redux'
import { changeColor } from '../features/color/colorChangeSlice';
import './chessboard.css';

function Board() {
    const dispatch=useDispatch()
    const tileColors = useSelector(state => state);
    // console.log(tileColors)

    const handleClick=(key,currentColor)=>{
      console.log("Tile clicked")
        dispatch(changeColor({
            key,
            color:currentColor
        }))
    }

    const generateBoard = () => {
    const board = [];
    for (let j = 7; j >= 0; j--) {
      for (let i = 0; i < 8; i++) {
        const num = i + j;
        const key = `${i}-${j}`;
        const defaultColor = num % 2 === 0 ? 'black-tile' : 'white-tile';
        const tileClass = tileColors[key] || defaultColor;
        board.push(
          <span
            className={`${tileClass}`}
            key={key}
            onClick={()=>{handleClick(key,defaultColor)}}
          >
          </span>
        );
      }
    }
    return board;
  };

  return <div className="chessboard">{generateBoard()}</div>;
}

export default Board;
