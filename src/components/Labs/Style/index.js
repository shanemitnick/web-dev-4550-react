import React from "react";

const Style  = () => {
    const colorBlack = {
        color: "black"
    }
    const padding10px = {
        padding: "10px"
    }

    const bgBlue = {
        "backgroundColor": "lightblue",
        "color": 'black',
        ...padding10px
    };

    const bgRed = {
        'backgroundColor': 'lightcoral',
        ...colorBlack,
        ...padding10px
    };



    return(
        <div>
            <h1>Styles</h1>
            <div style={{'backgroundColor': "lightyellow",
            "color": "black", "padding": "10px"}}>
                Yellow Background
            </div>

            <div style={bgRed}>
                Red Background
            </div>

            <div style={bgBlue}>
                Blue Background
            </div>
        </div>
    )

}

export default Style;