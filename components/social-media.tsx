export default function SocialMedia() {
  return (
    <section className="text-center mt-15 py-10 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-5">Follow Us</h2>
        <div className="flex justify-center gap-6">
          <a
            href="https://discord.gg/INVULLEN"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="social-icon"
          >
            <i className="fab fa-discord"></i>
          </a>
          <a
            href="https://tiktok.com/@INVULLEN"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="social-icon"
          >
            <i className="fab fa-tiktok"></i>
          </a>
          <a
            href="https://youtube.com/@INVULLEN"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="social-icon"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </section>
  )
}
