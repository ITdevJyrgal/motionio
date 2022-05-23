import { useState } from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Loader() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("red");

    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <HashLoader color={color} loading={loading} css={override} size={80} />
        </div>
    );
}

export default Loader;
