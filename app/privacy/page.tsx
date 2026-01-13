export const metadata = {
    title: "Privacy Policy | E‑Design Modules",
    description: "Learn how E‑Design Modules collects, uses, and protects your information.",
  };
  
  export default function PrivacyPage() {
    return (
      <section className="w-full py-24 md:py-32 bg-background text-foreground">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground">
            E‑Design Modules values your privacy and is committed to protecting your personal
            information. This Privacy Policy outlines how we collect, use, and
            safeguard your data when interacting with our website and services.
          </p>
  
          <div className="space-y-6 leading-relaxed text-sm text-muted-foreground">
            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                1. Information We Collect
              </h2>
              <p>
                We may collect personal information such as your name, email address,
                and contact details when you voluntarily provide it. Additional
                non‑personal data may be collected through cookies and analytics
                tools.
              </p>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                2. How We Use Information
              </h2>
              <p>
                Your data is used to improve our services, respond to inquiries, and
                send relevant updates. We do not sell or rent personal data to third
                parties.
              </p>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                3. Data Security
              </h2>
              <p>
                E‑Design Modules implements industry‑standard measures to protect your
                information from unauthorized access, alteration, or disclosure.
                However, no electronic storage method is completely secure.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                4. Legal Compliance
              </h2>
              <p>
                E‑Design Modules operates in compliance with Kenyan construction laws and data protection regulations, including county approvals, PLUPA (2019), and NCA requirements.
              </p>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                5. Cookies Policy
              </h2>
              <p>
                Our website uses cookies to enhance user experience and gather usage
                analytics. You can adjust cookie preferences in your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                6. Contact Us
              </h2>
              <p>
                If you have questions about our privacy practices, please contact us
                at <span className="text-foreground font-medium">(awaiting confirmation)</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }