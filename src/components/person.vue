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
                                        <h1 class="post-title">
                                                <a href="#">MyBlog</a>
                                        </h1>
                                        <hr>
                                       
                                </article>


                                <form id="contact-form" class="row" action="http://inspirythemes.com/templates/knowledgebase-html/contact_form_handler.php" method="post">

                                        
										<div class="span2">
                                                <label for="name"> Picture<span>*</span> </label>
                                        </div>
                                        <div class="span6">
                                                <input type="file" name="name" id="name" class="required input-xlarge" value="" title="* Please provide your name">
                                        </div>
                                        <div class="span2">
                                                <label for="name"> Name <span>*</span> </label>
                                        </div>
                                        <div class="span6">
                                                <input type="text" name="name" id="name" class="required input-xlarge" value="" title="* Please provide your name">
                                        </div>
                                        
                                        <div class="span2">
                                                <label for="password">Password <span>*</span></label>
                                        </div>
                                        <div class="span6">
                                                <input type="text" name="password" id="password" class="email required input-xlarge" value="" title="* Please provide a valid email address">
                                        </div>

                                        <div class="span2">
                                                <label for="email"> Email <span>*</span></label>
                                        </div>
                                        <div class="span6">
                                                <input type="text" name="email" id="email" class="email required input-xlarge" value="" title="* Please provide a valid email address">
                                        </div>

                                   		<div class="span2">
                                                <label for="motto">My Motto <span>*</span> </label>
                                        </div>
                                        <div class="span6">
                                                <textarea name="motto" id="motto" class="required span6" rows="6" title="* Please enter your message"></textarea>
                                        </div>

                                        <div class="span6 offset2 bm30">
                                                <input type="submit" name="submit" value="Submit" class="btn btn-inverse">
                                                <img src="images/loading.gif" id="contact-loader" alt="Loading...">
                                        </div>

                                        <div class="span6 offset2 error-container"></div>
                                        <div class="span8 offset2" id="message-sent"></div>

                                </form>
                        </div>
                        <!-- end of page content -->
                        
                        <personRight></personRight>
                        
                    </div>
            </div>
    </div>
    	<!-- End of Page Container -->
		
	</div>
	
 
</template>

<script>
	import PersonalHeader from './PersonalHeader' 
	import personRight from './personRight'
	
	export default {
	  name: 'person',
	  data () {
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
