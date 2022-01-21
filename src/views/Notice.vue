<template>
  <div class="notice">
    <div class="contents-inner main-inner">
      <div class="main-container">
        <div class="main-header">
          <p class="main-title">공지사항</p>
          <router-link to="notice_write" class="to_write_notice"
            >글쓰기</router-link
          >
        </div>
        <ul class="board-items">
          <li class="board-item board-head">
            <p class="notice-idx">번호</p>
            <p class="notice-title">제목</p>
            <p class="notice-reg">등록일</p>
            <p class="notice-readcnt">조회수</p>
          </li>
          <router-link
            type="li"
            v-for="item in state.items"
            v-bind:key="item.boardseq"
            :to="{ name: 'Notice_view', params: { id: item.boardseq } }"
            class="board-item board-body"
          >
            <p class="notice-idx">{{ item.boardseq }}</p>
            <p class="notice-title">{{ item.subject }}</p>
            <p class="notice-reg">{{ item.regday }}</p>
            <p class="notice-readcnt">{{ item.readcnt }}</p>
          </router-link>
        </ul>
        <ul class="pagination-box">
          <li>
            <button type="button" id="to_first_btn" class="page-move-btn">
              첫 페이지
            </button>
          </li>
          <li>
            <button id="to_prev_btn" class="page-move-btn">이전 페이지</button>
          </li>
          <li>
            <button class="page_num">1</button>
          </li>
          <li>
            <button id="to_next_btn" class="page-move-btn">다음 페이지</button>
          </li>
          <li>
            <button id="to_last_btn" class="page-move-btn">
              마지막 페이지
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";

export default {
  name: "Notice",
  setup() {
    const state = reactive({
      items: [],
    });
    onMounted(() => {
      getNoticeData();
      checkLoggedIn();
    });
    const checkLoggedIn = () => {
      const userInfo = JSON.parse(sessionStorage.getItem("currentLogin"));
      const writeBtn = document.querySelector(".to_write_notice");
      if (userInfo === null) {
        writeBtn.addEventListener("click", (event) => {
          event.preventDefault();
          alert("로그인 후 이용해주세요.");
        });
      }
    };

    const getNoticeData = () => {
      let url = `http://172.16.11.230/data/?ct=Data&at=listbbs&per=0&on1=10`;

      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          state.items = res;
        })
        .catch((error) => {
          alert("네트워크에 오류가 발생했습니다.");
          console.log(error);
        });
    };

    return {
      state,
      checkLoggedIn,
      getNoticeData,
    };
  },
};
</script>
