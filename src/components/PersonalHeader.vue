<template>
	<div>

		<!-- Start of Header -->
		<div class="header-wrapper">
			<header>
				<div class="container">

					<div class="logo-container">
						<!-- Website Logo -->
						<a href="/" title="CodeBase">
							<img src="static/images/logo.png" alt="CodeBase">
						</a>
					</div>

					<!-- Start of Main Navigation -->
					<nav class="main-nav">
						<div class="menu-top-menu-container">
							<ul id="menu-top-menu" class="clearfix">
								<li class="current-menu-item">
									<router-link to="/">首页</router-link>
								</li>

								<li>
									<router-link to="/myList">我的文章</router-link>
								</li>

								
								<li>
									<a href="#">更多</a>
									<ul class="sub-menu">
										<li>
											<a href="full-width.html">Full Width</a>
										</li>
										<li>
											<a href="elements.html">Elements</a>
										</li>
										<li>
											<a href="page.html">Sample Page</a>
										</li>
									</ul>
								</li>
								<li>
									<router-link to="/person">个人中心</router-link>
								</li>

							</ul>
						</div>
					</nav>
					<!-- End of Main Navigation -->

				</div>
			</header>
		</div>
		<!-- End of Header -->

	</div>
</template>

<script>
	export default {
		name: 'PersonalHeader'

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>