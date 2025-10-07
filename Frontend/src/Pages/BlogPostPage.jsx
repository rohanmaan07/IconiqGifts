import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { dummyPosts } from '../Data/BlogPost'; 

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = dummyPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Post not found!</h1>
        <Link to="/blog" className="text-indigo-600 hover:underline mt-4 inline-block">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-xl md:text-xl font-extrabold text-gray-900 mt-4">{post.title}</h1>
            <div className="flex items-center justify-center mt-8">
              <img className="w-12 h-12 rounded-full mr-4" src={post.authorImageUrl} alt={post.authorName} />
              <div>
                <p className="font-semibold text-gray-800">{post.authorName}</p>
                <p className="text-sm text-gray-500">{post.date} &middot; {post.readingTime}</p>
              </div>
            </div>
          </div>

        
          <img className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg mb-12" src={post.imageUrl} alt={post.title} />
          <article 
            className="prose prose-lg lg:prose-xl max-w-none mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;