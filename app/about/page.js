'use client'

import { useState } from "react";

function about() {
    const [Count, setCount] = useState(0);

    return (
        <div>
            About Page{Count}
            <button onClick={() => setCount(Count + 1)}>Click</button>
        </div>
    )
}

export default about;
