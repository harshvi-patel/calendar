// $(document).load(function() {
//  // executes when complete page is fully loaded, including all frames, objects and images
// });

const date = new Date(); //gives current date & time.

const renderCalendar = () => {
  date.setDate(1); //
  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1, //1 -> gives the last day of current month
    0 //0 -> gives the last day of previous month.
  ).getDate(); //to get the number of days of the specific month.

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay(); //returns numbers of weekdays

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

//To display datetime in readable format inside modal
document.querySelector(".display_date_time_event p").innerHTML =
  new Date().toDateString();
document.querySelector(".display_date_time_office p").innerHTML =
  new Date().toDateString();
document.querySelector(".display_date_time_task p").innerHTML =
  new Date().toDateString();
document.querySelector(".display_date_time_reminder p").innerHTML =
  new Date().toDateString();
document.querySelector(".display_date_time_appointment p").innerHTML =
  new Date().toDateString();

$(document).ready(function () {
    // input field (title) in modal.
    // first hide all the textfields except title.
  $("#office_title").hide();
  $("#task_title").hide();
  $("#reminder_title").hide();
  $("#appointment_title").hide();
  $("#event_title").show();
  //Hide all others except its respective titles.
  $("#event-tab").click(function () {
    $("#office_title").hide();
    $("#task_title").hide();
    $("#reminder_title").hide();
    $("#appointment_title").hide();
    $("#event_title").show();
  });

  $("#office-tab").click(function () {
    $("#task_title").hide();
    $("#reminder_title").hide();
    $("#appointment_title").hide();
    $("#event_title").hide();
    $("#office_title").show();
  });

  $("#task-tab").click(function () {
    $("#task_title").hide();
    $("#reminder_title").hide();
    $("#appointment_title").hide();
    $("#event_title").hide();
    $("#office_title").hide();
    $("#task_title").show();
  });

  $("#reminder-tab").click(function () {
    $("#office_title").hide();
    $("#task_title").hide();
    $("#appointment_title").hide();
    $("#event_title").hide();
    $("#reminder_title").show();
  });

  $("#appointment-tab").click(function () {
    $("#office_title").hide();
    $("#task_title").hide();
    $("#reminder_title").hide();
    $("#appointment_title").hide();
    $("#event_title").hide();
    $("#appointment_title").show();
  });
//title bar done.

// Adding attachment in title toolbar.
  $("#description").click(function () {
    $(".add_attachment").toggle("slide");
  });
 
//Radio button hide show on click of checkbox in "OUT OF OFFICE" tab.
  $("#check_office").click(function () {
    $(".radio_office").toggle("slide");
  });

//   Popup modal on click of days.
    $("#btn_days_click").click(function () {
        // console.log('click')
        $('#myModal').modal('show');
    });
});

