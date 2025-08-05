import { PricingTable } from "@clerk/nextjs";

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                Pricing Plans
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Choose Your Plan
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Select the perfect plan for your learning needs. Start free and
                upgrade as you grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border bg-card p-6 md:p-8 shadow-sm">
              <PricingTable />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                What's Included
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                All plans include our core features to help you learn more
                effectively.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-4xl items-start gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Unlimited Notes</h3>
              <p className="text-sm text-muted-foreground">
                Create and edit as many notes as you need for your learning
                journey.
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Multiple Formats</h3>
              <p className="text-sm text-muted-foreground">
                Support for PDFs, videos, audio files, and more content types.
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Smart Organization</h3>
              <p className="text-sm text-muted-foreground">
                Keep your notes organized with tags, folders, and search
                functionality.
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Export Options</h3>
              <p className="text-sm text-muted-foreground">
                Export your notes in various formats for sharing and
                collaboration.
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Cloud Sync</h3>
              <p className="text-sm text-muted-foreground">
                Access your notes from anywhere with automatic cloud
                synchronization.
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Priority Support</h3>
              <p className="text-sm text-muted-foreground">
                Get help when you need it with our dedicated support team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
