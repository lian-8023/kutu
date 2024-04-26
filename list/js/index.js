$(function () {
  // 顶部菜单
  $(".cfyItem").hover(
    function () {
      $(this).find(".bod").show();
    },
    function () {
      $(this).find(".bod").hide();
    }
  );

  $(".cfyItem .bod li").click(function () {
    $(this).closest(".cfyItem").find(".cfySelected").text($(this).text());
    $(this).closest(".cfyItem").find(".bod").hide();
  });

  //数据悬浮图片上js效果
  $("#macy-container .demo").hover(
    function () {
      $(this).find(".downLoad").show();
    },
    function () {
      $(this).find(".downLoad").hide();
    }
  );
});
