import { createClient } from "@supabase/supabase-js";

export function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl) {
    throw new Error("Supabase URL is not configured. Please add NEXT_PUBLIC_SUPABASE_URL to your .env file.");
  }

  if (!supabaseKey) {
    throw new Error("Supabase key is not configured. Please add SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY to your .env file.");
  }

  return createClient(supabaseUrl, supabaseKey);
}
