import React from 'react';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-1/2 lg:pl-4 space-y-8">
      
      
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
        />
        <button className="absolute right-2 top-2">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.53 20.47l-4.73-4.73a8 8 0 10-1.06 1.06l4.73 4.73a.75.75 0 101.06-1.06zM10 18a6 6 0 110-12 6 6 0 010 12z" />
          </svg>
        </button>
      </div>

      
      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <ul className="space-y-2">
          {['Crafts', 'Design', 'Handmade', 'Interior', 'Wood'].map((category, index) => (
            <li
              key={index}
              className="flex justify-between text-gray-600 hover:text-[#B88E2F] cursor-pointer"
            >
              <span>{category}</span>
              <span>{Math.floor(Math.random() * 10) + 1}</span>
            </li>
          ))}
        </ul>
      </div>

      
      <div>
        <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
        <ul className="space-y-4">
          {[
            {
              title: 'Going all-in with millennial design',
              date: '03 Aug 2022',
              image: '/images/post1.png',
            },
            {
              title: 'Exploring new ways of decorating',
              date: '03 Aug 2022',
              image: '/images/post2.png',
            },
            {
              title: 'Handmade pieces that took time to make',
              date: '03 Aug 2022',
              image: '/images/post3.png',
            },
            {
              title: 'Modern home in Milan',
              date: '03 Aug 2022',
              image: '/images/post4.png',
            },
            {
                title: 'Colorful office redesign ',
                date: '03 Aug 2022',
                image: '/images/post5.png'
            }
          ].map((post, index) => (
            <li key={index} className="flex space-x-4">
              <Image
                src={post.image}
                alt={post.title}
                width={60}
                height={60}
                className="rounded-md object-cover"
              />
              <div>
                <h4 className="text-sm font-semibold hover:text-[#B88E2F] cursor-pointer">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
