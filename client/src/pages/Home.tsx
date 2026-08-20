/**
 * Sunlit Scrapbook style: asymmetrical studio-wall layout, paper edges, Persimmon Orange,
 * and tactile editorial gallery interactions. Does this reinforce the bright, tactile, curious brand?
 */
import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, MoveUpRight, X } from "lucide-react";

type Category = "All" | "Clay" | "Paper" | "Fiber" | "Sketches";

type GalleryItem = {
  title: string;
  category: Exclude<Category, "All">;
  year: string;
  description: string;
  image: string;
  layout: "tall" | "wide" | "square" | "feature";
  accent: string;
};

const categories: Category[] = ["All", "Clay", "Paper", "Fiber", "Sketches"];

const galleryItems: GalleryItem[] = [
  {
    title: "Soft Edges",
    category: "Clay",
    year: "2026",
    description: "A tiny family of hand-thrown vessels, made for sunlight and little everyday rituals.",
    image: "/manus-storage/hobby-gallery-ceramics_603d19f3.jpg",
    layout: "tall",
    accent: "var(--persimmon)",
  },
  {
    title: "Cut, Arrange, Repeat",
    category: "Paper",
    year: "2026",
    description: "Paper shapes, loose colour studies, and the oddly satisfying moment a composition clicks.",
    image: "/manus-storage/hobby-gallery-paper_55e13bb9.jpg",
    layout: "wide",
    accent: "var(--cobalt)",
  },
  {
    title: "Thread Notes",
    category: "Fiber",
    year: "2025",
    description: "A woven sampler in warm rust and indigo, with all the happy irregularities left in.",
    image: "/manus-storage/hobby-gallery-textiles_15422bdc.jpg",
    layout: "tall",
    accent: "var(--leaf)",
  },
  {
    title: "A Desk in Bloom",
    category: "Sketches",
    year: "2026",
    description: "The worktable in its natural habitat: part sketchbook, part pigment shelf, part small chaos.",
    image: "/manus-storage/hobby-gallery-hero_0bbd4ed1.jpg",
    layout: "feature",
    accent: "var(--tomato)",
  },
];

function Wordmark() {
  return (
    <a className="wordmark" href="#top" aria-label="Back to top">
      <img src="/manus-storage/hobby-gallery-logo_0a4095d0.png" alt="" />
      <span>made,<br />mostly</span>
    </a>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredItems = useMemo(
    () => galleryItems.filter((item) => activeCategory === "All" || item.category === activeCategory),
    [activeCategory],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="site-shell" id="top">
      <div className="top-rule" />
      <header className="site-header">
        <Wordmark />
        <button className="mobile-menu-button" onClick={() => setIsMenuOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={isMenuOpen}>
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={isMenuOpen ? "primary-nav is-open" : "primary-nav"} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Gallery</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#notes" onClick={closeMenu}>Notes</a>
          <a href="mailto:hello@example.com" onClick={closeMenu} className="nav-contact">Say hello <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> a personal hobby gallery</p>
            <h1 id="hero-title">Made slowly.<br /><em>Shared gladly.</em></h1>
            <p className="hero-intro">Small experiments in colour, clay, paper, and thread—gathered here while they’re still delightfully in progress.</p>
            <a className="ink-link" href="#work">See what’s on the table <ArrowDown size={16} /></a>
          </div>
          <div className="hero-visual-wrap">
            <span className="hero-tape" aria-hidden="true" />
            <div className="hero-visual">
              <img src="/manus-storage/hobby-gallery-hero_0bbd4ed1.jpg" alt="A colorful handmade creative workbench with paper, paint, and found objects" />
              <div className="hero-caption"><span>1 /</span> current studio mess</div>
            </div>
            <span className="sun-doodle" aria-hidden="true">✦</span>
          </div>
          <p className="hero-side-note">No perfect process.<br />Just good materials.</p>
        </section>

        <section id="work" className="gallery-section" aria-labelledby="gallery-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-dot" /> gathered studies</p>
              <h2 id="gallery-title">A few things I’ve<br /><em>been making lately.</em></h2>
            </div>
            <p className="section-count"><span>{filteredItems.length.toString().padStart(2, "0")}</span> small projects<br />and counting</p>
          </div>

          <div className="category-row" role="tablist" aria-label="Gallery categories">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? "category-button is-active" : "category-button"}
                onClick={() => setActiveCategory(category)}
                role="tab"
                aria-selected={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="gallery-wall">
            {filteredItems.map((item, index) => (
              <article className={`gallery-card gallery-card--${item.layout} gallery-card--${index + 1}`} key={item.title}>
                <button className="gallery-image-button" onClick={() => setSelectedItem(item)} aria-label={`Open details for ${item.title}`}>
                  <span className="paper-tape" style={{ backgroundColor: item.accent }} aria-hidden="true" />
                  <img src={item.image} alt={item.title} />
                  <span className="view-piece"><MoveUpRight size={18} /> view piece</span>
                </button>
                <div className="gallery-meta">
                  <p><span className="category-swatch" style={{ backgroundColor: item.accent }} /> {item.category}</p>
                  <h3>{item.title}</h3>
                  <span>{item.year}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about-section" aria-labelledby="about-title">
          <div className="about-mark" aria-hidden="true">✽</div>
          <div className="about-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> an ongoing collection</p>
            <h2 id="about-title">I make things to<br /><em>notice more.</em></h2>
          </div>
          <div className="about-note">
            <span className="note-pin" aria-hidden="true" />
            <p>Part personal practice, part place to collect little ideas before they drift away. This is a home for colour studies, useful objects, and all the brave first tries.</p>
            <a href="mailto:hello@example.com">Send a note <ArrowUpRight size={15} /></a>
          </div>
        </section>

        <section id="notes" className="notes-section" aria-labelledby="notes-title">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> from the notebook</p>
            <h2 id="notes-title">A pocket full of<br /><em>small observations.</em></h2>
          </div>
          <a className="notes-link" href="mailto:hello@example.com?subject=Notes%20from%20the%20studio">Ask what I’m making next <ArrowUpRight size={20} /></a>
        </section>
      </main>

      <footer className="site-footer">
        <Wordmark />
        <p>© 2026. Made with found time and good light.</p>
        <a href="#top">Back to top <ArrowUpRight size={15} /></a>
      </footer>

      {selectedItem && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-labelledby="lightbox-title" onClick={() => setSelectedItem(null)}>
          <div className="lightbox-card" onClick={(event) => event.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedItem(null)} aria-label="Close detail preview"><X size={20} /></button>
            <div className="lightbox-image"><img src={selectedItem.image} alt={selectedItem.title} /></div>
            <div className="lightbox-copy">
              <p className="eyebrow"><span className="eyebrow-dot" style={{ backgroundColor: selectedItem.accent }} /> {selectedItem.category} · {selectedItem.year}</p>
              <h2 id="lightbox-title">{selectedItem.title}</h2>
              <p>{selectedItem.description}</p>
              <button className="ink-link" onClick={() => setSelectedItem(null)}>Back to the wall <X size={15} /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
