const date = new Date(); //gives current date & time.
const today = new Date();
const renderCalendar = () => {
  date.setDate(1); //
  const monthDays = document.querySelector(".days"); //To print days of the month

  /*To define the ending date of each month. */
  const lastDay = new Date(
    date.getFullYear(), // gives current year
    date.getMonth() + 1, //gives the current month. 1 -> gives the last day of current month.
    0 //0 -> gives the last day of previous month.
  ).getDate(); //to get the number of day of the specific month i.e. 2, 3.

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

  document.querySelector(".date h1").innerHTML = date.getFullYear();
  document.querySelector(".date h2").innerHTML = months[date.getMonth()];
  document.querySelector(".date p").innerHTML = moment().format("dddd Do");
  //new Date().toDateString();
  console.log(document.querySelector(".date p").innerHTML);

  // document.querySelector(".date h1").innerHTML = moment().format('MMMM');
  // document.querySelector(".date P").innerHTML = moment().format('DD MMM YYYY');

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (i == today.getDate() && date.getMonth() == today.getMonth()) {
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

// //To display selected years calendar.
// document.querySelector(".year_form").addEventListener("click", () => {
//   date.setFullYear(date.getMonth() - 1);
//   renderCalendar();
// });

//To display selected month's calendar.
document.querySelector(".month_row").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

//To display datetime in readable format inside modal
document.querySelector(".display_date_time_event p").innerHTML =
  today.toDateString();
document.querySelector(".display_date_time_office p").innerHTML =
  today.toDateString();
document.querySelector(".display_date_time_task p").innerHTML =
  today.toDateString();
document.querySelector(".display_date_time_reminder p").innerHTML =
  today.toDateString();
document.querySelector(".display_date_time_appointment p").innerHTML =
  today.toDateString();

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
    $("#myModal").modal("show");
  });

  //Month modal popup
  $("#display_month").click(function () {
    $("#modal_month").modal("show");
  });

  //Year modal popup
  $("#display_year").click(function () {
    $("#modal_year").modal("show");
  });
});

function year_form() {
  var year_num = document.getElementById("year_num").value;
  if (year_num >= 1900 && year_num <= 2050) {
    document.getElementById("div1").innerHTML = "Content.......";
    const year_new = date.getFullYear();
    renderCalendar();
  } else {
    document.getElementById("div1").innerHTML =
      "** Please enter proper year. **";
  }
}

$("#picker").mobiscroll().datepicker({
  calendarScroll: "horizontal",
  showWeekNumbers: false,
  showOuterDays: true,
});
