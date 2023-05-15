import React from 'react';

function About() {
  return (
    <section class="a-s">
			<div class="about">
				<div class="img-con3">
					<div class="below">
						<img src="./img/a.jpg"/>
					</div>
					<div class="above">
						<img src="./img/c.jpg"/>
					</div>
				</div>
				<div class="text-con3">
					<h1>Take your social media marketing to the next level.</h1>
					<div class="p-list">
						<div class="list">
							<img src="./img/check.png"/>
							<span>Leo erat magna faugait non enim</span>
						</div>
						<div class="list">
							<img src={"./img/check.png"}/>
							<span>Leo erat magna faugait non enim</span>
						</div>
						<div class="list">
							<img src="./img/check.png"/>
							<span>Leo erat magna faugait non enim</span>
						</div>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet.</p>
					<a href="#" class="about-btn">ABOUT US</a>
				</div>
			</div>
		</section>
  );
}

export default About;