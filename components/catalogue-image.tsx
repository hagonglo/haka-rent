"use client";

import { useState } from "react";

export function CatalogueImage({
  src,
  alt,
  className,
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <div className={`equipment-fallback ${className ?? ""}`}>Haka Rent · Camera · Light · Grip</div>;
  }

  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}
