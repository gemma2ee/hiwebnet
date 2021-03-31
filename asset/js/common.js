$( function() {

    // datepicker
    $.datepicker.setDefaults({
        changeMonth: true,
        changeYear: true,
        showMonthAfterYear: true,
        //showOn: "both", 
        //buttonText: "<i class='fas fa-calendar-alt'></i>",
        dateFormat: 'yy.mm.dd',
        prevText: '이전 달',
        nextText: '다음 달',
        closeText: '닫기',
        currentText: '오늘',
        monthNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: ''
    });
    $( "#datepicker1" ).datepicker();
    $( "#datepicker2" ).datepicker();

  } );



  // Chart.js
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',
  
      // The data for our dataset
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              label: 'Blood pressure',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [0, 10, 5, 2, 20, 30, 45]
          }]
      },
  
      // Configuration options go here
      options: {}
  });
  

  var ctx = document.getElementById('myChart2').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',
  
      // The data for our dataset
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              label: 'Blood pressure',
              backgroundColor: 'rgb(10, 99, 132)',
              borderColor: 'rgb(10, 99, 132)',
              data: [0, 10, 5, 2, 20, 30, 45]
          }]
      },
  
      // Configuration options go here
      options: {}
  });


