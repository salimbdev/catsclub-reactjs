import React, { useContext } from "react";

import { myContext } from "../..";
import ConnectionView from "../view/ConnectionView";

export default function ConnectionController() {

    const backUrl = "http://34.163.123.95:8081/api/security";

    const [owner, setOwner] = useContext(myContext);

    function fetchOwner(login, password) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: login, password: password })
        };
        fetch(`${backUrl}/authorize`, requestOptions)
            .then(response => response.json())
            .then(json => setOwner(
                {
                    token: json.token,
                    id: json.owner.id,
                    name: json.owner.name,
                    surname: json.owner.surname
                }
            ));
        console.log(owner);
        // localStorage.setItem("owner", );
    }

    return (
        <ConnectionView fetchOwner={(login, password) => fetchOwner(login, password)} />
    );
}