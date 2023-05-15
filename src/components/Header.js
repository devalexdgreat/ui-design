import React from 'react';

function Header() {
  return (
    <header>
			<nav class="navbar">
				<a href="#" class="nav-branding">Marft.</a>

				<ul class="nav-menu">
					<li class="nav-item">
						<a href="#" class="nav-link">Home</a>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link">About us</a>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link">Blog</a>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link">Services</a>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link">Contact</a>
					</li>
				</ul>

				<div class="hamburger">
					<span class="bar"></span>
					<span class="bar"></span>
					<span class="bar"></span>
				</div>
			</nav>
		</header>
  );
}

export default Header;