import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Enrollment {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  course: string;
  message: string;
  reviewed: boolean;
  created_at: string;
}
