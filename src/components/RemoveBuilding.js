import React, {Component} from 'react';


class RemoveBuilding extends Component {
  render() {
    const { removeListing, selectedBuilding} = this.props;
    const id = selectedBuilding + 1;
      return (
          <div>
          Click on a building to select, and then click on delete to remove the listing!
            <button class = "deleteButton" onClick = { () => removeListing(id)}>
             <i>  Remove the building! </i>
             </button>
            </div>


      )

    }
  }

export default RemoveBuilding;
