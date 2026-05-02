"use client";

import { useEffect, useState, type ReactNode } from "react";

type IconName =
  | "activity"
  | "alert"
  | "app-window"
  | "check"
  | "eye"
  | "eye-off"
  | "lock"
  | "mail"
  | "phone"
  | "workflow"
  | "x";

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const common = {
    className: `pakiadmin-icon ${className}`,
    viewBox: "0 0 24 24",
    "aria-hidden": true
  };

  if (name === "activity") {
    return (
      <svg {...common}>
        <path d="M3 12h4l2-7 4 14 2-7h6" />
      </svg>
    );
  }

  if (name === "alert") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    );
  }

  if (name === "app-window") {
    return (
      <svg {...common}>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M4 9h16" />
        <path d="M8 5v4" />
        <path d="M16 5v4" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    );
  }

  if (name === "eye") {
    return (
      <svg {...common}>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    );
  }

  if (name === "eye-off") {
    return (
      <svg {...common}>
        <path d="m3 3 18 18" />
        <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
        <path d="M9.9 5.3A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a17.6 17.6 0 0 1-2.7 3.7" />
        <path d="M6.6 6.6C3.7 8.3 2 12 2 12s3.5 7 10 7a10.5 10.5 0 0 0 4.1-.8" />
      </svg>
    );
  }

  if (name === "lock") {
    return (
      <svg {...common}>
        <rect x="4" y="10" width="16" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg {...common}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.2 19.2 0 0 1-5.9-5.9A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
      </svg>
    );
  }

  if (name === "workflow") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="6" height="6" rx="1.5" />
        <rect x="14" y="14" width="6" height="6" rx="1.5" />
        <path d="M10 7h3a4 4 0 0 1 4 4v3" />
        <path d="M7 10v3a4 4 0 0 0 4 4h3" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function PakiAdminLogo() {
  return (
    <div className="pakiadmin-make-logo" aria-label="PakiADMIN">
      <svg viewBox="0 0 128 128" aria-hidden="true">
        <path d="M64 6a51 51 0 0 0-38.4 84.6A36.2 36.2 0 0 1 52 63.4 26 26 0 1 1 90 42.8a27 27 0 0 1-1.5 8.8 38 38 0 0 1 23.8 1.9A51 51 0 0 0 64 6Z" />
        <path d="M31 94c8.5 11.7 20.5 17.6 36 17.6 10.5 0 20.1-3 28.4-9.2A40.3 40.3 0 0 1 73.7 67a21.4 21.4 0 0 1-17.8 0C41.2 70 32.9 79.1 31 94Z" />
        <circle cx="64" cy="42" r="16" />
        <path d="M95 61h14l3 12 11 6-7 12 7 12-11 6-3 12H95l-7-9-13 2-5-13 8-10-8-10 5-13 13 2 7-9Z" />
        <circle cx="96.5" cy="91" r="15" className="pakiadmin-logo-cutout" />
      </svg>
      <strong>
        Paki<span>ADMIN</span>
      </strong>
    </div>
  );
}

function AdminFeatureCard({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="pakiadmin-make-feature-card">
      <div className="pakiadmin-make-feature-icon">{icon}</div>
      <div className="pakiadmin-make-feature-text">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default function PakiAdminLogin() {
  const [identifier, setIdentifier] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);

  useEffect(() => {
    setIsEmail(/[a-zA-Z@]/.test(identifier));
  }, [identifier]);

  const handleIdentifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!/[a-zA-Z@]/.test(value)) {
      const digits = value.replace(/\D/g, "");
      if (digits.length <= 10) {
        setIdentifier(digits);
      }
    } else {
      setIdentifier(value);
    }

    if (error) {
      setError("");
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(identifier)) {
        setError("Invalid administrative email format.");
        return;
      }
    } else if (identifier.length !== 10) {
      setError("Invalid mobile number. 10 digits required.");
      return;
    }

    const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    if (!passRegex.test(password)) {
      setError("Security Alert: Invalid credentials or insufficient key complexity.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      window.location.href = "/pakiship/dashboard";
    }, 500);
  };

  const handleResetRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setResetSent(true);
      setIsLoading(false);
    }, 900);
  };

  return (
    <div className="pakiadmin-make-page">
      <nav className="pakiadmin-make-nav" aria-label="PakiADMIN header" />

      <main className="pakiadmin-make-main">
        <div className="pakiadmin-make-glow" />
        <div className="pakiadmin-make-grid">
          <section className="pakiadmin-make-context" aria-label="PakiADMIN overview">
            <div className="pakiadmin-make-brand">
              <PakiAdminLogo />
              <p>Integrated Management for PakiShip and PakiPark.</p>
            </div>

            <div className="pakiadmin-make-features">
              <AdminFeatureCard
                icon={<Icon name="app-window" />}
                title="Centralized Management"
                desc="Monitor and manage both Pakiship and Pakipark operations in one centralized admin platform."
              />
              <AdminFeatureCard
                icon={<Icon name="activity" />}
                title="Real-Time Visibility"
                desc="Track real-time updates, statuses, and activity for faster and more accurate decision-making."
              />
              <AdminFeatureCard
                icon={<Icon name="workflow" />}
                title="Improved Efficiency"
                desc="Improve workflow efficiency with easier oversight, better organization, and quicker response to issues."
              />
            </div>
          </section>

          <section className="pakiadmin-make-card-wrap" aria-label="Admin login form">
            <div className="pakiadmin-make-card">
              <div className="pakiadmin-make-heading">
                <div className="pakiadmin-make-heading-row">
                  <div className="pakiadmin-make-heading-icon">
                    <Icon name="lock" />
                  </div>
                  <h2>Admin Login</h2>
                </div>
                <p>Identity validation required for console decryption.</p>
              </div>

              <form onSubmit={handleLogin} className="pakiadmin-make-form">
                {error && (
                  <div className="pakiadmin-make-error">
                    <Icon name="alert" />
                    <p>{error}</p>
                  </div>
                )}

                <div className="pakiadmin-make-field">
                  <label htmlFor="admin-identifier">Email or Mobile Number</label>
                  <div className="pakiadmin-make-identifier">
                    {!isEmail && <div className="pakiadmin-make-code">+63</div>}
                    <div className="pakiadmin-make-input-shell">
                      <Icon name={isEmail ? "mail" : "phone"} />
                      <input
                        id="admin-identifier"
                        type="text"
                        value={identifier}
                        onChange={handleIdentifierChange}
                        placeholder={isEmail ? "admin@pakiadmin.ph" : "912 345 6789"}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="pakiadmin-make-field">
                  <label htmlFor="admin-security-key">Security Key</label>
                  <div className="pakiadmin-make-input-shell">
                    <Icon name="lock" />
                    <input
                      id="admin-security-key"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (error) {
                          setError("");
                        }
                      }}
                      placeholder="••••••••••••"
                      required
                    />
                    <button
                      type="button"
                      className="pakiadmin-make-eye"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide security key" : "Show security key"}
                    >
                      <Icon name={showPassword ? "eye-off" : "eye"} />
                    </button>
                  </div>
                </div>

                <div className="pakiadmin-make-actions">
                  <button
                    type="button"
                    onClick={() => setKeepLoggedIn(!keepLoggedIn)}
                    className="pakiadmin-make-remember"
                  >
                    <span className={keepLoggedIn ? "is-checked" : ""}>
                      {keepLoggedIn && <Icon name="check" />}
                    </span>
                    Remember Me
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setShowForgotModal(true);
                      setResetSent(false);
                    }}
                    className="pakiadmin-make-link-button"
                  >
                    Forgot Password?
                  </button>
                </div>

                <button type="submit" disabled={isLoading} className="pakiadmin-make-submit">
                  {isLoading ? "Authenticating..." : "Initialize Dashboard"}
                </button>
              </form>

              <div className="pakiadmin-make-footer">
                <span>Don&apos;t have an account?</span>
                <button type="button" onClick={() => (window.location.href = "/pakiadmin/signup")}>
                  Create account
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {showForgotModal && (
        <div className="pakiadmin-make-modal" role="dialog" aria-modal="true" aria-label="Key recovery">
          <button
            type="button"
            className="pakiadmin-make-backdrop"
            aria-label="Close recovery modal"
            onClick={() => setShowForgotModal(false)}
          />

          <div className="pakiadmin-make-modal-card">
            <button type="button" onClick={() => setShowForgotModal(false)} className="pakiadmin-make-close">
              <Icon name="x" />
            </button>

            {!resetSent ? (
              <div className="pakiadmin-make-recovery">
                <div>
                  <h3>Key Recovery</h3>
                  <p>Enter your administrative email to receive a decryption link for your credentials.</p>
                </div>

                <form onSubmit={handleResetRequest} className="pakiadmin-make-recovery-form">
                  <div className="pakiadmin-make-field">
                    <label htmlFor="recovery-email">Recovery Email</label>
                    <div className="pakiadmin-make-input-shell">
                      <Icon name="mail" />
                      <input
                        id="recovery-email"
                        type="email"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        placeholder="admin@pakiadmin.ph"
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" disabled={isLoading} className="pakiadmin-make-submit">
                    {isLoading ? "Processing..." : "Request Access Reset"}
                  </button>
                </form>
              </div>
            ) : (
              <div className="pakiadmin-make-sent">
                <div className="pakiadmin-make-success">
                  <Icon name="check" />
                </div>
                <h3>Link Initialized</h3>
                <p>
                  If <strong>{resetEmail}</strong> is authorized, you will receive instructions shortly.
                </p>
                <button type="button" onClick={() => setShowForgotModal(false)}>
                  Return to Console
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
