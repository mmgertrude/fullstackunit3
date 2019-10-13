//how to hide the heading in vanilla Javascript:
// const test = document.querySelector(".container h1");
// test.style.display="none"

//how to hide the green box in vanilla Javascript:

const box = document.querySelector(".box");
/*box.style.display = "none"
*/

//how to hide the green box in jQuery:
/*
jQuery('.box').hide();


//alternatively still in jQuery
$(".box").hide();

//bring it back
$(".box").show();
*/
/********************************************************/
//example with event listener
/********************************************************/
/*
box.addEventListener("click", function(){
    alert("you clicked me!");
})

//jquery alternative
$(".box").click(function(){
    alert("you clicked me!");
})
*/
/********************************************************/
//example with animations
/********************************************************/
/*let headerText = $(".container h1").text();
alert (headerText)
$(".container h1").css("background-color", "gray");
*/
/*
Fade into view: first hide the element h1
$(".container h1").hide();
//try the fade animation over 2 seconds                       
$(".container h1").fadeIn(2000);
$(".container h1").delay(3000);
$(".container h1").slideUp();


//alternatively:
$(".container h1").hide().fadeIn(2000).delay(2000).slideUp().slideDown();

//or more clearly:
/*
$(".container h1")
.hide()
.fadeIn(2000)
.delay(3000)
.slideUp();
*/
/********************************************************/
//Getters and setters
/********************************************************/
/*
.html can get an element which we can set

$(".container h1").html(); //just gets the element, here .html() is a getter
//the above will return all the html nested within the selected element
$(".container h1").html("<p>I am setting this HTML!</p>"); // here .html method is setter

 headerText = $(".container h1").text();
alert (headerText)
*/

/*******************************************************

const myNewHead = "My First Blog Post";
const content = "This is my first post!";
//give div with class title some content:
$(".title").text(myNewHead);
//note that puting html tags the text method will not render them correctly
$(".title").text("This is my <strong>first </strong> post!");

//to solve this use the html()
$(".title").html("This is my <strong>first </strong> post!");


note: use .val() to get value of input element eg $("#user_name").va() when input element has 
a class id of user_name.
example:
Use jQuery’s val() method to get the value of the text input with the ID of name-input inside the 
cick handler:
$('button').click(function() {
});

solution:
$('button').click(function() {
  let newName = $("#name-input").val();
});



/*******************************************************
 

*/

