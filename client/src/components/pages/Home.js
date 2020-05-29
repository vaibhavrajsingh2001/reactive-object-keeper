import React from 'react';
import Objects from '../objects/Objects';
import ObjectForm from '../objects/ObjectForm';
import ObjectFilter from '../objects/ObjectFilter';

const Home = () => {
    return (
        <div className='grid-2'>
            <div><ObjectForm /></div>
            <div>
                <ObjectFilter />
                <Objects />
            </div>
        </div>
    )
}

export default Home
