<template>

	<div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image:  url(../../static/images/01.jpg);">

		<div class="login" style="height: 380px;">
			<div style="border-bottom: gainsboro 1px solid; padding-left: 40px;">
				<font size="6" face="楷体" style="line-height: 70px;">用户注册</font>&nbsp;&nbsp;
				<font style="color: red;">{{mess}}</font>
			</div>

			<div>
				<form method="post">

					<div style=" margin-top: 40px; margin-left: 40px;">
						<font size="5" face="楷体">用户：</font>
						<input type="text" id="username" v-model="user.username" placeholder="请输入姓名" v-on:blur="check">
					</div>

					<div style=" margin-top: 20px; margin-left: 40px;">
						<font size="5" face="楷体">密码：</font>
						<input type="text" id="Password" v-model="user.Password" placeholder="请输入密码">
					</div>
					<div style=" margin-top: 20px; margin-left: 40px;">
						<font size="5" face="楷体">邮箱：</font>
						<input type="text" id="email" v-model="user.email" placeholder="请输入邮箱">
					</div>

					<div align="center" style=" margin-top: 20px;">
						<button type="button" @click="adduser()" style="font-size: 23px; font-family: 楷体;">提交</button>
					</div>

				</form>
			</div>

		</div>
	</div>

</template>

<script>
	export default {
		name: 'register',
		data() {
			return {
				msg: 'Welcome',
				user: {
					username: '',
					Password: '',
					email: ''
				},
				mess: ""
			}
		},
		methods: {
			adduser: function() {

				alert("注册成功,请前往邮箱激活");

				this.$router.push({
						path: "/login"
					}),
					this.$http.post("http://localhost:8081/user", {
						username: this.user.username,
						Password: this.user.Password,
						email: this.user.email
					}).then(
						function(result) {
							this.user = {
								username: '',
								Password: '',
								email: ''
							}
						},
						function(error) {
							console.log(error);
						}
					)
			},

			check: function() {
				var _this = this;
				this.$axios.get("http://localhost:8081/check", {
					params: {
						username: this.user.username
					}
				}).then(
					function(result) {
						if(result.data=="ok") {
							_this.mess = "用户名不可用";
						} else {
							_this.mess = "用户名可用";
						}
					},
					function(error) {
						console.log(error);
					}
				)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>