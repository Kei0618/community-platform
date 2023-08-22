<script setup>

</script>
<template>
        <div>
          <div class="controls">
            <select v-model="sortBy">
              <option value="publishDate">發文日期</option>
              <option value="modifyDate">修改日期</option>
            </select>
            <input v-model="searchQuery" placeholder="輸入關鍵字查詢" />
          </div>
          <div class="article-list">
            <div v-for="article in displayedArticles" :key="article.id" class="article-row">
              <div class="article-date">{{ article.publishDate }}</div>
              <img class="article-image" :src="article.imageSrc" alt="Article Image" />
              <div class="article-title">{{ article.title }}</div>
              <div class="article-author">{{ article.author }}</div>
            </div>
          </div>
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
            searchQuery: ''
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
      .controls {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      .article-list {
        margin-top: 50px;
      }
      
      .article-row {
        display: flex;
        align-items: center;
        height: 25px;
        margin-bottom: 5px;
      }
      
      .article-date,
      .article-title,
      .article-author {
        flex: 1;
      }
      
      .article-image {
        width: 40px;
        height: auto;
        margin-right: 10px;
      }
      
      .pagination {
        display: flex;
        justify-content: center;
        margin-top: 10px;
      }
      
      button {
        margin: 0 5px;
      }
      </style>
