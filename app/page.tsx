import Link from "next/link";
import { BarChart3, Link2, ShieldCheck } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Instant short links",
    description:
      "Turn long URLs into clean, shareable links in seconds with a simple workflow.",
    icon: Link2,
  },
  {
    title: "Track performance",
    description:
      "Monitor clicks and traffic trends so you can understand what your audience engages with.",
    icon: BarChart3,
  },
  {
    title: "Reliable redirects",
    description:
      "Keep links dependable with secure routing that scales with campaigns and products.",
    icon: ShieldCheck,
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 pb-16 pt-10 sm:px-10 lg:px-16 lg:pt-16">
      <section className="space-y-6 text-center md:text-left">
        <p className="text-sm font-medium text-muted-foreground">
          Smart link management for teams and creators
        </p>
        <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:mx-0">
          Shorten, share, and track every link from one place.
        </h1>
        <p className="mx-auto max-w-2xl text-pretty text-muted-foreground md:mx-0">
          Create clean short URLs in seconds, monitor engagement, and keep your
          links reliable across campaigns, posts, and product updates.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row md:items-start">
          <Link
            href="/dashboard"
            className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
          >
            Start shortening links
          </Link>
          <Link
            href="#features"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full sm:w-auto"
            )}
          >
            Explore features
          </Link>
        </div>
      </section>

      <section id="features" className="space-y-6">
        <h2 className="text-center text-2xl font-semibold md:text-left">
          Everything you need to manage links
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-xl border bg-card p-6 text-card-foreground"
            >
              <div className="mb-4 inline-flex rounded-md bg-secondary p-2">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="cta"
        className="rounded-2xl border bg-secondary/40 p-8 text-center sm:p-10"
      >
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Ready to simplify your links?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Join now and start creating branded, trackable links that are built to
          perform.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/dashboard" className={cn(buttonVariants({ size: "lg" }))}>
            Go to dashboard
          </Link>
          <Link
            href="#features"
            className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
          >
            Learn more about features
          </Link>
        </div>
      </section>
    </main>
  );
}
