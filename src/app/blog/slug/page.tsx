type Props = {
  params: { slug: string };
};

// This page will be dynamically generated for each blog post
// For now, it's a placeholder
export default function BlogPostPage({ params }: Props) {
  return (
    <div className="space-y-8">
      <section className="py-8 bg-white shadow-lg rounded-lg">
        <div className="container mx-auto px-6">
          <article className="prose lg:prose-xl max-w-none">
            <h1 className="text-4xl font-bold mb-6 text-[rgb(var(--primary-color))]">Blog Post Title: {params.slug.replace(/-/g, ' ')}</h1>
            <p className="text-gray-500 text-sm mb-4">Published on May 11, 2025 by CUBE Ship Assist Admin</p>
            
            {/* TODO: Fetch and display actual blog post content based on the slug */}
            <p>
              This is a placeholder for the blog post content. The actual content for the post with slug "{params.slug}" will be displayed here.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            {/* Example of an image in a blog post */}
            {/* <figure>
              <img src="/placeholder-image.jpg" alt="Descriptive alt text" className="rounded-md shadow-md" />
              <figcaption className="text-center text-sm text-gray-500 mt-2">This is an example image caption.</figcaption>
            </figure> */}
            <div className="mt-8 pt-4 border-t border-gray-200">
              <a href="/blog" className="text-[rgb(var(--primary-color))] hover:underline">&larr; Back to Blog</a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

// Optional: Function to generate static paths if you know all blog slugs at build time
// export async function generateStaticParams() {
//   // const posts = await fetch('https://.../posts').then((res) => res.json())
 
//   // return posts.map((post) => ({
//   //   slug: post.slug,
//   // }))
  
//   // For now, returning a placeholder
//   return [{ slug: 'example-post-1' }, { slug: 'another-sample-article' }]
// }

