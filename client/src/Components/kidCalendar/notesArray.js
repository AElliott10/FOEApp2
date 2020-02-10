// Elf notes array; Need to figure out how they flow into the advent calendar based ont he start date. 
//Maybe each day of the week has a certain activity.Saturday: Hunt; Sunday: make something; Monday: Kind day; Tuesday: Simon Says; Wednesday: Riddly Day; Thursday: Gift Day; Friday: Joke Day then no matter what day the start day falls the flow of content is predicatable.

export const messageArray = [
    {   id: "note-1",
        num: 1,
        type: "starter",
        day: "start_festival", //note-1 = start_festival date, regardless of the chosen start date note one displays, the next day the note sequence matches the number. i.e. if the festival starts on Dec 15, then the note-1 displays overriding the Dec 15 note. Dec 16 the note will be note-16. 
        countdown: "24 days before Christmas!!!", //need a math equation to calculate based on the days between the start date and Dec 25.
        text: "When Santa told us we would be your elves for festival of the elves we were soooo EXCITED!!! We left you dolls that look like us, so first thing is to give us a hug.Festival of the Elves is a magical time. Each day you will find a special note left behind. To get into the spirit we have three wishes to make:1.Please make us a Christmas drawing for our workshop.2.Spin around 3 times.3.Give someone you love a hug.",
        open: false
    },
    
    {   id: "note-2",
        num: 2,
        type: "riddley_day",
        day: "02", 
        countdown: "23 days before Christmas!!!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
        open: false
    },
    {   id: "note-3",
        num: 3,
        type: "riddley_day",
        day: "03", 
        countdown: "22 days before Christmas!!!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
        open: false
    },
    {   id: "note-4",
        num: 4,
        type: "riddley_day",
        day: "04", 
        countdown: "21 days before Christmas!!!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
        open: false
    },
    {   id: "note-5",
        num: 5,
        type: "riddley_day",
        day: "05", 
        countdown: "20 days before Christmas!!!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
        open: false
    },
    {   id: "note-6",
        num: 6,
        type: "riddley_day",
        day: "06", 
        countdown: "19 days before Christmas!!!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
        open: false
    },
    {   id: "note-7",
        num: 7,
        type: "riddley_day",
        day: "07", 
        countdown: "18 days before Christmas!!!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
        open: false
    },
    {   id: "note-8",
        num: 8,
        type: "riddley_day",
        day: "08", 
        countdown: "17 days before Christmas!!!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
        open: false
    },
    {   id: "note-9",
        num: 9,
        type: "riddley_day",
        day: "09", 
        countdown: "16 days before Christmas!!!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
        open: false
    },
    {   id: "note-10",
        num: 10,
        type: "riddley_day",
        day: "10", 
        countdown: "15 days before Christmas!!!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
        open: false
    },
    {   id: "note-11",
        num: 11,
        type: "riddley_day",
        day: "11", 
        countdown: "14 days before Christmas!!!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
        open: false
    },
    {   id: "note-12",
        num: 12,
        type: "riddley_day",
        day: "12", 
        countdown: "13 days before Christmas!!!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
        open: false
    },
    {   id: "note-13",
        num: 13,
        type: "riddley_day",
        day: "13", 
        countdown: "12 days before Christmas!!!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
        open: false
    },
    {   id: "note-14",
        num: 14,
        type: "riddley_day",
        day: "14", 
        countdown: "11 days before Christmas!!!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
        open: false
    },
    {   id: "note-15",
        num: 15,
        type: "riddley_day",
        day: "15", 
        countdown: "10 days before Christmas!!!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
        open: false
    },
    {   id: "note-16",
        num: 16,
        type: "riddley_day",
        day: "16", 
        countdown: "9 days before Christmas!!!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
        open: false
    },
    {   id: "note-17",
        num: 17,
        type: "riddley_day",
        day: "17", 
        countdown: "8 days before Christmas!!!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
        open: false
    },
    {   id: "note-18",
    num: 18,
    type: "riddley_day",
    day: "18", 
    countdown: "7 days before Christmas!!!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
    open: false
},
{   id: "note-19",
num: 19,
type: "riddley_day",
day: "19", 
countdown: "6 days before Christmas!!!",
text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
open: false
},
{   id: "note-20",
num: 20,
type: "riddley_day",
day: "20", 
countdown: "5 days before Christmas!!!",
text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
open: false
},
{   id: "note-21",
num: 21,
type: "riddley_day",
day: "21",
countdown: "4 days before Christmas!!!", 
text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
open: false
},
{   id: "note-22",
num: 22,
type: "riddley_day",
day: "22", 
countdown: "3 days before Christmas!!!",
text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
open: false
},
{   id: "note-23",
num: 23,
type: "riddley_day",
day: "23", 
countdown: "2 days before Christmas!!!",
text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
open: false
},
{   id: "note-24",
num: 24,
type: "riddley_day",
day: "24", 
countdown: "1 day before Christmas!!!",
text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
open: false
},
    {   id: "note-25",
        num: 25,
        type: "christmas",
        day: "25", 
        text: "Merry Christmas!!!!!!",
        open: false
    }
  ];

  export const createCalendar = (messageArray);
  
  /*$(".btn").on("click", function(e) {
    console.log("clicked a day", this);
    var day = parseInt($(this).data("day"));
  
    var today = new Date();
    var todaysdate = today.getDate(); // 14
    if (day > todaysdate) {
      console.log("shouldnt be clicking on this");
      $("#msg").text("you bad kids!");
    } else {
      var note = messageArray[day].text;
      $("#msg").text(note);
    }
  });
  */
  