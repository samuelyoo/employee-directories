import React from 'react'

function TableRow( props ){
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.name}</td>
            <td>{props.location}</td>
            <td>{props.department}</td>
        </tr>
    )
}

export default TableRow