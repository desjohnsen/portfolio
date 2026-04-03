import React, { useEffect, useState } from "react";

const ImageOverlay = ({ src, alt, className = "project-image" }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="project-image-trigger"
        onClick={() => setIsOpen(true)}
        aria-label={`Open image: ${alt}`}
      >
        <img src={src} alt={alt} className={className} />
      </button>

      {isOpen && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close image"
            >
              <span className="overlay-close-icon" aria-hidden="true" />
            </button>
            <img src={src} alt={alt} className="lightbox-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageOverlay;
