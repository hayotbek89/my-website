import Card from './Card'

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Aloqa</h2>
        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Ijtimoiy tarmoqlarda ham toping:</p>
          <Card />
        </div>
      </div>
    </section>
  )
}

export default Contact
