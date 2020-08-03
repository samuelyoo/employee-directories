import React, { useState } from 'react';

import TableFilter from '../components/TableFilter'
import TableOrder from '../components/TableOrder'
import TableList from '../components/TableList'

import employees from '../employees.json'

function Search() {
    const [ tableManager, setList ]= useState( { list: employees, filter: '', order: 'id' } )
    console.log( `[App] tableManager:`, tableManager )

    function updateFilter( filter ){
      console.log( `employees: `, employees )
      const filterList = employees.filter( employee => employee.name.toLowerCase().indexOf( filter.toLowerCase() )>-1 )
      setList( { ...tableManager, filter, list: filterList })
    }

    function updateOrder( order ){
      const newOrderForList = tableManager.list.sort(function(a, b) {
        return a[order] > b[order] ? 1 : -1;
      })
      setList( { ...tableManager, order, list: newOrderForList })
    }

    return(
        <div class="row d-flex justify-content-center container">

            <h1>Employee List</h1>
            <form>
                <TableFilter filter={tableManager.filter} updateFilter={updateFilter} />
                <TableOrder order={tableManager.order} updateOrder={updateOrder} />
            </form>

            <TableList employees={tableManager.list} />
        </div>
    )
}

export default Search;
