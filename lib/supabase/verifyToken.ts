export default async function verifyToken(
  token: string
): Promise<string | null> {
  const { data, error } = await supabase
    .from("subscribers")
    .select("email")
    .eq("token", token)
    .single();

  if (error || !data) {
    return null;
  }

  const tokenCreatedAt = new Date(data.token_created_at);
  if (Date.now() - tokenCreatedAt.getTime() > 24 * 60 * 60 * 1000) {
    return null;
  }

  return data.email;
}
