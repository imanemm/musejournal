import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ThemeToggle } from "../../components/ui/ThemeToggle";

export function StyleGuidePage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-12 p-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <h1>Style guide</h1>
        <ThemeToggle />
      </header>

      <section className="flex flex-col gap-4">
        <h2>Typography</h2>
        <h1>H1 Header 36px</h1>
        <h2>H2 Header 24px</h2>
        <h3>H3 Header 20px</h3>
        <h4>H4 Headeer 16px</h4>
        <h5>H5 Header 14px</h5>
        <p>
          Paragraph 16px{" "}
          <span className="text-text-muted">Muted secondary text.</span>
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2>Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <button className="btn-primary">Primary</button>
          <button className="btn-outline">Outline</button>
          <button className="btn-primary" disabled>
            Disabled
          </button>
          <button className="btn-ghost">Cancel</button>
          <button className="btn-ghost" disabled>
            Disabled ghost
          </button>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2>Chips</h2>
        <div className="flex flex-wrap gap-3">
          <span className="chip-neutral">Neutral</span>
          <span className="chip-strong">Strong</span>
          <span className="chip-primary">Primary</span>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2>Inputs</h2>
        <div className="flex flex-wrap gap-3">
          <label className="search">
            <span className="sr-only">Search</span>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-text-muted"
            />
            <input
              className="input-primary"
              type="text"
              placeholder="Search..."
            />
          </label>
          <label>
            <span className="sr-only">Outline</span>
            <input className="input-outline" placeholder="Enter text..." />
          </label>
          <label>
            <span className="sr-only">Filled</span>
            <input className="input-filled" placeholder="Enter text..." />
          </label>
          <label>
            <span className="sr-only">Strong</span>
            <input className="input-strong" placeholder="Enter text..." />
          </label>
          <label>
            <span className="sr-only">Disabled</span>
            <input className="input-outline" placeholder="Disabled" disabled />
          </label>
        </div>
      </section>

      <section>
        <h2>Cards</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="card flex flex-col gap-3">
            <h3>Card</h3>
            <p className="text-text-muted">Muted text inside a card.</p>
            <div className="flex gap-2">
              <span className="chip-neutral">Chill</span>
              <span className="chip-strong">Nostalgic</span>
            </div>
            <label>
              <span className="sr-only">Note</span>
              <input className="input-filled" placeholder="Write a note..." />
            </label>
            <p className="text-danger">Error message example</p>
          </article>
          <article className="card-primary flex flex-col gap-3">
            <h3>Card primary</h3>
            <div className="flex gap-2">
              <span className="chip-neutral">Happy</span>
              <span className="chip-strong">Hyped</span>
            </div>
            <label>
              <span className="sr-only">Mood</span>
              <input
                className="input-outline"
                placeholder="How are you feeling?"
              />
            </label>
          </article>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2>Brand gradient</h2>
        <div className="bg-brand-gradient rounded-card p-8">
          <p className="text-h3">Sidebar / Marketing background</p>
          <p className="text-on-gradient-muted">Muted text on the gradient</p>
        </div>
      </section>
    </main>
  );
}
