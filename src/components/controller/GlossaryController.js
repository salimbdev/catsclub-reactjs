import React, {useEffect, useState} from "react";
import GlossaryView from "../view/GlossaryView";

export default function GlossaryController(){
    const backUrl = "http://34.163.123.95:8081/api/glossary";


    const [expression, setExpression] = useState(null);
    const [extract, setExtract] = useState("");

    useEffect(() => {
        fetchExpression();
    }, []);

    function fetchExpression(){
        fetch(`${backUrl}/expressions`)
            .then(response => response.json())
            .then(json => setExpression(json));
    }

    function fetchExtract(data){
        fetch(`${backUrl}/extract/${data}`)
            .then(response => response.text())
            .then(text => setExtract(text));

    }


    return(
        <GlossaryView expression={expression} fetchExtract={(data) => fetchExtract(data)} extract={extract}/>
    )
}