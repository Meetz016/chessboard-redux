
import './chessboard.css';
function Board(){
    const row=['a','b','c','d','e','f','g','h']
    const cols=['1','2','3','4','5','6','7','8']

    let board=[]
    for(let j=7;j>=0;j--){
        for(let i=0;i<8;i++){
            const num=i+j;
            if(num%2==0){
                board.push(<span className='tile black-tile'>{0}</span>)
            }else{
                board.push(<span className='tile white-tile' >{1}</span>)
            }
        }
    }
    return <div>
        <div className="chessboard">{board}</div>
    </div>
}

export default Board