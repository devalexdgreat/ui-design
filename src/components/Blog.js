import React from 'react';

function Blog() {
  return (
    <section class="b-s">
			<div class="blog">
				<div class="title">
					<div class="sub-head">
						<h1>Read our blogs</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
					</div>
					<div class="rbtn-holder">
						<a href="#" class="btn">READ ALL BLOGS</a>
					</div>
				</div>

				<div class="flex-bx">
					<div class="b-bx">
						<div class="b-img">							
							<img src="./img/b.jpg"/>
						</div>
						<div class="b-info">
							<small>April 30, 2023</small>
							<h2>How to collaborate with companies</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
							<a href="#" class="rm-btn">READ MORE</a>
						</div>
					</div>
					<div class="b-bx">
						<div class="b-img">							
							<img src="./img/b.jpg"/>
						</div>
						<div class="b-info">
							<small>April 30, 2023</small>
							<h2>How to collaborate with companies</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
							<a href="#" class="rm-btn">READ MORE</a>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}

export default Blog;