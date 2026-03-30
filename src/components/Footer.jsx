function Footer() {
  return (
    <footer>
      <div className="container">
        <p>
          &copy; 2025–2026{' '}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Hayotbek Maxmudjonov
          </a>
          . Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  )
}

export default Footer
