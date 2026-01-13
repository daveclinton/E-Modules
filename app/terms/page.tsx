export const metadata = {
    title: "Terms of Service | E‑Design Modules",
    description: "Read E‑Design Modules terms of service and usage agreement.",
  };
  
  export default function TermsPage() {
    return (
      <section className="w-full py-24 md:py-32 bg-background text-foreground">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground">
            Welcome to E‑Design Modules! By accessing or using our website, you agree to be
            bound by the following terms and conditions. Please read them carefully
            before engaging with our services.
          </p>
  
          <div className="space-y-6 leading-relaxed text-sm text-muted-foreground">
            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing this website, you accept and agree to abide by these
                Terms of Service and all applicable laws and regulations. If you do
                not agree, you may not access or use the site.
              </p>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                2. Service Usage
              </h2>
              <p>
                Our website and services are intended for professional and
                informational purposes in the construction and renovation industry.
                Unauthorized use may result in restricted access or termination.
              </p>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                3. Intellectual Property
              </h2>
              <p>
                All content, materials, graphics, and code on this site are the
                property of E‑Design Modules and protected under international copyright
                laws. You may not reproduce or reuse site content without prior
                written permission.
              </p>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                4. Limitation of Liability
              </h2>
              <p>
                E‑Design Modules is not liable for any direct or indirect damages resulting
                from use of this website or services provided herein. All services
                are offered &quot;as is&quot; without warranties of any kind.
              </p>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                5. Legal Compliance
              </h2>
              <p>
                E‑Design Modules operates in compliance with Kenyan construction laws and data protection regulations, including county approvals, PLUPA (2019), and NCA requirements.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                6. Updates to Terms
              </h2>
              <p>
                We reserve the right to update these terms periodically without prior
                notice. Continued use of the website after updates constitutes your
                acceptance of the modified terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }