<template>
  <div class="login">
    <div class="dropdown_wrap">
      <div class="input_field id">
        <label for="id_input" class="label_icon">아이디 입력</label>
        <span class="input_group">
          <input
            id="id_input"
            maxlength="40"
            title="아이디 입력"
            placeholder="아이디 또는 이메일주소"
            autocapitalize="off"
            type="email"
            class="form text"
          />
        </span>
      </div>
    </div>
    <div class="input_field password">
      <label for="password_input" class="label_icon">비밀번호 입력</label>
      <span class="input_group">
        <input
          id="password_input"
          type="password"
          maxlength="16"
          title="비밀번호 입력"
          placeholder="비밀번호"
          class="form text"
        />
      </span>
    </div>
    <button id="btnLogin" type="button" class="btn_login">
      <span>로그인</span>
    </button>
  </div>
</template>
