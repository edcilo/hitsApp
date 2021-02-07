<template>
  <div class="register container">
    <div class="register__body">
      <el-form ref="form" :model="form">
        <el-form-item label="Hitman">
          <el-select v-model="form.hitman" placeholder="Select">
            <el-option
              v-for="item in hitmen"
              :key="item.pk"
              :label="item.username"
              :value="item.pk">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="Target">
          <el-input v-model="form.target"></el-input>
        </el-form-item>

        <el-form-item label="Description">
          <el-input v-model="form.description" type="textarea"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">
            Save
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
        description: null,
        target: null,
        hitman: null,
      },
      hitmen: [
        {
          "pk": 9,
          "username": "hitman 001",
          "email": "hitman001@edcilo.com",
          "user_type": "HM",
          "manager": null
        },
      ]
    }
  },
  methods: {
    onSubmit() {
      console.log("submit hit form", this.form)
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
