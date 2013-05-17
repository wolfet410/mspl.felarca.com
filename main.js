$(document).ready(function() {
  $('#couponBtn').click(function () { checkCoupon(); });

});

function showSchedule(season) {
  $.ajax({
    type: 'POST',
    url: 'main.php',
    async: false, 
    data: { 
      todo: "buildScheduleTable",
      season: season
    },
    cache: false
  });

}