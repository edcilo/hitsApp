<template>
  <div>
    <el-card class="hitman box-card">
      <div slot="header" class="clearfix">
        <span>{{ hitman.username }}</span>
      </div>

      <ul>
        <li>{{ hitman.email }}</li>
        <li>{{ hitman.user_type }}</li>
      </ul>

      <div v-if="hitman.manager">
        <p>Manager</p>
        <ul>
          <li>{{ hitman.manager.username }}</li>
          <li>{{ hitman.manager.email }}</li>
        </ul>
      </div>
    </el-card>
  </div>
</template>


<script>
export default {
  data() {
    return {
      hitman: {
        "pk": 4,
        "username": "bigboss",
        "email": "me@edcilo.com",
        "user_type": "BB",
        "manager": null
      }
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
</style>
