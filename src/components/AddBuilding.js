import React, {Component} from 'react';

class AddBuilding extends Component {
	render() {
		const { addUpdate } = this.props;
		return (
			<div>
				<form>
					<input
                        type = "text"
                        placeholder = "Code - REQUIRED"
                        ref={ (code) => this.code = code }
					/>
				</form>
				<form>
					<input
                        type="text"
                        placeholder="Name - REQUIRED"
                        ref = { (name) => this.name = name }
					/>
				</form>
				<form>
					<input
                        type = "text"
                        placeholder = "Latitude"
                        ref = { (latitude) => this.latitude = latitude }
					/>
				</form>
				<form>
					<input
                        type = "text"
                        placeholder = "Longitude"
                        ref = { (longitude) => this.longitude = longitude }
					/>
				</form>
				<form>
					<input
                        type = "text"
                        placeholder = "Address"
                        ref = { (address) => this.address = address }
					/>
				</form>
					<button class = "addButton" onClick = { () => addUpdate(
                        this.code.value,
                        this.name.value,
						this.latitude.value,
						this.longitude.value,
						this.address.value
					)}>
					    <i>Add a building listing</i>
					</button>
			</div>
		);
	}
}

export default AddBuilding;
