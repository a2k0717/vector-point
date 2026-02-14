import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Vector Point",
  description: "Privacy policy and SMS terms for Vector Point LLC.",
};

export default function PrivacyPage() {
  return (
    <>
      <nav className="border-b border-border px-6 py-4">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-text"
          >
            Vector Point
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-text-secondary mb-12">
          Last updated: February 14, 2026
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">SMS Terms &amp; Privacy</h2>
          <p className="text-text-secondary leading-relaxed">
            By providing your phone number, you agree to receive text messages
            from Vector Point LLC for identity verification purposes. Message and
            data rates may apply. Message frequency varies. No mobile information
            will be shared with third parties/affiliates for
            marketing/promotional purposes. All other categories exclude text
            messaging originator opt-in data and consent; this information will
            not be shared with any third parties.
          </p>
        </section>

        <footer className="border-t border-border pt-8 text-sm text-text-secondary">
          <p>
            &copy; {new Date().getFullYear()} Vector Point LLC &middot;{" "}
            <Link href="/" className="hover:text-text transition-colors">
              Home
            </Link>
          </p>
        </footer>
      </main>
    </>
  );
}
