import { useState } from 'react';

function ProfileImage({ image }) {
  const fallbackSrc = image.fallback || '/profile-placeholder.svg';
  const [imageSrc, setImageSrc] = useState(image.src || fallbackSrc);

  function handleImageError() {
    if (imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
    }
  }

  return (
    <img
      className="profile-image"
      src={imageSrc}
      alt={image.alt}
      onError={handleImageError}
    />
  );
}

export default ProfileImage;
