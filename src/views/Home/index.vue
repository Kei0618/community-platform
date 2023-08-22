<script setup>

</script>
<template>
  <div class="container-md">
    <div class="controls d-flex">
      <div class="col-2">
        <select class="form-select" v-model="sortBy">
          <option value="publishDate">發文日期</option>
          <option value="modifyDate">修改日期</option>
        </select>
      </div>
      <div class="col-3">
        <input class="form-control" v-model="searchQuery" placeholder="輸入關鍵字查詢" />
      </div>
      <RouterView />
    </div>
    <table class="table text-center align-middle">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
          <th scope="col">Actions</th> <!-- 新增 Actions 欄位 -->
        </tr>
      </thead>
      <tbody >
        <tr v-for="(item, index) in tableData" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.firstName }}</td>
          <td>{{ item.lastName }}</td>
          <td>{{ item.handle }}</td>
          <td>
            <button class="btn btn-primary" @click="editItem(index)">編輯</button>
            <button class="btn btn-danger" @click="deleteItem(index)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button v-for="pageNumber in totalPages" :key="pageNumber" @click="currentPage = pageNumber">
        {{ pageNumber }}
      </button>
    </div>
  </div>
</template>
      
<script>
export default {
  data() {
    return {
      articles: [], // 從資料庫取得的文章資料
      currentPage: 1,
      itemsPerPage: 10,
      sortBy: 'publishDate',
      searchQuery: '',
      tableData: [
        { firstName: 'Mark', lastName: 'Otto', handle: '@mdo' },
        // ...其他數據
      ]
    };
  },
  computed: {
    displayedArticles() {
      // 應用排序和查詢過濾後的文章
      let sortedArticles = this.articles.slice().sort((a, b) => {
        if (this.sortBy === 'publishDate') {
          return a.publishDate - b.publishDate;
        } else if (this.sortBy === 'modifyDate') {
          return a.modifyDate - b.modifyDate;
        }
      });

      if (this.searchQuery) {
        sortedArticles = sortedArticles.filter(article => {
          return (
            article.title.includes(this.searchQuery) ||
            article.author.includes(this.searchQuery)
          );
        });
      }

      // 分頁處理
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return sortedArticles.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.articles.length / this.itemsPerPage);
    }
  }
};
</script>
      
<style scoped>
/* .controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

} */

.article-list {
  margin-top: 50px;
}

.article-row {
  display: flex;
  align-items: center;
  height: 25px;
  margin-bottom: 5px;
  font-size: 30px;
}

.article-publish {
  flex: 1;
}

.article-image {
  width: 40px;
  height: auto;
  margin-right: 10px;
}

/* .pagination {
  display: flex;
  justify-content: center;
  margin-top: 10px;
} */

button {
  margin: 0 5px;
}
</style>