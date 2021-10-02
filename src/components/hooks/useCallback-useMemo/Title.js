import React from 'react'

 function Title() {
    console.log(`rendered title ....`);
    return (
        <div>
            <h2>useCallback Hook Tutorial</h2>
        </div>
    )
}
export default React.memo(Title)