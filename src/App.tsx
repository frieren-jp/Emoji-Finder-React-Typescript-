import { useState } from 'react'
import './App.css'

type Emoji = { id: number; symbol: string; title: string; keywords: string }

// The repeated number card is intentional: it appears twice in the Figma frame.
const emojis: Emoji[] = [
  { id: 1, symbol: '💯', title: '100', keywords: 'Hundred, points, symbol, wow, win, perfect, parties' },
  { id: 2, symbol: '🔢', title: '1234', keywords: 'input symbol for numbers symbol' },
  { id: 3, symbol: '🔢', title: '1234', keywords: 'input symbol for numbers symbol' },
]

function EmojiCard({ emoji }: { emoji: Emoji }) {
  return (
    <article className="emoji-card">
      <span className="emoji-card__symbol" role="img" aria-label={emoji.title}>{emoji.symbol}</span>
      <h2 className="emoji-card__title">{emoji.title}</h2>
      <p className="emoji-card__keywords">{emoji.keywords}</p>
    </article>
  )
}

export default function App() {
  const [query, setQuery] = useState('')
  const search = query.trim().toLowerCase()
  const results = emojis.filter(({ title, keywords, symbol }) =>
    `${title} ${keywords} ${symbol}`.toLowerCase().includes(search),
  )

  return (
    <>
      <header className="hero">
        <h1>Emoji Finder</h1>
        <p>Find emoji by keywords</p>
      </header>
      <main className="content">
        <form className="search" role="search" onSubmit={(event) => event.preventDefault()}>
          <label className="visually-hidden" htmlFor="emoji-search">Find emoji by keywords</label>
          <input id="emoji-search" type="search" placeholder="Placeholder" autoComplete="off"
            value={query} onChange={(event) => setQuery(event.target.value)} />
        </form>
        <section className="emoji-grid" aria-label="Emoji search results">
          {results.map((emoji) => <EmojiCard key={emoji.id} emoji={emoji} />)}
          {results.length === 0 && <p className="empty-state">No emoji found. Try another keyword.</p>}
        </section>
        <p className="visually-hidden" role="status">{results.length} emoji found</p>
      </main>
    </>
  )
}
