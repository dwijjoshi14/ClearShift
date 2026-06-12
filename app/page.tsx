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
      gap: '2rem'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>ClearShift</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
          Structured shift handoffs for clinic and community health teams.
        </p>
      </div>

      <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <Link href="/handoff/new" style={{
          background: 'var(--accent)',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          borderRadius: 'var(--radius)',
          textDecoration: 'none',
          fontWeight: 500,
          fontSize: '0.95rem'
        }}>
          End my shift
        </Link>

        <Link href="/handoff" style={{
          background: 'var(--surface)',
          color: 'var(--text-primary)',
          padding: '0.75rem 1.5rem',
          borderRadius: 'var(--radius)',
          textDecoration: 'none',
          fontWeight: 500,
          fontSize: '0.95rem',
          border: '1px solid var(--border)'
        }}>
          Start my shift
        </Link>
      </div>
    </main>
  )
}
