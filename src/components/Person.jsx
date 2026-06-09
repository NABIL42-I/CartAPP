// import React from 'react';

import { useState } from "react";

const Person = () => { // component
    const [person,setPerson] = useState("h")

    const handleClick=()=> {
        setPerson("Jo");
        console.log(person);
    };
    return (
        <div>
            <button onClick={handleClick}className='px-3 py-2 bg-blue-500 text-white rounded-sm'>Click Me</button>
        </div>
    );
};

export default Person;


// const handleClick = () => {
//     setPerson("Jo");      // React says: "Got it. I'll change this on the next render."
    
//     console.log(person);  // React looks at the current render. 
//                           // What is 'person' right now? It is "h".
//                           // So it prints "h".
// }; Asynchronized