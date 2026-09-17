import { createClient } from '@supabase/supabase-js';

// Vercel env variables na aape toh jaate dummy lai lese
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dummy.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dummykey123';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);