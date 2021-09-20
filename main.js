
/*
	WEB 303
	Starting file for Assignment 1 
	{Your Name Here}
*/

$(document).ready(function () {
  $("#salary").keyup(function () {
    let salary = $(this).val();
    let percent = $("#percent").val();
    salary = parseFloat(salary);
    percent = parseFloat(percent);
    const price = salary * (percent / 100);
    const roundedPrice = price.toFixed();
    const dollars = "$" + roundedPrice;
    roundedPrice > 0 && $("#spend").text(dollars) || $("#spend").text('$0');
    
  });

  $("#percent").keyup(function () {
    let salary = $("#salary").val();
    let percent = $(this).val();
    salary = parseFloat(salary);
    percent = parseFloat(percent);
    const price = salary * (percent / 100);
    const roundedPrice = price.toFixed();
    const dollars = "$" + roundedPrice;

    roundedPrice > 0 && $("#spend").text(dollars) || $("#spend").text('$0');

  });
});

// difference between keyup and change
// keyup - The keyup event occurs when a keyboard key is released
// change - The change event occurs when the input field loses focus after the content is changed
//           (or)
//          when enter key is pressed after the content is changed.
