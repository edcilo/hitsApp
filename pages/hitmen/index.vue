<template>
  <div class="hits container">
    <el-table :data="tableData" height="510" style="width: 100%">
      <el-table-column prop="pk" label="ID" width="180" />
      <el-table-column prop="username" label="Username" width="180" />
      <el-table-column prop="email" label="E-mail"/>
      <el-table-column prop="user_type" label="Type"/>
      <el-table-column prop="manager.username" label="Manager"/>
    </el-table>

    <el-pagination
      :page-size="20"
      :pager-count="11"
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          "pk": 6,
          "username": "manager 00",
          "email": "manager@edcilo.com",
          "user_type": "MG",
          "manager": null
        }
      ]
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}
</style>
