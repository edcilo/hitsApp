<template>
  <div class="register container">
    <div class="register__body">
      <el-form ref="form" :model="form">
        <el-form-item label="E-mail">
          <el-input v-model="form.email"></el-input>
        </el-form-item>

        <el-form-item label="Username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>

        <el-form-item label="Password">
          <el-input v-model="form.password" show-password></el-input>
        </el-form-item>

        <el-form-item label="Password confirmation">
          <el-input v-model="form.email" show-password></el-input>
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
export default {
  data() {
    return {
      form: {
        email: null,
        username: null,
        password: null,
        password_confirmation: null,
      },
    }
  },
  methods: {
    onSubmit() {
      console.log("submit register form", this.form)
    }
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
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
