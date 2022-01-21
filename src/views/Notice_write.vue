<template>
    <div class="notice_write">
        <div class="contents-inner main-inner">
            <div class="main-container">
                <p class="main-title">공지사항 작성</p>
                <form action="#" name="notice_form" class="notice_form">
                    <label for="notice_title">제목</label>
                    <input type="text" name="notice_title" class="notice_title">
                    <label for="notice_writer">작성자</label>
                    <input type="text" name="notice_writer" class="notice_writer">
                    <label for="notice_write_content">내용</label>
                    <textarea name="notice_write_content" class="notice_write_content"></textarea>
                </form>
                <div class="notice-write-btns">
                    <button type="button" class="to_write_notice" id="write_btn">작성</button>
                    <a href="notice.html" id="to_list_btn">목록</a>
                </div>
            </div>
        </div>
    </div>
</template>
