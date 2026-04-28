export default function LoginPage() {
  return (
    <main className="login-page">
      <section className="login-card">
        <h1>Login</h1>
        <p>Enter your email and password to continue.</p>

        <form className="login-form">
          <label className="field">
            <span>Email</span>
            <input type="email" name="email" placeholder="admin@example.com" />
          </label>

          <label className="field">
            <span>Password</span>
            <input type="password" name="password" placeholder="Enter your password" />
          </label>

          <button type="submit" className="primary-button">
            Sign in
          </button>
        </form>
      </section>
    </main>
  );
}
