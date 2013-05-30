$(document).ready(function() {
  $('#couponBtn').click(function () { checkCoupon(); });

});

function showSchedule(season) {
  current = '9';

  // I want buildScheduleTable to tell me what the highest (current) season is too, 
  // for now I'm hard coding it
  // I also want the page to default to the current season, which I can handle by
  // running showSchedule on pageshow with no parameters, and saying that season = null then season = current
  // This doesn't work for shit yet, but moving on
  $('.sbtn').each(function () {
    $(this).attr('data-theme', 'a').removeClass('ui-btn-up-c').addClass('ui-btn-up-a');
  });
  $('#s'+season).attr('data-theme', 'c').removeClass('ui-btn-up-a').addClass('ui-btn-up-c');

  $.ajax({
    type: 'POST',
    url: 'main.php',
    async: false, 
    data: { 
      todo: "buildScheduleTable",
      season: season
    },
    dataType: 'json',
    cache: false, 
    success: function(a) {  
      if (a) {
        var html = "";
        if (season == current) {
          html += "<p class='page-dialog-heading'>Upcoming Tournaments</p>"
          html += "<table data-role='table' id='futureTable' class='ui-body-d ui-shadow table-stripe'>"
               + "<thead><tr class='ui-bar-d'><th>Date</th><th>Game</th><th>Type</th></tr>"
               + "</thead><tbody>";
          $.each(a, function(row, data) {
            var d = new Date(data['date']);
            if (d > Date.now() ) {
              html += "<tr><td class='rowpadding'><strong>" + data['date'] + "</strong></td>"
                   + "<td class='rowpadding'>" + data['game'] + "</td>"
                   + "<td class='rowpadding'>" + data['type'] + "</td></tr>";
            }
          });
          html += "</tbody></table><br>";
        }
        html += "<p class='page-dialog-heading'>Past Tournaments</p>";
        html += "<table data-role='table' id='futureTable' class='ui-body-d ui-shadow table-stripe'>"
             + "<thead><tr class='ui-bar-d'><th>Date</th><th>Game</th><th>Type</th><th>Entrants</th>"
             + "<th>1st Place</th><th>2nd Place</th><th>3rd Place</th></tr>"
             + "</thead><tbody>";
        $.each(a, function(row, data) {
          var d = new Date(data['date']);
          if (d < Date.now() ) {
            html += "<tr><td class='rowpadding'><strong>" + data['date'] + "</strong></td>"
                 + "<td class='rowpadding'>" + data['game'] + "</td>"
                 + "<td class='rowpadding'>" + data['type'] + "</td>"
                 + "<td class='rowpadding'>" + data['entrants'] + "</td>"
                 + "<td class='rowpadding'>" + data['p1'] + "</td>"
                 + "<td class='rowpadding'>" + data['p2'] + "</td>"
                 + "<td class='rowpadding'>" + data['p3'] + "</td></tr>";
          }
        });
        html += "</tbody></table>";
        $('#scheduleTable').empty();
        $(html).appendTo('#scheduleTable');
      }
    },
    error: function(err) {
      alert("Errors in AJAX response from buildScheduleTable in PHP");
    }
  });
}