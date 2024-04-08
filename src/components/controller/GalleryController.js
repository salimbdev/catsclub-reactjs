import React, {useContext, useEffect, useState} from "react";

import GalleryView from "../view/GalleryView";
import {myContext} from "../../index";


export default function GalleryController(props) {

    const backUrl = "http://localhost:8081/api/gallery";
    const [owner, ] = useContext(myContext);


    useEffect(() => {
        fetchAllOwnersButSelf();
    }, []);


    function fetchAllOwnersButSelf() {
        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json", "Authorization": `Bearer ${owner.token}`}
        }
        fetch(`${backUrl}/owners/exclude/self/${owner.id}`, requestOptions)
            .then(response => response.json())
            .then(json => {
                props.setAllOwnersButSelf(json);
    }
            );
    }

    function fetchOtherOwnerCats(ownerId) {
        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json", "Authorization": `Bearer ${owner.token}`}
        }
        fetch(`${backUrl}/owner/${ownerId}/cats`, requestOptions)
            .then(response => response.json())
            .then(json => props.setCats(json));
    }
    return(
        <GalleryView
            otherOwner={props.allOwnersButSelf}
            cats={props.cats}
            fetchOtherOwnerCats={(id) => fetchOtherOwnerCats(id)
        }/>
    )

}