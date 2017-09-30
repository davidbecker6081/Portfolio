import React, { Component } from 'react';
import './Blog.css';
import BlogPost from './BlogPost/BlogPost'
import { retrieveBlogPosts } from '../HelperData/helperBlogPosts';
// import { Link } from 'react-router-dom';

class Blog extends Component {
	renderPosts() {
		const blogPosts = retrieveBlogPosts();
		return blogPosts.map((post, i) => <BlogPost key={i} {...post} />);
	}
	render() {
		return <section className="blog-wrapper">{this.renderPosts()}</section>;
	}
}

export default Blog;
