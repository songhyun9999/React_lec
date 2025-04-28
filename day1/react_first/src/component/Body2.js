import React from 'react';

function Body2(){
    const number = 100;
    const number2 = 200;
    const strA = 'Hello World'
    const strB = 'React'
    const boolA = true;
    const boolB = false;
    const objA = {
        data1 : 300,
        data2 : 500
    }
    return (
        <React.Fragment>
            <div>
                <h1>body2</h1>
                <h2>number = {number}</h2>
                <h2>number2 = {number2}</h2>
                <h2>sum result = {number + number2}</h2>
                <h2>string = {strA + strB}</h2>
                <h2>{String(boolA)}</h2>
                <h2>{String(boolB)}</h2>
                <h2>{String(boolB|boolA)}</h2>
                <h2>{String(boolB||boolA)}</h2>
                <h2>{objA.data1}</h2>
                <h2>{objA.data2}</h2>
                <h2>{objA.data1 + objA.data2}</h2>
            </div>
            <h2>h2 text</h2>
        </React.Fragment>
    )
}

export default Body2