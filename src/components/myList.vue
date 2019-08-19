<template>

	<div>
		
		<PersonalHeader></PersonalHeader>
		
		<!-- Start of Page Container -->
		<div class="page-container">
			<div class="container">
				<div class="row">

					<!-- start of page content -->
					<div class="span8 page-content">

						<article class="type-page hentry clearfix">

							<ul class="tabs-nav">
								<li class="active" style="">
									<a href="#">文章列表</a>
								</li>

							</ul>

							<div class="tabs-container">
								<div class="tab-content">
									<section class="widget">

										<ul class="articles">
											<li class="article-entry video">
												<h4><router-link to="/myArticles">文章标题&nbsp;&nbsp;&nbsp;(写作日期)</router-link></h4>
											</li>
											<li class="article-entry video">
												<h4><a href="myArticales.html">文章标题&nbsp;&nbsp;&nbsp;(写作日期)</a></h4>
											</li>
											<li class="article-entry video">
												<h4><a href="myArticales.html">文章标题&nbsp;&nbsp;&nbsp;(写作日期)</a></h4>
											</li>
										</ul>
									</section>
								</div>
							</div>

						</article>
					</div>
					<!-- end of page content -->
					
					<personRight></personRight>
					
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import PersonalHeader from './PersonalHeader' 
	import personRight from './personRight'
	
	export default {
		name: 'myList',
		data() {
			return {
				msg: 'Welcome'
			}
		},
		components:{
		  	PersonalHeader,
		  	personRight
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>