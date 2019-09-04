import React, { useRef } from 'react';

const PixiCanvas = () => {
    const canvas = useRef();
    return (
        <>
            <div ref={canvas}>
            </div>
        </>
    );
}

export default PixiCanvas;