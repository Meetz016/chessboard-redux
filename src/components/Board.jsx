
import { useState } from 'react';
import './chessboard.css';
import { useEffect } from 'react';
function Board(){
    const [chessBoard,setChessBoard]=useState([]);

    useEffect(()=>{
        setChessBoard(generateBoard())
    },[])


    function clickhandle(e){
        console.log(e.target.style);
    }

    function generateBoard(){
    const row=['a','b','c','d','e','f','g','h']
    const cols=['1','2','3','4','5','6','7','8']

    let board=[]
    for(let j=7;j>=0;j--){
        for(let i=0;i<8;i++){
            const num=i+j;
            const val=`${i}-${j}`
            if(num%2==0){
                board.push(<span className='black-tile' key={val} onClick={clickhandle}>{val}</span>)
            }else{
                board.push(<span className='white-tile' key={val} onClick={clickhandle}>{val}</span>)
            }
        }
    }
    return board
    }
    return <div>
        <div className="chessboard">{chessBoard}</div>
    </div>
}

export default Board