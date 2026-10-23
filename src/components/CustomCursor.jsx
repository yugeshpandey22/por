import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let posX = -100, posY = -100;
    let mouseX = -100, mouseY = -100;
    let isVisible = false;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        cursor.style.opacity = '1';
        follower.style.opacity = '1';
        posX = mouseX;
        posY = mouseY;
      }

      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const onMouseLeave = () => {
      cursor.style.opacity = '0';
      follower.style.opacity = '0';
      isVisible = false;
    };

    const onMouseEnter = () => {
      cursor.style.opacity = '1';
      follower.style.opacity = '1';
      isVisible = true;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseenter', onMouseEnter);

    const renderFollower = () => {
      posX += (mouseX - posX) * 0.18;
      posY += (mouseY - posY) * 0.18;
      follower.style.left = `${posX}px`;
      follower.style.top = `${posY}px`;
      animId = requestAnimationFrame(renderFollower);
    };
    renderFollower();

    // Hover detection for interactive items
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .project-card, .service-card, .timeline-card, .filter-btn, .channel-item, .skill-pill-item');
      if (target) {
        follower.classList.add('hovered');
      } else {
        follower.classList.remove('hovered');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef} style={{ opacity: 0 }}></div>
      <div className="custom-cursor-follower" ref={followerRef} style={{ opacity: 0 }}></div>
    </>
  );
}
