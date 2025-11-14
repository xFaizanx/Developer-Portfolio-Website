import { useEffect, useRef } from 'react';

export function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Characters for the rain effect
    const chars = '01</>{}[]();=+-*&#@!$%^&*()_+{}|:<>?[];,./`~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charArray = chars.split('');

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    let animationFrameId: number;
    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    // Draw function
    const draw = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(draw);

      const deltaTime = currentTime - lastTime;
      if (deltaTime < interval) return;
      lastTime = currentTime - (deltaTime % interval);

      // Fade effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Check if dark mode
      const isDark = document.documentElement.classList.contains('dark');
      
      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Color based on theme
        if (isDark) {
          ctx.fillStyle = drops[i] * fontSize > canvas.height * 0.7 
            ? 'rgba(6, 182, 212, 0.9)' // cyan-500
            : 'rgba(6, 182, 212, 0.3)';
        } else {
          ctx.fillStyle = drops[i] * fontSize > canvas.height * 0.7
            ? 'rgba(59, 130, 246, 0.9)' // blue-500
            : 'rgba(59, 130, 246, 0.3)';
        }
        
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Reset drop
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-20 dark:opacity-30"
      style={{ background: 'transparent' }}
    />
  );
}
