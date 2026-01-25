"use client";

import React, { useEffect, useRef, useState } from 'react';

const HandShakeBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(0);
    const frames = Array.from({ length: 48 }, (_, i) => (i * 4 + 1).toString().padStart(5, '0'));
    const currentFrameRef = useRef(0);

    // Preload images
    useEffect(() => {
        const preloadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        frames.forEach((frame) => {
            const img = new Image();
            img.src = `/hand-sequence-optimized/${frame}.png`;
            img.onload = () => {
                loadedCount++;
                setLoaded(loadedCount);
            };
            preloadedImages.push(img);
        });
        setImages(preloadedImages);
    }, []);

    // Animation loop
    useEffect(() => {
        if (loaded < frames.length / 2) return; // Wait for 50% to start

        let animationFrameId: number;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        const render = () => {
            const currentImg = images[currentFrameRef.current];

            if (currentImg && currentImg.complete) {
                // Resize canvas only if window size changed
                if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }

                // Cover implementation
                const imgRatio = currentImg.width / currentImg.height;
                const canvasRatio = canvas.width / canvas.height;
                let drawWidth = canvas.width;
                let drawHeight = canvas.height;
                let offsetX = 0;
                let offsetY = 0;

                if (imgRatio > canvasRatio) {
                    drawWidth = canvas.height * imgRatio;
                    offsetX = (canvas.width - drawWidth) / 2;
                } else {
                    drawHeight = canvas.width / imgRatio;
                    offsetY = (canvas.height - drawHeight) / 2;
                }

                ctx.drawImage(currentImg, offsetX, offsetY, drawWidth, drawHeight);
            }

            currentFrameRef.current = (currentFrameRef.current + 1) % frames.length;
            // Slowed down FPS for a more realistic and calm background feel
            setTimeout(() => {
                animationFrameId = requestAnimationFrame(render);
            }, 80); // ~12 FPS for a smooth, slow-motion feel
        };

        render();

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [images, loaded]);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 w-full h-full -z-20 object-cover opacity-60 brightness-75 transition-opacity duration-1000"
            />
            {/* Ambient overlay for readability and depth */}
            <div className="fixed inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background/90 -z-10 backdrop-blur-[0.5px]" />

            {/* Syncing indicator */}
            {loaded < frames.length && (
                <div className="fixed bottom-4 right-4 z-50 text-[10px] text-primary/40 font-black tracking-[0.2em] uppercase">
                    Syncing Experience: {Math.round((loaded / frames.length) * 100)}%
                </div>
            )}
        </>
    );
};

export default HandShakeBackground;
