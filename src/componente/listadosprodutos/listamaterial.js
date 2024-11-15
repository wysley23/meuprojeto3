import "./app.js"
import React from "react";

const listadecoisa = ['macaco', 'parafuseira', 'chave philps'];

function listadascoisas() {
    return (
        <ul>
            {listadecoisa.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>

    );

}
export default listadascoisas