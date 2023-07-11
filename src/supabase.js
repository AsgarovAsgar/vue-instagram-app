
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dktxvmykrnwbabckasib.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrdHh2bXlrcm53YmFiY2thc2liIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2NDc3NDQsImV4cCI6MjAwNDIyMzc0NH0.Y_xMXw9iYvMB6Eswg5X13TfN6oeaICNRtHqvD6TAeIY'
export const supabase = createClient(supabaseUrl, supabaseKey)