<!--
 * @Author: lzy
 * @Date: 2020-07-15 18:34:45
 * @FilePath: \my-init-PC\vue-cli-template-master\src\pages\login.vue
-->
<template>
  <div class="login">
    <div class="login_form">
      <div class="login_form_title">登录</div>
      <el-form label-position="left" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号：" prop="uId">
          <el-input v-model.number="ruleForm.uId"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
      };
      var validatePass2 = (rule, value, callback) => {
        if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          uId: ''
        },
        rules: {
          pass: [
            {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },{ 
            validator: validatePass, 
            trigger: 'blur'
          }],
          checkPass: [{
            required: true,
            message: "请再次输入密码",
            trigger: "blur"
          },{ 
            validator: validatePass2, 
            trigger: 'blur'
          }],
          uId: [{
            required: true,
            message: "请输入用户名称",
            trigger: "blur"
          }]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          console.log(valid,this.ruleForm)
          if (valid) {
            alert('submit!');
            document.cookie="token="+valid
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang='scss' scoped>
.login{
  width: 100%;
  height: 100vh;
  display:flex;
  justify-content:center;
  align-items: center;
}
.login_form{
  width: 365px;
  height: 309px;
  border-radius: 20px;
  background-color:#ccc;
  padding: 20px;
  .login_form_title{
    width: 100%;
    height: 80px;
    line-height: 80px;
    font-size:20px
  }
}
</style>