import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';


//
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      buildingData: this.props.data
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    this.setState({
      selectedBuilding: id - 1 //because it is zero indexed
    })
  }

removeListing (id){
  this.setState({
    buildingData: this.state.buildingData
      .filter(building =>{
          return (
            building.id !== id
          )
      })
  })
}


addUpdate (code, name, latitude, longitude, address) {
  const newID = this.state.buildingData.length + 1;
  const newBuilding = {
    id: newID,
    code: code,
    name: name,
    coordinates: {latitude: parseFloat(latitude), longitude: parseFloat(longitude)},
    address: address
  };
  this.setState({
    buildingData: this.state.buildingData.concat(newBuilding)
  })
  }




  render() {
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data = {this.state.buildingData}
                    filterText = {this.state.filterText}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
            <RemoveBuilding
            selectedBuilding = {this.state.selectedBuilding}
            removeListing = {this.removeListing.bind(this)}
            />
              <ViewBuilding
              selectedBuilding = {this.state.selectedBuilding}
              data = {this.state.buildingData}
               />
               <AddBuilding
               addUpdate = {this.addUpdate.bind(this)}
               />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
