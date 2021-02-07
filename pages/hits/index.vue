<template>
  <div class="hits container">
    <el-table :data="tableData" height="510" style="width: 100%">
      <el-table-column prop="pk" label="ID" width="180" />
      <el-table-column prop="status" label="Status" width="180" />
      <el-table-column prop="hitman.username" label="Hitman"/>
      <el-table-column prop="manager.username" label="Manager"/>
      <el-table-column prop="last_modified" label="Updated at"/>
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
          "pk": 10,
          "target": "unknow",
          "description": "lorem ipsum",
          "status": "o",
          "created_at": "2021-02-05T10:51:11.880028-06:00",
          "last_modified": "2021-02-05T10:51:11.880059-06:00",
          "hitman": {
              "pk": 9,
              "username": "hitman 001",
              "email": "hitman001@edcilo.com",
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
