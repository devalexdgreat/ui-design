import React from 'react';

function Hero() {
  return (
    <section class="h-s">
			<div class="hero">
				<div class="text-con">
					<div class="center">
						<h1>Increase your performance on social media</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
						</p>

						<div class="btn-holder">
							<a href="#" class="get-btn">GET STARTED</a>
						</div>
					</div>
				</div>
				<div class="img-con">
					<div class="img-1">
						<img src={"./img/a.jpg"}/>
					</div>
					<div class="img-2">
						<img src={"./img/c.jpg"}/>
					</div>
				</div>
			</div>
		</section>
  );
}

export default Hero;