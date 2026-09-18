import React, {useCallback, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

import Header from "./Component/Header";
import Body from "./Component/body";

        function GithubProfile(){
            // Header
            // Body : 10 card show karenga

            return(
                <>
                 <Header></Header>
                 <Body></Body>
                </>
            )
        }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GithubProfile />);
