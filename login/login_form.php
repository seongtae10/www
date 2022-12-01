<? session_start(); ?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
    <link rel="stylesheet" href="css/login.css">
    <script src="https://kit.fontawesome.com/f8a0f5a24e.js" crossorigin="anonymous"></script>
</head>
<body>
    
<article id="content">
			<div class="tit">
				<h2>로그인</h2>
				<p class="ex">가입 시 등록한 아이디와 비밀번호를 입력해주세요.</p>
			</div>
			<form  name="member_form" method="post" action="login.php"> 
				<!-- 로그인 폼 -->
				<div id="id_pw_input">
					<div class="row">
						<label for="id">아이디</label>
						<input type="text" name="id" id="id" class="login_input" placeholder="cesco123" title="아이디" maxlength="41">
						<div class="loadtext"></div>  
					</div>
					<div class="row">
						<label for="pass">비밀번호</label>
						<input type="password" name="pass" id="pass" class="login_input" placeholder="*******" title="비밀번호" maxlength="16">
						<div class="loadtext"></div>  
					</div>
				</div>
                <div id="button">
                    <button type="submit" value="로그인"  class="find">로그인</button>
                </div>
				<!-- 아이디 찾기/비밀번호 찾기/회원가입 -->
				<ul class="find_wrap">
					<li><a href="./id_find.php">아이디 찾기</a></li>
					<li><a href="./pw_find.php">비밀번호 찾기</a></li>
				</ul>
				<div class="join">
					<span>아직 회원이 아니신가요?</span>
					<a href="../member/member_check.html"> 회원가입</a>
				</div>
			</form>

		</article>

</body>
</html>