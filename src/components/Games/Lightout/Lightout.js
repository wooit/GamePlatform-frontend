import React, {Component} from "react";
import Cell from "./Cell/Cell";
import './Lightout.css';


class Lightout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasWon : false,
      grid : this.creategrid()
    }
  }

  creategrid() {
    let grid = [];
    for(let x=0; x<this.props.nbRows; x++){
      let row = [];
      for(let y=0; y<this.props.nbCols; y++){
        row.push(Math.random() < this.props.lightOn) // si Math random (entre 0 et 1) < 0.25 , la case est true et est allumée
      }
      grid.push(row);
    }
    return grid
  }

  flipCellsAround(coord) {
    //console.log('flipping', coord)
    let nbRows = this.props.nbRows;
    let nbCols = this.props.nbCols;
    let grid = this.state.grid;
    let [x, y] = coord.split("-").map(Number);

    function flipCell(x, y) {
      // flip the cell si elle est sur la grille
      if (x >= 0 && x < nbCols && y >= 0 && y < nbRows) {
        grid[x][y] = !grid[x][y];
      }
    }
    //QUand je clique une cell, je change la couleur de la cell et de celles d'à coté
    flipCell(x,y)
    flipCell(x, y+1)
    flipCell(x, y-1)
    flipCell(x+1, y)
    flipCell(x-1, y)
    
    //Chauqe cell dans chaque row doit etre 'false' pour Win
    let hasWon = grid.every( row => row.every(cell => !cell));
    this.setState({
      grid : grid, 
      hasWon : hasWon
    });
  }

  makeTable() {
    let tblgrid = [];
    for (let x = 0; x < this.props.nbRows; x++) {
      let row = [];
      for (let y = 0; y < this.props.nbCols; y++) {
        let coord = `${x}-${y}`;
        row.push(
          <Cell
            key={coord}
            isLit={this.state.grid[x][y]}
            flipCellsAroundMe={() => this.flipCellsAround(coord)}
          />
        );
      }
      tblgrid.push(<tr key={x}>{row}</tr>);
    }
    return (
      <table className='grid'>
        <tbody>{tblgrid}</tbody>
      </table>
    );
  }
  render() {
    return (
      <div>
        {this.state.hasWon ? (
          <div className='winner'>
            <span className='neon-blue'>Victoire!!</span>
          </div>
        ) : (
          <div>
            <div className='grid-title'><br></br>
              <div className='neon-blue'>Lights Out</div>
            <br></br>
            {this.makeTable()}
            </div>
          </div>
        )}
        
      </div>
      
    );
  }
}
export default Lightout;
