import React from 'react';
import { useState } from 'react';

const [count, setCount] = useState(0, setCount)

function HookCounter() {
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Count {count}
            </button>
        </div>
    )
}

export default HookCounter