import React, { useState } from 'react'
import Foods from './Foods'
import { useSelector } from 'react-redux'

const Filter = () => {
    const plates = useSelector((state) => state.plates)

    return (
        <div>
            <div className='search'>
                <input type="search" placeholder='search for your plate' onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            {plates?.filter((val) => {
                    if (search === '') { return val }
                    else if (val.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) return val
                }).map((plate,i)=>
                    <div>
                        <Foods plate={plate} key={i}/>
                    </div> 
                )}
        </div>
    )
}

export default Filter