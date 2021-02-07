<template>
  <div>
    <el-card class="hitman box-card">
      <div slot="header" class="clearfix">
        <span>{{ hit.pk }}</span>
      </div>

      <ul>
        <li>{{ hit.status }}</li>
        <li>{{ hit.target }}</li>
        <li>{{ hit.description }}</li>
        <li>{{ hit.last_modified }}</li>
      </ul>

      <div v-if="hit.hitman">
        <p>Hitman</p>
        <ul>
          <li>{{ hit.hitman.username }}</li>
          <li>{{ hit.hitman.email }}</li>
          <li>{{ hit.hitman.user_type }}</li>
        </ul>
      </div>

      <div v-if="hit.manager">
        <p>Manager</p>
        <ul>
          <li>{{ hit.manager.username }}</li>
          <li>{{ hit.manager.email }}</li>
          <li>{{ hit.hitman.user_type }}</li>
        </ul>
      </div>
    </el-card>
  </div>
</template>


<script>
export default {
  data() {
    return {
      hit: {
        "pk": 9,
        "target": "unknow",
        "description": "lorem ipsum",
        "status": "o",
        "created_at": "2021-02-05T10:50:32.503502-06:00",
        "last_modified": "2021-02-05T10:50:32.503543-06:00",
        "hitman": {
            "pk": 8,
            "username": "hitman 000",
            "email": "hitman000@edcilo.com",
            "user_type": "HM",
            "manager": null
        },
        "manager": {
            "pk": 6,
            "username": "manager 00",
            "email": "manager@edcilo.com",
            "user_type": "MG",
            "manager": null
        }
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
