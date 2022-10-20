//timeblocks
var timeblocks = $('.time-block').addClass('row');
var blockText = $("<p>").addClass("description");
timeBlock.append(blockText);

// 
var currentDay = parseInt(moment().format('H'));



// time blocks COLOR CODED to indicate past, present, or future
$("textarea").each(function () {
  var $this = $(this);
  var id = parseInt($this.attr("id"));

  if (id < currentHour) {
    $(this).addClass("past");
  }
  if (id > currentHour) {
    $(this).addClass("future");
  }
  if (id === currentHour) {
    $(this).addClass("present");
  }
});


$("button.saveBtn").click(function (event, loadEvents) {
    event.preventDefault();
  
 
    var $element = $(this).siblings("textarea");
    
    var time = $element.attr("id");
    console.log(time);
   
    $(".saveBtn").hover(function () {
      $(this).addClass("saveBtn:hover");
    });
    // save events to localStorage
    if (time && text !== "") {
      console.log(time, text);
      localStorage.setItem(time, text);
    }
  });
  $(".saveBtn").hover(function () {
    $(this).addClass("saveBtn:hover");
  });
  
  fetchEvents();