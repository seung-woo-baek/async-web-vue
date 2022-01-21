<template>
    <div class="login">
        <div class="contents-inner login-inner">
            <div class="login-box">
                <fieldset>
                    <legend class="blind">로그인</legend>
                    <h2 class="login-logo">
                        <img
                            src="https://www.tilon.com/web/twcom/imgs/com/asp/main/img_logo.png"
                            alt="logo-colored">
                        <span class="blind">틸론</span>
                    </h2>
                    <form name="login_form" action="#" class="login_form">
                        <label for="id">아이디</label>
                        <input type="text" name="id" id="input_id">
                        <p id="warnning_id" class="warnning_text"></p>
                        <label for="pwd">비밀번호</label>
                        <input type="password" name="pwd" id="input_pwd">
                        <div class="save-checkbox">
                            <input type="checkbox" name="save" id="save_check">
                            <label for="save">계정 정보를 저장하시겠습니까?</label>
                        </div>
                        <button type="button" id="submit_btn" class="login-btn">로그인</button>
                    </form>
                    <a href="#" class="lost-account login-link">계정 정보를 잊어버리셨습니까?</a>
                    <a href="signup.html" class="sinup-link login-link">회원 가입</a>
                </fieldset>
            </div>
        </div>
    </div>
</template>
