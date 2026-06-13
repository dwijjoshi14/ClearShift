'use client'

export const dynamic = 'force-dynamic'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { getSupabase, Handoff, FlagLevel } from '@/app/lib/supabase'
import styles from './page.module.css'

const FLAG_LABELS: Record<FlagLevel, string> = {
  all_clear: 'All clear',
  heads_up: 'Heads up',
  needs_attention: 'Needs attention',
}

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-CA', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })
}

function generateSummary(flag_level: FlagLevel, open_items: string): string {
  const hasOpen = open_items && open_items.trim().length > 0
  if (flag_level === 'needs_attention') {
    return `Shift flagged for attention${hasOpen ? ' with open items requiring follow-up' : ''}. Review key events before proceeding.`
  }
  if (flag_level === 'heads_up') {
    return `Shift completed with minor notes${hasOpen ? ' and one open item to follow up on' : ''}. No urgent action required.`
  }
  return `Shift completed without issues${hasOpen ? ', though one item was left open for follow-up' : ''}. Incoming staff can proceed normally.`
}

function HandoffListInner() {
  const params = useSearchParams()
  const submitted = params.get('submitted')
  const [handoffs, setHandoffs] = useState<Handoff[]>([])
  const [loading, setLoading] = useState(true)
  const [summaries, setSummaries] = useState<Record<string, string>>({})

  useEffect(() => {
    async function load() {
      const { data, error } = await getSupabase()
        .from('handoffs')
        .select('*')
        .order('shift_date', { ascending: false })
        .limit(20)
      console.log('data:', data)
      console.log('error:', error)
      setHandoffs(data ?? [])
      setLoading(false)
    }
    load()
  }, [])

  function handleSummarize(h: Handoff) {
    const summary = generateSummary(h.flag_level, h.open_items)
    setSummaries(prev => ({ ...prev, [h.id]: summary }))
  }

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <span className={styles.navLogo}>
          ClearShift <span>/ handoffs</span>
        </span>
        <Link href="/handoff/new" className={styles.newBtn}>
          End my shift
        </Link>
      </nav>

      <div className={styles.container}>
        {submitted && (
          <div className={styles.toast}>
            Handoff submitted. The next person is covered.
          </div>
        )}

        <p className={styles.pageLabel}>Incoming handoffs</p>
        <p className={styles.pageTitle}>Most recent shift first</p>

        {loading && <p className={styles.empty}>Loading...</p>}

        {!loading && handoffs.length === 0 && (
          <p className={styles.empty}>No handoffs yet. Submit the first one.</p>
        )}

        <div className={styles.list}>
          {handoffs.map(h => (
            <div key={h.id} className={`${styles.card} ${styles[h.flag_level]}`}>
              <div className={styles.cardAccent} />
              <div className={styles.cardInner}>
                <div className={styles.cardTop}>
                  <span className={`${styles.flagPill} ${styles[h.flag_level]}`}>
                    <span className={styles.dot} />
                    {FLAG_LABELS[h.flag_level]}
                  </span>
                  <span className={styles.meta}>
                    <span className={styles.metaName}>{h.staff_name}</span>
                    <span>·</span>
                    {formatDate(h.shift_date)}
                  </span>
                </div>

                <div className={styles.sections}>
                  <div className={styles.section}>
                    <p className={styles.sectionLabel}>What happened</p>
                    <p className={styles.sectionText}>{h.key_events}</p>
                  </div>
                  <div className={styles.section}>
                    <p className={styles.sectionLabel}>Open items</p>
                    <p className={styles.sectionText}>{h.open_items}</p>
                  </div>
                </div>

                {summaries[h.id] ? (
                  <div className={styles.summaryBox}>
                    <p className={styles.summaryLabel}>AI brief</p>
                    <p className={styles.summaryText}>{summaries[h.id]}</p>
                  </div>
                ) : (
                  <button
                    className={styles.summarizeBtn}
                    onClick={() => handleSummarize(h)}
                  >
                    Summarize shift
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HandoffList() {
  return (
    <Suspense fallback={<p style={{ padding: '2rem', color: '#9B9B91', fontSize: '13px' }}>Loading...</p>}>
      <HandoffListInner />
    </Suspense>
  )
}
