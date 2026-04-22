import Link from "next/link";
import {
  BarChart3,
  Globe,
  Link2,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "URL shortening",
    description: "Turn long links into clean, shareable short URLs in seconds.",
    icon: Link2,
  },
  {
    title: "Click analytics",
    description: "Track clicks and engagement to understand link performance.",
    icon: BarChart3,
  },
  {
    title: "Speed",
    description: "Fast redirects for a smooth experience on every device.",
    icon: Zap,
  },
  {
    title: "Security",
    description: "Built with secure, reliable infrastructure to protect your links.",
    icon: ShieldCheck,
  },
  {
    title: "Custom domains",
    description: "Use branded domains to build trust and improve recognition.",
    icon: Globe,
  },
  {
    title: "Bulk shortening",
    description: "Create many short links at once for campaigns and teams.",
    icon: Sparkles,
  },
];
const DASHBOARD_ROUTE = "/dashboard";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 pt-24 text-center md:px-8">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Shorten links smarter. Share with confidence.
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Create branded short URLs, monitor performance, and manage campaigns
          from one fast, secure dashboard.
        </p>
        <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <Link
            href={DASHBOARD_ROUTE}
            className={cn(buttonVariants({ size: "lg" }), "w-full")}
          >
            Start shortening
          </Link>
          <Link
            href={DASHBOARD_ROUTE}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full",
            )}
          >
            View dashboard
          </Link>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-4 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3 md:px-8">
        {features.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="rounded-lg border bg-card p-6 text-left shadow-sm"
          >
            <div className="mb-4 inline-flex rounded-md bg-muted p-2 text-muted-foreground">
              <Icon className="size-5" aria-hidden={true} />
            </div>
            <h2 className="text-lg font-medium">{title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20 md:px-8">
        <div className="rounded-xl border bg-card px-6 py-10 text-center sm:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Ready to simplify your links?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Get started in seconds and keep all your links organized in one
            place.
          </p>
          <Link
            href={DASHBOARD_ROUTE}
            className={cn(buttonVariants({ size: "lg" }), "mt-6")}
          >
            Go to dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
