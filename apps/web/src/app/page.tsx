import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Mountain,
  FileText,
  Video,
  Headphones,
  Edit,
  Share,
} from "lucide-react";
import Header from "@/components/header";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />

      <main className="flex-1">
        <section className="w-full py-8 md:py-16 lg:py-20 xl:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Turn anything into an editable note.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Transform PDFs, videos, and audio into notes you can edit
                    and share.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/dashboard"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <Image
                src="https://i.pinimg.com/736x/2f/14/2b/2f142bbc79dbb729fb981d4924aff958.jpg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square hover:blur-sm transition-all duration-300 filter contrast-150 brightness-110 dark:invert"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unlock Your Learning Potential
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Turbo Learn empowers you to transform any content into
                  actionable, editable notes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold">PDF to Notes</h3>
                </div>
                <p className="text-muted-foreground">
                  Convert your PDFs into editable text, ready for annotation and
                  summarization.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <Video className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold">Video Transcription</h3>
                </div>
                <p className="text-muted-foreground">
                  Automatically transcribe video content and turn spoken words
                  into written notes.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <Headphones className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold">Audio to Text</h3>
                </div>
                <p className="text-muted-foreground">
                  Upload audio files and get accurate transcriptions to easily
                  extract key information.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <Edit className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold">Editable Notes</h3>
                </div>
                <p className="text-muted-foreground">
                  Customize and refine your notes with a powerful, intuitive
                  editing interface.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <Share className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold">Seamless Sharing</h3>
                </div>
                <p className="text-muted-foreground">
                  Share your organized notes with classmates, colleagues, or
                  friends effortlessly.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <Mountain className="h-6 w-6 text-primary" />{" "}
                  {/* Using Mountain as a placeholder icon */}
                  <h3 className="text-xl font-bold">Cloud Sync</h3>
                </div>
                <p className="text-muted-foreground">
                  Access your notes from anywhere, on any device, with automatic
                  cloud synchronization.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to transform your learning?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join Turbo Learn today and start converting your content into
                powerful, editable notes.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1"
                />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                Sign up to get started. By signing up, you agree to our{" "}
                <Link href="/terms" className="underline underline-offset-2">
                  Terms &amp; Conditions
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Turbo Learn. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
