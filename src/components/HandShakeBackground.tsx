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

    // Animation loop with cross-fading for "Perfect" smoothness
    useEffect(() => {
        if (loaded < frames.length / 2) return;

        let animationFrameId: number;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        let lastTime = 0;
        const fadeDuration = 500; // ms to cross-fade
        const frameHoldTime = 2000; // ms to stay on one frame before fading
        let alpha = 0;
        let isFading = false;
        let fadeStartTime = 0;

        const render = (time: number) => {
            if (!lastTime) lastTime = time;

            const currentFrameIdx = currentFrameRef.current;
            const nextFrameIdx = (currentFrameIdx + 1) % frames.length;

            const currentImg = images[currentFrameIdx];
            const nextImg = images[nextFrameIdx];

            if (currentImg?.complete) {
                if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }

                const drawImageCover = (img: HTMLImageElement, opacity: number) => {
                    const imgRatio = img.width / img.height;
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

                    ctx.globalAlpha = opacity;
                    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
                };

                // Logic for cross-fade
                if (!isFading) {
                    if (time - lastTime > frameHoldTime) {
                        isFading = true;
                        fadeStartTime = time;
                    }
                    drawImageCover(currentImg, 1);
                } else {
                    const elapsed = time - fadeStartTime;
                    const progress = Math.min(elapsed / fadeDuration, 1);

                    drawImageCover(currentImg, 1 - progress);
                    if (nextImg?.complete) {
                        drawImageCover(nextImg, progress);
                    }

                    if (progress >= 1) {
                        isFading = false;
                        currentFrameRef.current = nextFrameIdx;
                        lastTime = time;
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [images, loaded]);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 w-full h-full -z-20 object-cover opacity-60 brightness-75 transition-opacity duration-1000 blur-[3px]"
            />
            {/* Soft Ambient overlay */}
            <div className="fixed inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background/95 -z-10" />
        </>
    );
};

export default HandShakeBackground;
