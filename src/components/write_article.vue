<template>
	<!-- Start of Page Container -->
    <div class="page-container" style="width: 60%;margin: auto;">
                
        <div class="row">
        	
        	<!-- start of page content -->
            <div class="span9 page-content" >

                    <article class="type-page hentry clearfix">
                            <h1 class="post-title">
                                    <a href="#">写文章</a>
                            </h1>
                            <hr>
                    </article>


                    <form class="form-horizontal" role="form">
                    	
						<div style="margin-top: 20px;">
			        		<font size="4">标题：</font>
			        		<input type="text" name="reason" id="" value="">
			            </div>
			            
			            <div style="margin-top: 20px;">
			            	<font size="4">类别：</font>
		            		<select>
		            			<option value="java">java</option>
		            			<option value="css">css</option>
		            			<option value="js">js</option>
		            		</select>
			            </div>
			            
		               	<div style="margin-top: 20px;">
							<div class="form-group">
								<div class="col-sm-7">
									<!--<textarea class=" form-control" rows="15"></textarea>-->
									<div>
									    <script id="editor" type="text/plain" style="width:900px;height:500px;"></script>
									</div>
								</div>
								
							</div>
						</div>
							
						<div class="span10 offset2 bm30" style="margin-top: 20px;">
		                    <input type="submit" name="submit" value="提交" class="btn btn-inverse">
		                </div>
					</form>
				
				
            </div>
            <!-- end of page content -->
            
		</div>	
	</div>
</template>

<script>
export default {
  name: 'write_article',
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
