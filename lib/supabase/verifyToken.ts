export default async function verifyToken(
  token: string
): Promise<string | null> {
  try {
    const decoded = jwt.verify(token, jwtSecret) as TokenPayload;
    const hashedToken = hashToken(token);

    const { data, error } = await supabase
      .from("subscribers")
      .select("email", "token_created_at")
      .eq("email", decoded.email)
      .eq("token", hashedToken)
      .single();

    if (error || !data) {
      console.error("Token verification error:", error);
      return null;
    }

    const tokenCreatedAt = new Date(data.token_created_at);
    if (Date.now() - tokenCreatedAt.getTime() > 24 * 60 * 60 * 1000) {
      console.error("Token has expired");
      return null;
    }

    return decoded.email;
  } catch (error) {
    console.error("Token verification error:", error);
    return null;
  }
}

function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}
