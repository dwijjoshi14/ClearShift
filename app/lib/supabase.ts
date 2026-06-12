import { createClient } from '@supabase/supabase-js'

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

function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}

export const supabase = getSupabaseClient()
