import React from 'react'

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
}

export default function ImageWithFallback({
  alt,
  className,
  style,
  width = 400,
  height = 300,
}: ImageWithFallbackProps) {
  // プレースホルダー画像URLを生成
  const placeholderUrl = `https://via.placeholder.com/${width}x${height}.png?text=${encodeURIComponent(alt || 'Image')}`;
  
  return (
    <img
      src={placeholderUrl}
      alt={alt}
      className={className}
      style={style}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        if (target.src !== placeholderUrl) {
          target.src = placeholderUrl;
        }
      }}
    />
  );
}
