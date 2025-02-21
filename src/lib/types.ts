export interface PresignedUrlResponse {
  url: string;
  fields: Record<string, string>;
}

// Define type for resume object
export interface Resume {
id?: string;
title?: string;
fileName?: string;
fileUrl?: string;
fileType?: string;
fileSize?: number;
isBase?: boolean;
createdAt?: Date;
updatedAt?: Date;
}


