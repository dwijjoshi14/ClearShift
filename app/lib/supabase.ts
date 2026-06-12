import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type FlagLevel = 'all_clear' | 'heads_up' | 'needs_attention'

export interface Handoff {
  id: string
  created_at: string
  staff_name: string
  shift_date: string
  key_events: string
  open_items: string
  flag_level: FlagLevel
}
