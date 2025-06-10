import React, { useEffect, useRef } from 'react';

// TODO: manage styling
const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        boxShadow: '0 0 20px 10px rgba(255, 255, 255, 0.3)',
        transition: 'transform 0.1s ease-out',
        willChange: 'transform',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '50%',
        backgroundColor: 'white',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 50,
      }}
    />
  );
};

export default CustomCursor;