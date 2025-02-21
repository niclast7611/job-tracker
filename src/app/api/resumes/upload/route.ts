import { S3Client } from "@aws-sdk/client-s3";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { NextRequest, NextResponse } from "next/server";

// Initialize S3 client outside of handler for reuse
const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET!,
  },
});

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body
    const { filename } = await request.json();
        console.log("filename", filename);
    if (!filename) {
      return NextResponse.json(
        { error: "Filename is required" },
        { status: 400 }
      );
    }

    const { url, fields } = await createPresignedPost(s3Client, {
      Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME!,
      Key: filename,
      Conditions: [
        ["content-length-range", 0, 10485760], // up to 10 MB
      ],
      Expires: 600, // 10 minutes
    });

    return NextResponse.json({ url, fields });
  } catch (error) {
    console.error('Error creating presigned URL:', error);
    return NextResponse.json(
      { error: 'Error creating upload URL' },
      { status: 500 }
    );
  }
}