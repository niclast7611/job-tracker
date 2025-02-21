import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// Type for the expected request body
type CreateResumeRequest = {
  title: string;
  isBase?: boolean;
  baseResumeId?: string;
  fileName: string;
  fileUrl: string;
  fileType: string;
  fileSize: number;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as CreateResumeRequest;

    // Validate required fields
    if (!body.title || !body.fileName || !body.fileUrl || !body.fileType || !body.fileSize) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create resume record
    const resume = await db.resume.create({
      data: {
        title: body.title,
        isBase: body.isBase ?? false,
        baseResumeId: body.baseResumeId,
        fileName: body.fileName,
        fileUrl: body.fileUrl,
        fileType: body.fileType,
        fileSize: body.fileSize,
      },
    });

    return NextResponse.json(resume);
  } catch (error) {
    console.error("Error creating resume:", error);
    return NextResponse.json(
      { error: "Failed to create resume" },
      { status: 500 }
    );
  }
}

// Optional: Add GET method to fetch resumes
export async function GET() {
  try {
    const resumes = await db.resume.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(resumes);
  } catch (error) {
    console.error("Error fetching resumes:", error);
    return NextResponse.json(
      { error: "Failed to fetch resumes" },
      { status: 500 }
    );
  }
}