<template>
	
		<div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image:  url(../../static/images/01.jpg);">    
                   
	            <div class="login" style="height: 310px;">
	            	<div style="border-bottom: gainsboro 1px solid; padding-left: 40px;"> 
	            		<font size="6" face="楷体" style="line-height: 70px;">用户登录</font>
	            	</div>
	                
	                <div >
	                   	<form  method="post">
	                   		
                            <div style=" margin-top: 40px; margin-left: 40px;">
                                <font size="5" face="楷体">用户：</font>
                                <input type="text" name="name" id="name" value="">
                            </div>
                            
                            <div style=" margin-top: 20px; margin-left: 40px;">
                            	<font size="5" face="楷体">密码：</font>
                                <input type="text" name="password" id="password" value="">
                            </div>

                            <div align="center" style=" margin-top: 20px;">
                                <input type="submit"  value="登录" class="btn btn-inverse" style="font-size: 23px; font-family: 楷体; margin-right: 10px;">
                                
								<router-link to="/register" class="btn btn-inverse" style="font-size: 23px; font-family: 楷体; margin-right: 10px;">注册</router-link>
                            </div>
	
	                    </form>
	            	</div>
	                   	
	        	</div>
        	</div>
 
</template>

<script>
export default {
  name: 'login',
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
