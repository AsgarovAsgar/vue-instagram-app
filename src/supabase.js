import { createClient } from '@supabase/supabase-js'
console.log('here');
const supabaseUrl = 'https://dktxvmykrnwbabckasib.supabase.co'
console.log('import.meta.env', import.meta.env);
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)