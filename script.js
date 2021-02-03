// Function to compute the interest after clicking compute button.
function compute(){
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("no-years").value;
    future_year=Number.parseInt(new Date().getFullYear()) + Number.parseInt(years);
    interest = (principal * years * rate)/100;

    //Construct the html to be replaced for result
    result = "If you deposit <span class=highlight>"+ principal + "</span><br>" +
    "at an interest rate of <span class=highlight>" + rate + "</span>%. <br>"+
    "You will receive an amount of <span class=highlight>"+interest+"</span>,<br>in the year <span class=highlight>"+ future_year+"</span>";
    
    //set the innerHTML of result 
    document.getElementById("result").innerHTML=result;

}

//funciton to find the interest from the range and display

function findInterest(){
    interest = document.getElementById("rate").value;
    document.getElementById("interestvalue").innerHTML= interest;
}

//function to validate if the principal ammount is positive
//This gets triggered when user enters a number in Ammount field and clicks outside/selects something else.

function validateAmmount()
{
    ammount = document.getElementById("principal").value;
    if(ammount <=0){
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
    }
}
        