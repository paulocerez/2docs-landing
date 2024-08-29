import { NextRequest } from "next/server";

export default function POST(request: NextRequest) {
  const { email, name } = NextRequest.body;
}
