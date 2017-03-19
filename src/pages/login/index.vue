<style lang="scss" scoped>
    .login-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f2f2f2;
        height: 100vh;
        .login-box{
            border-radius: 10px;
            border: 1px solid #999;
            padding: 30px;
            background: #e4e4e4;
            .tips{
                text-align: right;
                color: #ffc508;
            }
        }
    }
</style>
<template>
    <div class="login-wrap">
        <div class="login-box">
            <el-form ref="form" :model="form" label-width="80px">
                <div class="tips" v-show="btn && !form.id">id不能为空</div>
                <el-form-item label="ID">
                    <el-input v-model="form.id"  placeholder="输入你的id"></el-input>
                </el-form-item>
                <div class="tips" v-show="btn && !form.name">用户名不能为空</div>
                <el-form-item label="用户名">
                    <el-input placeholder="输入你的用户名"  v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import { USER_SIGNIN } from 'store/userStore'

  export default {
    data () {
      return {
        btn: false, // true 已经提交过， false没有提交过
        form: {
          id: '111',
          name: 'jack'
        }
      }
    },
    methods: {
      ...mapActions([USER_SIGNIN]),
      submit () {
        this.btn = true
        if (!this.form.id || !this.form.name) return
        this.USER_SIGNIN(this.form)
        this.$router.replace({ path: '/index' })
      }
    }
  }
</script>
