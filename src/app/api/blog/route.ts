import connectMongo from "@/lib/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongo();
  const posts = await Post.find();
  return NextResponse.json(posts);
}

export async function POST(request) {
  await connectMongo();
  const data = await request.json();
  await Post.create(data);
  return NextResponse.json({
    message: "post created successfully",
  });
}
