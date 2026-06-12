import { createClient, SupabaseClient } from '@supabase/supabase-js'

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

let _client: SupabaseClient | null = null

export function getSupabase() {
  if (_client) return _client
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  _client = createClient(url, key)
  return _client
}
