<template>
  <div class="data-demo">
    <h2>前后端通信(数据获取)示例</h2>
    <div v-if="loading">数据获取中...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="data-demo-content">
      <span>{{ data.str }}</span>
      <span>{{ data.arr }}</span>
      <span>{{ data.obj }}</span>
    </div>
  </div>
</template>

<script>
import { getDemoString, getDemoArray, getDemoObject } from "@/api/data/demo";

export default {
  name: "DataDemo",
  data() {
    return {
      data: {
        str: null,
        arr: null,
        obj: null,
      },
      loading: false,
      error: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      this.error = null;
      try {
        const [strResponse, arrResponse, objResponse] = await Promise.all([
          getDemoString(),
          getDemoArray(),
          getDemoObject(),
        ]);

        this.data.str = strResponse.data;
        this.data.arr = arrResponse.data;
        this.data.obj = objResponse.data;
      } catch (err) {
        this.error = err.message || "数据获取失败";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.data-demo {
  padding: 20px;
}
.data-demo-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  row-gap: 4px;
}
</style>
