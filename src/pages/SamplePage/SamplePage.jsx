import React, { useState, useEffect } from 'react';

function SamplePage(){
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        document.title = `You've clicked ${counter} times`;
    });

    if (counter % 2 == 0){
        var element = <div>Counter Genap</div>
    } else{
        var element = <div>Counter Ganjil</div>
    }

    const handleButton = (value) => {
        setCounter(counter+value);
    }

    return(
        <React.Fragment>
            <h3>You've clicked {counter} times</h3>
            <h3>{element}</h3>
            <button onClick={() => handleButton(3)}>Click Me</button>
        </React.Fragment>
    );
}

export default SamplePage;