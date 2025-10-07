import React from 'react';
import { Link } from 'react-router-dom';
import { dummyPosts } from '../Data/BlogPost';

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-5">
         <h1 className="text-xl md:text-4xl font-bold text-gray-800  text-center">Our Blogs</h1>
         <span className="block w-24 h-1 bg-teal-500 mx-auto mt-3 rounded-full mb-5"></span>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {dummyPosts.map((post) => (
          <div key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group">
            <Link to={`/blog/${post.slug}`} className="block">
              <img className="h-56 w-full object-cover group-hover:opacity-80 transition duration-300" src={post.imageUrl} alt={post.title} />
            </Link>
            <div className="p-6 flex-grow">
              <span className="text-sm font-semibold text-teal-600 uppercase">{post.category}</span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-teal-600 transition duration-300">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
            </div>
            <div className="p-6 bg-gray-50 flex items-center mt-auto">
              <img className="w-10 h-10 rounded-full mr-4" src={post.authorImageUrl} alt={post.authorName} />
              <div>
                <p className="font-semibold text-gray-800 text-sm">{post.authorName}</p>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
