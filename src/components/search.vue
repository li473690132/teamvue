<template>

		<!--搜索开始-->
		<div class="search-area-wrapper">
		    <div class="search-area container">
		    				<router-link to="/hot_questions"><h3 class="search-header">Have a Question?</h3></router-link>
		            <p class="search-tag-line">If you have any question you can ask below or enter what you are looking for!</p>
		
		            <form id="search-form" class="search-form clearfix" method="get" action="#" autocomplete="off">
		                    <input class="search-term required" type="text" id="s" name="s" placeholder="Type your search terms here" title="* Please enter a search term!" />
		                    <input class="search-btn" type="submit" value="Search" />
		                    <div id="search-error-container"></div>
		            </form>
		    </div>
		</div>
		<!--搜索结束-->
 
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
