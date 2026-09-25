import type { Metadata } from "next";
import { POSTS } from "@/lib/posts";
import { asset } from "@/lib/asset";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Skyline HVAC · AC Tips for Miami, Broward & Palm Beach",
  description:
    "AC repair guides, installation know-how, and honest answers for South Florida homes and businesses, from the Skyline HVAC crew.",
};

export default function BlogPage() {
  return (
    <>
      <main className="bg-night min-h-[70svh]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="hud-label text-ice mb-4">The cold log</p>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-medium tracking-tight text-frost md:text-5xl">
            Cooling know-how,
            <br />
            straight from the crew.
          </h1>
          <p className="text-steel mt-5 max-w-lg leading-relaxed">
            AC repair guides, installation know-how, and honest answers for
            South Florida homes and businesses.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border-frost/10 hover:border-ice/40 flex flex-col overflow-hidden rounded-2xl border transition-colors duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={asset(post.image)}
                    alt={post.imageAlt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
                </div>
                <div className="bg-abyss/40 flex flex-1 flex-col p-6">
                  <p className="hud-label mb-3 opacity-50">{post.dateLabel}</p>
                  <h2 className="font-[family-name:var(--font-space-grotesk)] text-lg leading-snug font-medium text-frost">
                    {post.title}
                  </h2>
                  <p className="text-steel mt-2.5 flex-1 text-sm leading-relaxed">
                    {post.description}
                  </p>
                  <p className="text-ice mt-4 text-sm font-medium">
                    Read the article{" "}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
