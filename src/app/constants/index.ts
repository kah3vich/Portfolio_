//| ENV

export const API_HOST = process.env.NEXT_PUBLIC_API_HOST;
export const FONT_LINK = process.env.NEXT_PUBLIC_FONT_LINK;
export const SERVICE_LINK = process.env.NEXT_PUBLIC_SERVICE_LINK;
export const NORMALIZE_CSS = process.env.NEXT_PUBLIC_NORMALIZE_CSS;

//! Other

export const isServer = typeof window === 'undefined';