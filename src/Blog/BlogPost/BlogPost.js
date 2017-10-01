import React from 'react';
import './BlogPost.css';
import FadeIn from 'react-fade-in';

const BlogPost = ({ title, date, bodyContent }) => {
	return (
		<FadeIn>
			<article className="blog-post">
				<h3>{title}</h3>
				<p>{date}</p>
				<p>{bodyContent}</p>
			</article>
		</FadeIn>
	);
};

export default BlogPost;
