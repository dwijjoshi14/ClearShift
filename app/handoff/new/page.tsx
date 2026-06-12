'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/app/lib/supabase'
import styles from './page.module.css'

const STATUS_OPTIONS = [
  { value: 'all_clear', label: 'All clear', description: 'Normal shift, no outstanding issues', color: '#22c55e' },
  { value: 'heads_up', label: 'Heads up', description: 'Something to watch or follow up on', color: '#f59e0b' },
  { value: 'needs_attention', label: 'Needs attention', description: 'Urgent item the incoming person must address', color: '#ef4444' },
]

export default function NewHandoff() {
  const router = useRouter()
  const [staffName, setStaffName] = useState('')
  const [shiftDate, setShiftDate] = useState(new Date().toISOString().split('T')[0])
  const [keyEvents, setKeyEvents] = useState('')
  const [openItems, setOpenItems] = useState('')
  const [flagLevel, setFlagLevel] = useState('all_clear')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit() {
    if (!staffName.trim() || !keyEvents.trim()) {
      setError('Please fill in your name and what happened this shift.')
      return
    }

    setLoading(true)
    setError('')

    const { error: sbError } = await supabase
      .from('handoffs')
      .insert({
        staff_name: staffName.trim(),
        shift_date: shiftDate,
        key_events: keyEvents.trim(),
        open_items: openItems.trim(),
        flag_level: flagLevel,
      })

    setLoading(false)

    if (sbError) {
      console.error(sbError)
      setError('Could not save handoff. Try again.')
      return
    }

    router.push('/handoff?submitted=true')
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>End of shift handoff</h1>
      <p className={styles.subtitle}>Takes 2 minutes. Saves the next person 20.</p>

      <div className={styles.field}>
        <label className={styles.label}>Your name</label>
        <input
          className={styles.input}
          placeholder="First name is fine"
          value={staffName}
          onChange={e => setStaffName(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Shift date</label>
        <input
          className={styles.input}
          type="date"
          value={shiftDate}
          onChange={e => setShiftDate(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>What happened this shift</label>
        <textarea
          className={styles.textarea}
          placeholder="Key events, notable interactions, anything the next person should know about"
          value={keyEvents}
          onChange={e => setKeyEvents(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Open items</label>
        <textarea
          className={styles.textarea}
          placeholder="Tasks not finished, calls to return, things still pending"
          value={openItems}
          onChange={e => setOpenItems(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Shift status</label>
        <div className={styles.statusGroup}>
          {STATUS_OPTIONS.map(opt => (
            <button
              key={opt.value}
              type="button"
              className={`${styles.statusOption} ${flagLevel === opt.value ? styles.statusSelected : ''}`}
              data-value={opt.value}
              onClick={() => setFlagLevel(opt.value)}
            >
              <span className={styles.statusDot} style={{ background: opt.color }} />
              <div>
                <div className={styles.statusLabel}>{opt.label}</div>
                <div className={styles.statusDesc}>{opt.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <button
        className={styles.submit}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? 'Saving...' : 'Submit handoff'}
      </button>
    </main>
  )
}
