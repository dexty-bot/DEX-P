import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({
  text,
  className,
  delay = 0,
  duration = 0.8,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 20 },
  to = { opacity: 1, y: 0 },
  threshold = 0.5,
  rootMargin = '0px',
  textAlign,
  onLetterAnimationComplete,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const elements = container.querySelectorAll('.split-element');

    gsap.set(elements, from);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(elements, {
              ...to,
              duration,
              ease,
              stagger: delay / 100,
              onComplete: onLetterAnimationComplete,
            });
            observer.unobserve(container);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    from,
    to,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
  ]);

  const splitText = (text, type) => {
    if (type === 'chars') {
      return text.split('').map((char, index) => (
        <span key={index} className="split-element" style={{ display: 'inline-block' }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    } else if (type === 'words') {
      return text.split(' ').map((word, index) => (
        <span key={index} className="split-element" style={{ display: 'inline-block', marginRight: '0.5em' }}>
          {word}
        </span>
      ));
    }
    return text;
  };

  return (
    <div ref={containerRef} className={className} style={{ textAlign }}>
      {splitText(text, splitType)}
    </div>
  );
};

export default SplitText;