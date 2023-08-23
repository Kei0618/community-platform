
<template>
    <div class="container-md">
        <div class="article">
            <div class="mb-3">
                <img v-if="imageUrl" :src="imageUrl" alt="Image Preview" class="img-fluid">
            </div>
            <div class="mb-3">
                <label for="imageUpload" class="form-label">請選擇圖片</label>
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="imageUpload" ref="fileInput"
                        @change="handleImageUpload">
                </div>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">文章標題</label>
                <input type="email" class="form-control" id="title" placeholder="">
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">文章內容</label>
                <textarea class="form-control" id="content" rows="10"></textarea>
            </div>
        </div>
        <div class="articlebtn d-flex justify-content-end">
            <button class="btn btn-primary" @click="editItem(index)">確認修改</button>
            <button class="btn btn-danger" @click="deleteItem(index)">放棄修改</button>
        </div>
    </div>
</template>
<script >
export default {
    data() {
        return {
            imageUrl: '',
            file: null,
            base64Data: '', // 存儲 Base64 圖片數據
        };
    },
    methods: {
        handleImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                this.imageUrl = URL.createObjectURL(file); // 預覽圖片
                this.convertToBase64(file); // 轉換為 Base64
            }
        },
        convertToBase64(file) {
            const reader = new FileReader();
            reader.onload = () => {
                this.base64Data = reader.result; // 將 Base64 圖片數據設置到 base64Data
            };
            reader.readAsDataURL(file);
        },

    },
};
</script>

<style scoped>
.article {
    margin-top: 5%;
    margin-left: 20%;
    margin-right: 20%;
}

.articlebtn {
    margin-right: 20%;
}

.img-fluid {
    max-width: 1000px;
    /* 限制最大寬度 */
    max-height: 400px;
    /* 限制最大高度 */
}

/* 限制預覽圖片的最大寬度和高度 */
.img-fluid {
  max-width: 100%; /* 限制最大寬度為父元素寬度 */
  height: auto; /* 根據寬度進行等比例調整高度 */
}

/* 使用媒體查詢調整圖片大小，根據不同螢幕尺寸設定不同的最大寬度 */
.img-fluid {
  max-width: 100%; /* 限制最大寬度為父元素寬度 */
  height: auto; /* 根據寬度進行等比例調整高度 */
}

/* 使用媒體查詢調整圖片大小，根據不同螢幕尺寸設定不同的最大寬度 */
@media (min-width: 992px) {
  .img-fluid {
    max-width: 80%; /* 限制最大寬度為 80% */
  }
}


</style>