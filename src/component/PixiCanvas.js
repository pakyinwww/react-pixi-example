import React, { useRef, useEffect } from 'react';
import * as PIXI from 'pixi.js';
import styles from './PixiCanvas.css'

const PixiCanvas = () => {
    const canvas = useRef();

    useEffect(() => {
        const app = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            transparent: true
        });
        canvas.current.appendChild(app.view)

        // Load the bunny texture
        app.loader.add('bunny', 'https://pixijs.io/examples/examples/assets/bunny.png').load(startup);

        function startup() {
            var bunny = new PIXI.Sprite(app.loader.resources.bunny.texture);

            // Center the sprite's anchor point
            bunny.anchor.set(0.5);

            // Move the sprite to the center of the screen
            bunny.x = app.renderer.width / 2;
            bunny.y = app.renderer.height / 2;

            app.stage.addChild(bunny);

            // Listen for animate update
            app.ticker.add(function (delta) {
                // Rotate mr rabbit clockwise
                bunny.rotation += 0.1 * delta;
            });
        }

    })


    return (
        <>
            <div ref={canvas} className={styles.pixicanvas}>
            </div>
        </>
    );
}

export default PixiCanvas;