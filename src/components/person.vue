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


                                <form id="contact-form" class="row">
                                        
										<div class="span2">
                                                <label for="file"> Picture<span>*</span> </label>
                                        </div>
                                        <div class="span6">
                                                <input type="file" id="file" name="file"/>
                                        </div>
                                        <div class="span2">
                                                <label for="name"> Name <span>*</span> </label>
                                        </div>
                                        <div class="span6">
                                                <input type="text" v-model="user.username" name="name" id="name" class="required input-xlarge" value="">
                                        </div>
                                        
                                        <div class="span2">
                                                <label for="password">Password <span>*</span></label>
                                        </div>
                                        <div class="span6">
                                                <input type="text" v-model="user.password" name="password" id="password" class="required input-xlarge" value="">
                                        </div>

                                        <div class="span2">
                                                <label for="email"> Email <span>*</span></label>
                                        </div>
                                        <div class="span6">
                                                <input type="text" v-model="user.email" name="email" id="email" class="required input-xlarge" value="">
                                        </div>

                                   		<div class="span2">
                                                <label for="motto">My Motto <span>*</span> </label>
                                        </div>
                                        <div class="span6">
                                                <textarea v-model="user.motto" name="motto" id="motto" class="required span6" rows="6"></textarea>
                                        </div>

                                        <div class="span6 offset2 bm30">
                                        		<button  @click="update" class="btn btn-inverse">Submit</button>
                                        </div>
                                        
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
		    	uid:'1',
		      	user: {
		      		id:'',
					username: '',
					password: '',
					email: '',
					motto:''
				}
	    	}
	  	},
	  	created:function(){
			this.toUpdate();
		},
  		methods:{
  			toUpdate:function(){
  				this.$http.get("http://localhost:8081/selectEmpById",
  					{params:{id:this.uid}}
  				).then(
					function(ret){
						this.user=ret.body;
					},
					function(error){
						alert("执行失败"+error);
				})
  			},
	  	update:function(){
	  		var formdata = new FormData();
	  		formdata.append("file",document.querySelector("input[name=file]").files[0]);
	  		formdata.append("username",document.getElementById("name").value);
	  		formdata.append("password",document.getElementById("password").value);
	  		formdata.append("email",document.getElementById("email").value);
	  		formdata.append("motto",document.getElementById("motto").value);
	  		var config = {
	  			headers:{
	  				"Content-type":"multipart/form-data"
	  			}
	  		};
	  		this.$http.post("http://localhost:8081/updateUser",formdata,config).then(
	  			function(result){
	  				alert("success");
	  				this.$router.go(0);
	  			},function(error) {
					console.log(error);
				}
	  		)
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
