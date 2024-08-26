function openTab(evt, tabName) {
  // 隐藏所有标签内容
  var tabContents = document.getElementsByClassName('tab-content');
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove('active-content');
    tabContents[i].style.display = 'none';
  }

  // 移除所有标签的活动状态
  var tabs = document.getElementsByClassName('tab');
  for (var j = 0; j < tabs.length; j++) {
    tabs[j].classList.remove('active-tab');
  }

  // 显示选定的标签内容并设置活动状态
  document.getElementById(tabName).classList.add('active-content');
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.classList.add('active-tab');
}
function showAlert() {
  document.querySelector('.alert-box').classList.add('show');
}
function hideAlert() {
  document.querySelector('.alert-box').classList.remove('show');
}
function login()
{
    var un = document.getElementById("inp").value;
    var pass = document.getElementById("pass").value;
    if (un.length!=0&&pass.length!=0)
    {
        localStorage.setItem('un',un);
        localStorage.setItem('pas', pass);
        wn();
        user();
    }
    else
    {
        showAlert();
    }
}