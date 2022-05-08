import React, { useEffect, useState } from 'react';

const useNewInventory = () => {
    const [inventories, setInventories] = useState([]);

    useEffect( ()=>{
        fetch('https://gymactive.herokuapp.com/newitems')
        .then(res => res.json())
        .then(data => setInventories(data));
    }, [])

    return [inventories, setInventories];
};

export default useNewInventory;