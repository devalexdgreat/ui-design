import React from 'react';

function Footer() {
  return (
    <section class="f-s">
			<div class="footer">
				<div class="f-title">
					<a  href={"#"} class="nav-branding">Marft.</a>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

					<div class="icon-holder">
						<div class="icon">
							<span>f</span>
						</div>
						<div class="icon">
							<span>f</span>
						</div>
						<div class="icon">
							<span>f</span>
						</div>
					</div>
				</div>

				<div class="news">
					<h1>Subscribe to our Newsletter</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					<div class="sub">
						<input type="email" placeholder="Enter your mail"/>
						<a href={"#"} class="sub-btn">SUBSCRIBE</a>
					</div>
				</div>

				<div class="ft-flex">
					<div>
						<span>DM us on:</span>
						<p class="email">adg@protonmail.com</p>
					</div>
					<div>
						<span>Call us on:</span>
						<p>(+234) 0703 6351 052</p>
						<p>(+234) 0803 7363 900</p>
					</div>
					<div>
						<span>Find us:</span>
						<p>54 Chime Avenue</p>
						<p>New Haven, Enugu</p>
					</div>
				</div>
			</div>
			<div class="ft-bottom">
				<div class="wrap">
					<div class="brandlink">
						<span>&copy; Marft 2021. All rights reserved.</span>
					</div>
					<div class="link">
						<span>Privacy Policy</span>
						<span>Terms & Condition</span>
					</div>
				</div>
			</div>	
		</section>
  );
}

export default Footer;