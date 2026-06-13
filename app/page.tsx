import Link from 'next/link'

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      fontFamily: "'DM Sans', sans-serif",
    }}>

      {/* Nav */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        height: '56px',
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
      }}>
        <span style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '-0.3px', color: 'var(--text-primary)' }}>
          ClearShift
        </span>
        <Link href="/handoff/new" style={{
          background: 'var(--text-primary)',
          color: 'var(--bg)',
          padding: '8px 16px',
          borderRadius: 'var(--radius)',
          textDecoration: 'none',
          fontSize: '13px',
          fontWeight: 500,
          letterSpacing: '-0.1px',
        }}>
          End my shift
        </Link>
      </nav>

      {/* Hero */}
      <div style={{
        maxWidth: '680px',
        margin: '0 auto',
        padding: '64px 24px 40px',
        textAlign: 'center',
      }}>
        <p style={{
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          marginBottom: '14px',
        }}>
          Shift handoff tool
        </p>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 600,
          letterSpacing: '-0.6px',
          color: 'var(--text-primary)',
          marginBottom: '14px',
          lineHeight: 1.15,
        }}>
          The next person<br />deserves to know.
        </h1>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1rem',
          maxWidth: '400px',
          margin: '0 auto 32px',
          lineHeight: 1.65,
        }}>
          Two-minute end-of-shift handoffs for clinic and community health teams. Structured, flagged, and ready for whoever walks in next.
        </p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/handoff/new" style={{
            background: 'var(--text-primary)',
            color: 'var(--bg)',
            padding: '11px 24px',
            borderRadius: 'var(--radius)',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '14px',
            letterSpacing: '-0.1px',
          }}>
            End my shift
          </Link>
          <Link href="/handoff" style={{
            background: 'var(--surface)',
            color: 'var(--text-primary)',
            padding: '11px 24px',
            borderRadius: 'var(--radius)',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '14px',
            letterSpacing: '-0.1px',
            border: '1px solid var(--border)',
          }}>
            View handoffs
          </Link>
        </div>
      </div>

      {/* Sample cards */}
      <div style={{
        maxWidth: '680px',
        margin: '0 auto',
        padding: '0 24px 80px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}>

        <p style={{
          fontSize: '10px',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          marginBottom: '8px',
        }}>
          What it looks like
        </p>

        {/* Card 1 — needs attention */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
        }}>
          <div style={{ height: '3px', background: 'var(--flag-red)' }} />
          <div style={{ padding: '16px 20px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                padding: '3px 10px 3px 7px', borderRadius: '100px',
                fontSize: '11px', fontWeight: 500,
                background: 'var(--flag-red-bg)', color: 'var(--flag-red-text)',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--flag-red)', display: 'block' }} />
                Needs attention
              </span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontSize: '13px', color: 'var(--text-secondary)', marginRight: '4px' }}>Sarah K.</span>
                · Sat, Jun 14
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '14px' }}>
              <div>
                <p style={{ fontSize: '10px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '5px' }}>What happened</p>
                <p style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.6 }}>Client in room 4 had a difficult episode around 2pm. De-escalated with support. Family was called and updated.</p>
              </div>
              <div>
                <p style={{ fontSize: '10px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '5px' }}>Open items</p>
                <p style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.6 }}>Follow-up call with family tomorrow. Incident form still needs to be completed.</p>
              </div>
            </div>
            <div style={{
              padding: '12px 14px',
              background: 'var(--surface-subtle)',
              borderRadius: 'var(--radius)',
              borderLeft: '2px solid var(--border-strong)',
            }}>
              <p style={{ fontSize: '10px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '5px' }}>AI brief</p>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>Shift flagged for attention with open items requiring follow-up. Review key events before proceeding.</p>
            </div>
          </div>
        </div>

        {/* Card 2 — heads up */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
        }}>
          <div style={{ height: '3px', background: 'var(--flag-amber)' }} />
          <div style={{ padding: '16px 20px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                padding: '3px 10px 3px 7px', borderRadius: '100px',
                fontSize: '11px', fontWeight: 500,
                background: 'var(--flag-amber-bg)', color: 'var(--flag-amber-text)',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--flag-amber)', display: 'block' }} />
                Heads up
              </span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontSize: '13px', color: 'var(--text-secondary)', marginRight: '4px' }}>Marcus D.</span>
                · Fri, Jun 13
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <p style={{ fontSize: '10px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '5px' }}>What happened</p>
                <p style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.6 }}>Quiet shift. New intake in room 2 still settling in. Medication schedule adjusted for client 7.</p>
              </div>
              <div>
                <p style={{ fontSize: '10px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '5px' }}>Open items</p>
                <p style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.6 }}>Check in on new intake first thing. Pharmacy delivery expected before noon.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 — all clear */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
        }}>
          <div style={{ height: '3px', background: 'var(--flag-green)' }} />
          <div style={{ padding: '16px 20px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                padding: '3px 10px 3px 7px', borderRadius: '100px',
                fontSize: '11px', fontWeight: 500,
                background: 'var(--flag-green-bg)', color: 'var(--flag-green-text)',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--flag-green)', display: 'block' }} />
                All clear
              </span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontSize: '13px', color: 'var(--text-secondary)', marginRight: '4px' }}>Priya M.</span>
                · Thu, Jun 12
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <p style={{ fontSize: '10px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '5px' }}>What happened</p>
                <p style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.6 }}>Smooth shift. All scheduled check-ins completed. No incidents or escalations.</p>
              </div>
              <div>
                <p style={{ fontSize: '10px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '5px' }}>Open items</p>
                <p style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.6 }}>None. Incoming staff can proceed normally.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
