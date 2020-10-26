let menuTab = Array.from(document.querySelectorAll('.tab'));

let tabContent = Array.from(document.querySelectorAll('.tab__content'));

menuTab.forEach(function (elementMenuTab) {
  elementMenuTab.onclick = function () {
    document.querySelectorAll('.tab').forEach((e) => e.classList.remove('tab_active'));
    document.querySelectorAll('.tab__content').forEach((e) => e.classList.remove('tab__content_active'));
    elementMenuTab.classList.add('tab_active');
    tabContent[menuTab.indexOf(elementMenuTab)].classList.add('tab__content_active');
  }
}); 