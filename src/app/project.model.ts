export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;  // Thumbnail
    link?: string;
    externalLink?: string;
    tags: string[];
    longDescription?: string;
    extraPictureUrls?: string[];
  }
  