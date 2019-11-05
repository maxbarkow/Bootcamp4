import React from 'react';

export default ({data, selectedBuilding}) => {
console.log("selectedBuilding", selectedBuilding)
	const building = data[selectedBuilding].name
	const code = data[selectedBuilding].code
	var address = ''
	var lat = ''
	var long = ''
	if(data[selectedBuilding].coordinates){
	 lat = data[selectedBuilding].coordinates.latitude
	 long = data[selectedBuilding].coordinates.longitude
	 address = data[selectedBuilding].address
 }


		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
					{' '}
					</p>
					<p>
					{building}
					{' '}
					</p>
					<p>
					{address}
				</p>
				<p>
				{code}
				</p>
				<p>
				{lat}
				</p>
				<p>
				{long}
				</p>
			</div>
		)
	}
