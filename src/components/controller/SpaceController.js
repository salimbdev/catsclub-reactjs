import React, {useContext, useEffect} from "react";
import {myContext} from "../../index";
import SpaceView from "../view/SpaceView";



export default function SpaceController(props) {

    const backUrl = "http://localhost:8081/api/space";

    const [owner,] = useContext(myContext);

    useEffect(() => {
        fetchOwnerCats();
    }, [])

    function fetchOwnerCats() {
        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json", "Authorization": `Bearer ${owner.token}`}
        }
        fetch(`${backUrl}/owner/${owner.id}/cats`, requestOptions)
            .then(response => response.json())
            .then(json => props.setCats(json));
    }


    function addCat(name, breed, birthdate, picture) {
        const cat = {name: name, breed: breed, birthdate: birthdate, picture: picture, token: owner.token};
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json", "Authorization": `Bearer ${owner.token}`},
            body: JSON.stringify(cat)
        }
        fetch(`${backUrl}/cat`, requestOptions)
            .then(response => response.json())
            .then(() => fetchOwnerCats());
    }

    function deleteCat(id) {
        const cat = {id: id, token: owner.token};
        const requestOptions = {
            method: "DELETE",
            headers: {"Content-Type": "application/json", "Authorization": `Bearer ${owner.token}`},
            body: JSON.stringify(cat)
        }
        fetch(`${backUrl}/cat`, requestOptions)
            .then(() => fetchOwnerCats());
    }



    return(
        <SpaceView fetchOwnerCats={() => fetchOwnerCats()} addCat={(name, breed, birthdate, picture) => addCat(name, breed, birthdate, picture)} deleteCat={(id) => deleteCat(id)} cats={props.cats}/>
    )
}