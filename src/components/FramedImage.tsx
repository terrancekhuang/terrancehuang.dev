import type { CSSProperties } from 'react';

function FramedImage({
  src,
  alt,
  aspectRatio,
  borderRadius,
  className,
  style,
}: {
  src: string;
  alt: string;
  aspectRatio: string;
  borderRadius: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{
        width: '100%',
        aspectRatio,
        objectFit: 'cover',
        borderRadius,
        border: '1px solid var(--border)',
        ...style,
      }}
    />
  );
}

export default FramedImage;
