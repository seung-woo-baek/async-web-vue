<template>
  <div class="notice_view">
    <div class="contents-inner main-inner">
      <div class="main-container">
        <p class="main-title">공지사항</p>
        <ul class="notice-contents">
          <li class="notice-post-title">
            <span id="post_title">{{ state.item.Subject }}</span>
          </li>
          <li class="notice-post-content">
            <div id="post_content">{{ state.item.Contents }}</div>
          </li>
          <li class="notice-post-info">
            등록 일자 :
            <span id="post_reg">{{ state.item.RegDay }}</span
            >조회수 :
            <span id="post_readcnt">{{ state.item.ReadCnt }}</span>
          </li>
          <li class="notice-post-btns">
            <router-link to="/notice" id="to_list_btn">목록</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";

export default {
  name: "Notice_view",
  setup() {
    const state = reactive({
      item: {},
    });
    onMounted(() => {
      loadNotice();
    });

    const loadNotice = () => {
      const search = location.pathname.split("/");

      let url = `http://172.16.11.230/data/?ct=Data&at=viewbbs&id=${search[2]}`;
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          state.item = res;
        });
    };
    return {
      loadNotice,
      state,
    };
  },
};
</script>
