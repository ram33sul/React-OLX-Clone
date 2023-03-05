import { createContext } from 'react';
import { useState } from 'react';

export const product_details = createContext(null);

export default function ProductDetails({children}){
    const [ product, setProduct] = useState(null);

    return(
        <product_details.Provider value={{product, setProduct}}>
            {children}
        </product_details.Provider>
    )
}