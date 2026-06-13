import Link from 'next/link'

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      gap: '0',
      background: 'var(--bg)',
    }}>
      <p style={{
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: '12px',
      }}>
        Shift handoff tool
      </p>

      <h1 style={{
        fontSize: '2.25rem',
        fontWeight: 600,
        letterSpacing: '-0.5px',
        color: 'var(--text-primary)',
        marginBottom: '10px',
        textAlign: 'center',
      }}>
        ClearShift
      </h1>

      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '1rem',
        textAlign: 'center',
        maxWidth: '360px',
        lineHeight: 1.6,
        marginBottom: '32px',
      }}>
        Structured shift handoffs for clinic and community health teams.
      </p>

      <div style={{
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        <Link href="/handoff/new" style={{
          background: 'var(--text-primary)',
          color: 'var(--bg)',
          padding: '10px 22px',
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
          padding: '10px 22px',
          borderRadius: 'var(--radius)',
          textDecoration: 'none',
          fontWeight: 500,
          fontSize: '14px',
          letterSpacing: '-0.1px',
          border: '1px solid var(--border)',
        }}>
          Start my shift
        </Link>
      </div>
    </main>
  )
}
