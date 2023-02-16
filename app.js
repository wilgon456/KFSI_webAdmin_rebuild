function showPopupMove() {
    window.open("https://naver.com","콘텐츠 이동","width=400, height=300, top=10, left=10")
};



const Btn = document.querySelector('.pwdBtn');

function addBtnTxt() {
    Btn.addEventListener('click', addTxt);
}

function addTxt(e) {
    Btn.innerHTML = "<input type='text'> <input value='✅전송됨'>";
}

addBtnTxt();