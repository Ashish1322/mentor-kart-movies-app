

import {useState} from "react"
import Cell from "./components/Cell";

function  App()
{

  const [values,setvalues] = useState(
    ["-","-","-","-","-","-","-","-","-"])
  const [player,setPlayer] = useState("X")

  const handlePress = (index) => {

      if(values[index] != "-")
      {
        alert("Don't Cheat")
        return;
      }

      // updating the board with plyaer's turn
      let copy = [...values]
      copy[index] = player
      setvalues(copy)

      // pass the udpated board and player who's turn is it to check after player's turn he is winning or not
      checkWins(copy,player)

      // turn shift
      if(player == "X")
      {
        setPlayer("O")
      }
      else
      {
        setPlayer("X")
      }
  }

  // function to reset the board when anyone wins
  const resetBoard  = () => {
    setvalues(["-","-","-","-","-","-","-","-","-"])
  }
  
  const checkWins = (board,player) => {
    // the element of the array board are visible by following indexes.
    // [
    //   0 1 2
    //   3 4 5
    //   6 7 8
    // ]
    
    // check for all the rows
    console.log(player)
    console.log(board,player)
    if( 
      (board[0]==player && board[1] == player && board[2] == player) ||
      (board[3]==player && board[4] == player && board[5] == player) ||
      (board[6]==player && board[7] == player && board[8] == player)

      ) 
    {
      alert(player + " Wins the Game")
      resetBoard();
      return;
    }


    // check for all the columsn
     if( 
      (board[0]==player && board[3] == player && board[6] == player) ||
      (board[1]==player && board[4] == player && board[7] == player) ||
      (board[2]==player && board[5] == player && board[8] == player)

      ) 
    {
      alert(player + " Wins the Game")
      resetBoard();
      return;
    }


    // check for diagonal
    if( 
      (board[0]==player && board[4] == player && board[8] == player) ||
      (board[2]==player && board[4] == player && board[6] == player) 
      ) 
    {
      alert(player + " Wins the Game")
      resetBoard();
      return;
    }
  }

  return (

    <div style={{marginTop:"300px",marginLeft:"200px"}}>
      <h4>Turn: {player}</h4>
      <div>
        <Cell text={values[0]} index={0} handlePress={handlePress} />
        <Cell text={values[1]} index={1}
        handlePress={handlePress} />
        <Cell text={values[2]} index={2}
        handlePress={handlePress}/>
      </div>

      <div>
        <Cell text={values[3]} index={3}
        handlePress={handlePress} />
        <Cell text={values[4]} index={4}
        handlePress={handlePress}/>
        <Cell text={values[5]} index={5}
        handlePress={handlePress} />
      </div>

      <div>
        <Cell text={values[6]} index={6} 
        handlePress={handlePress}/>
        <Cell text={values[7]} index={7}
        handlePress={handlePress} />
        <Cell text={values[8]} index={8}
        handlePress={handlePress} />
      </div>

    </div>
  )
}

export default App;