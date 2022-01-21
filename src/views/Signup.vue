<template>
    <div class="signup">
        <div class="contents-inner main-inner">
            <div class="main-container">
                <p class="main-title">회원가입</p>
                <fieldset>
                    <legend class="blind">회원가입</legend>
                    <form action="#" name="signup_form" class="signup-form">
                        <label for="name">이름</label>
                        <input type="text" name="name" id="input_name">
                        <p id="warnning_name" class="warnning_text"></p>
                        <label for="id">아이디</label>
                        <div class="duplication-box">
                            <input type="text" name="id" id="input_id">
                            <button type="button" class="duplication-btn">중복 검사</button>
                        </div>
                        <p id="warnning_id" class="warnning_text"></p>
                        <label for="pwd">비밀번호</label>
                        <input type="password" name="pwd" id="input_pwd">
                        <p id="warnning_pwd" class="warnning_text"></p>
                        <label for="pwd_conf">비밀번호 확인</label>
                        <input type="password" name="pwd_conf" id="input_pwd_conf">
                        <p id="warnning_pwd_conf" class="warnning_text"></p>
                        <label for="email">이메일</label>
                        <input type="email" name="email" id="input_email">
                        <p id="warnning_email" class="warnning_text"></p>
                        <button type="button" id="submit_btn">회원가입</button>
                    </form>
                </fieldset>
            </div>
            <div class="signup-complete-box">
                <p class="signup-complete-text">회원가입이 완료되었습니다.</p>
                <a href="login.html" class="signup-complete-login">로그인 하기</a>
            </div>
        </div>
    </div>
</template>
