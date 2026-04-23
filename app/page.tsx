import Link from "next/link";
import { BarChart3, Link2, ShieldCheck } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Branded short links",
    description:
      "Create clean, memorable links that are easy to share across social posts, emails, and campaigns.",
    icon: Link2,
  },
  {
    title: "Reliable redirects",
    description:
      "Fast redirects and stable URLs help your audience land exactly where they need to go.",
    icon: ShieldCheck,
  },
  {
    title: "Actionable insights",
    description:
      "Track clicks and understand which links perform best with simple analytics in one dashboard.",
    icon: BarChart3,
  },
];

const productName = "LinkPilot";

export default function Home() {
  return (
    <main id="top" className="flex flex-1 items-center justify-center px-6 py-12 sm:px-8">
      <div className="w-full max-w-6xl space-y-14">
        <section className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-sm font-medium text-muted-foreground">{productName}</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Shorten, share, and track every link with confidence
          </h1>
          <p className="text-lg text-muted-foreground">
            Create powerful short URLs for your product, campaigns, and content
            in seconds.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/dashboard"
              className={cn(buttonVariants({ size: "lg" }), "px-6")}
            >
              Get started
            </Link>
            <Link
              href="#features"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "px-6"
              )}
            >
              See features
            </Link>
          </div>
        </section>

        <section id="features" className="grid gap-4 md:grid-cols-3">
          <h2 className="sr-only">Link shortener features</h2>
          {features.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-lg border bg-card p-6 text-card-foreground"
            >
              <Icon className="size-5 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-medium">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-lg border bg-muted/40 px-6 py-10 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Ready to manage your links in one place?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Sign up in seconds and start shortening links for your next launch.
          </p>
          <div className="mt-6">
            <Link href="/dashboard" className={cn(buttonVariants(), "px-6")}>
              Start now
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
