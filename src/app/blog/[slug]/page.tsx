import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { POSTS, getPost } from "@/lib/posts";
import { getService } from "@/lib/services";
import { asset } from "@/lib/asset";
import ConsultCard from "@/components/ConsultCard";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Skyline HVAC Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
      type: "article",
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = post.relatedServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const others = POSTS.filter((p) => p.slug !== post.slug);

  return (
    <>
      <main className="bg-night min-h-screen">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <p className="hud-label mb-4 opacity-60">
            <a href="/" className="hover:text-ice">Home</a> ·{" "}
            <a href="/blog" className="hover:text-ice">Blog</a>
          </p>

          <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
            {/* article */}
            <article>
              <p className="hud-label text-ice">{post.dateLabel} · Skyline HVAC crew</p>
              <h1 className="font-[family-name:var(--font-space-grotesk)] mt-4 text-3xl leading-tight font-medium tracking-tight text-frost md:text-[2.6rem]">
                {post.title}
              </h1>

              <div className="border-frost/10 mt-8 overflow-hidden rounded-2xl border">
                <img
                  src={asset(post.image)}
                  alt={post.imageAlt}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>

              <p className="text-frost/90 mt-8 text-lg leading-relaxed">
                {post.intro}
              </p>

              {post.sections.map((s, i) => (
                <section key={i} className="mt-10">
                  {s.h && (
                    <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-medium text-frost">
                      {s.h}
                    </h2>
                  )}
                  {s.p.map((t) => (
                    <p key={t.slice(0, 24)} className="text-steel mt-4 leading-relaxed">
                      {t}
                    </p>
                  ))}
                </section>
              ))}

              {/* related services */}
              <div className="border-frost/10 mt-12 border-t pt-8">
                <p className="hud-label text-ice mb-4">Related services</p>
                <div className="flex flex-wrap gap-2.5">
                  {related.map((s) => (
                    <a
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="glass hover:border-ice/50 hover:text-ice rounded-full px-4 py-2 text-sm text-frost/85 transition-colors"
                    >
                      {s.title}
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl px-7 py-6 sm:flex-row sm:items-center">
                <p className="font-[family-name:var(--font-space-grotesk)] text-lg text-frost">
                  AC trouble right now? We answer 24/7.
                </p>
                <a
                  href="tel:+17868078125"
                  className="glow-cta from-glacier to-ice text-night shrink-0 rounded-full bg-gradient-to-r px-6 py-3 font-[family-name:var(--font-plex-mono)] text-sm font-semibold tracking-[0.1em]"
                >
                  786 · 807 · 8125
                </a>
              </div>
            </article>

            {/* sidebar — form + more posts */}
            <aside className="lg:sticky lg:top-24">
              <ConsultCard
                title="Free consultation — ask the crew."
                subtitle="Tell us what's going on. A certified tech calls back fast."
              />
              <div className="mt-8">
                <p className="hud-label text-ice mb-4">More from the cold log</p>
                <div className="space-y-3">
                  {others.map((p) => (
                    <a
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="glass hover:border-ice/50 block rounded-xl px-5 py-4 transition-colors"
                    >
                      <p className="text-frost/90 text-[15px] leading-snug font-medium">
                        {p.title}
                      </p>
                      <p className="hud-label mt-2 opacity-50">{p.dateLabel}</p>
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
