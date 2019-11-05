import React, {Component} from 'react';



//followed babyNames tutorial
export default({data, selectedUpdate, filterText}) => {
    const buildingList = data
        .filter(directory => {
            return (
                directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
            )
        })
        .map(directory => {
            return (
                <tr key = {directory.id}>
                    <button onClick = { () => selectedUpdate(directory.id) }>
                        {directory.code}
                        {' '}
                        {directory.name}
                    </button>
                </tr>
            )
        });
    return (
        <div>

            {buildingList}
        </div>
    )
}
