import React from 'react'
import Grid from './Grid'

class GridContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes:20,
      color:'green',
      columns: 8
    }
    this.updateState =  this.updateState.bind(this)
  }
  
  updateState = (key, value) =>  {
    this.setState({
      [key]: value
    });
  }

  render() {
   let {boxes, color, columns} = {...this.state}
   const {children} =  this.props
   const isBoxes = boxes > 0
   const isColumns = columns > 1
    return (
      <React.Fragment>
        <button onClick={() => this.updateState('columns', ++columns)}>Increase Columns {columns}</button>
        <button onClick={() => this.updateState('columns', isColumns ? --columns : 1 )}>Decrease Columns {columns}</button>
        <button onClick={() => this.updateState('boxes', ++boxes)}>Increase BoxCount {boxes}</button>
        <button onClick={() => this.updateState('boxes', isBoxes ? --boxes : 0)}>Decrease BoxCount {boxes}</button>
        <br/><br/>
        <Grid 
          color={color}
          columns={columns}
        > 
         {isBoxes && [...Array(boxes)].map(() => children)}
        </Grid>
      </React.Fragment>
    )
  }
}

export default GridContainer