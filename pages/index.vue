<template>
  <div class="login container">
    <div class="login__body">
      <el-form ref="form" :model="form">
        <el-form-item label="E-mail" :error="errors.email ? errors.email[0] : ''">
          <el-input v-model="form.email" />
        </el-form-item>

        <el-form-item label="Password" :error="errors.password ? errors.password[0] : ''">
          <el-input v-model="form.password" show-password />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">
            Log In
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  middleware: 'guest',
  data() {
    return {
      errors: {},
      form: {
        email: 'me@edcilo.com',
        password: 'secret',
      }
    }
  },
  methods: {
    async onSubmit() {
      const { status, data } = await this.login(this.form)

      if (status >= 400 && status < 500) {
        this.errors = data
      }
    },
    ...mapActions({
      login: 'auth/login'
    })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
