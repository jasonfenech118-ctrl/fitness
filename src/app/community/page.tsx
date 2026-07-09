import Link from "next/link";
import { forumCategories, forumPosts, transformations } from "@/data/community";

export const metadata = {
  title: "Community | IronForge Fitness",
  description: "Join the IronForge community. Forums, progress logs, and transformation stories.",
};

export default function CommunityPage() {
  return (
    <>
      <section className="bg-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Community</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Connect with millions of fitness enthusiasts. Share your journey,
            get advice, and find motivation in our thriving community.
          </p>
          <div className="flex gap-4 mt-6">
            <div className="bg-white/10 rounded-lg px-4 py-2 text-center">
              <div className="text-2xl font-black">2.1M</div>
              <div className="text-xs text-gray-400">Members</div>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2 text-center">
              <div className="text-2xl font-black">10.7K</div>
              <div className="text-xs text-gray-400">Active Today</div>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2 text-center">
              <div className="text-2xl font-black">156K</div>
              <div className="text-xs text-gray-400">Discussions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Forum Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-black mb-6">Forum Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {forumCategories.map((cat) => (
              <div
                key={cat.name}
                className="bg-surface border border-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer"
              >
                <h3 className="font-bold text-lg mb-1">{cat.name}</h3>
                <p className="text-sm text-muted mb-3">{cat.description}</p>
                <div className="text-xs text-primary font-bold">
                  {cat.count.toLocaleString()} discussions
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black">Trending Discussions</h2>
            <button className="text-primary font-bold text-sm hover:underline">
              View All
            </button>
          </div>
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            <div className="divide-y divide-border">
              {forumPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-5 hover:bg-surface transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold text-sm">
                        {post.author[0]}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {post.pinned && (
                          <span className="text-xs bg-primary text-white px-2 py-0.5 rounded font-bold">
                            PINNED
                          </span>
                        )}
                        <span className="text-xs bg-surface-dark px-2 py-0.5 rounded font-medium">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg hover:text-primary transition-colors line-clamp-1">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted mt-1 line-clamp-2">
                        {post.content}
                      </p>
                      <div className="flex items-center gap-4 mt-3 text-xs text-muted">
                        <span>
                          by{" "}
                          <span className="font-semibold text-foreground">
                            {post.author}
                          </span>
                        </span>
                        <span className="text-primary font-medium">
                          {post.authorLevel}
                        </span>
                        <span>{post.replies} replies</span>
                        <span>{post.views.toLocaleString()} views</span>
                        <span>{post.lastActivity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Stories */}
      <section id="stories" className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-black mb-6">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {transformations.map((story) => (
              <div
                key={story.id}
                className="bg-surface border border-border rounded-xl overflow-hidden"
              >
                <div className="grid grid-cols-2">
                  <div className="bg-gray-300 dark:bg-gray-700 p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-black text-gray-500">
                        BEFORE
                      </div>
                      <div className="text-xl font-bold text-gray-500 mt-1">
                        {story.beforeWeight}
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-black text-primary">
                        AFTER
                      </div>
                      <div className="text-xl font-bold mt-1">
                        {story.afterWeight}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">
                        {story.name[0]}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold">{story.name}</div>
                      <div className="text-sm text-muted">
                        Age {story.age} | {story.duration}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-muted italic mb-3">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                  <p className="text-sm text-muted">{story.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Join the Community
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Share your progress, get advice from experienced lifters, and find
            your workout partners. It&apos;s free to join.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors"
            >
              Create Account
            </Link>
            <Link
              href="#"
              className="bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-3 rounded-lg font-bold transition-colors"
            >
              Browse Forums
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
