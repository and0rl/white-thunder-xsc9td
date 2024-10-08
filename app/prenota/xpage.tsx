export default function Prenotazioni() {
  return (
    <main className="container">
      <section id="preview">
        <h2>Preview</h2>
        <p>
          Sed ultricies plus dolor non ante vulputate hendrerit. Vivamus sit
          amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.
        </p>
        <form>
          <div className="grid">
            <input
              type="text"
              name="firstname"
              placeholder="First name"
              aria-label="First name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              aria-label="Email address"
              required
            />
            <button type="submit">Subscribe</button>
          </div>
          <fieldset>
            <label htmlFor="terms">
              <input type="checkbox" role="switch" id="terms" name="terms" />I
              agree to the
              <a href="#" /* onClick="event.preventDefault()" */>
                Privacy Policy
              </a>
            </label>
          </fieldset>
        </form>
      </section>
    </main>
  );
}
