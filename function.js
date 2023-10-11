let name = "john";

function call(){
    name = "hi " + name;
    console.log(name);

    return name;
}

console.log(name);
// call();


function another(term = call()){
    console.log(term + " this is another function");
}

another();

function returning(){
    return(
        name + " we are here to help"
        + " apply here"
    )
}
let returN = returning();

console.log(returN);

// function for age varify

function ageCheck(){
    let age = confirm("are u 18+");
    return age;
}
function varifier(){
    if (ageCheck() == true){
        alert("you can drink");
    }else alert("sry u cant drink");
}

// varifier();

// alert(varifier);//shows value

let store = varifier;

// store();
// age varifier end

// callback funstions

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "You agreed." );
  }
  
  function showCancel() {
    alert( "You canceled the execution." );
  }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOk, showCancel);//here showOk and showCancle are not called their code is sent here we copied value of both functions to yes and no

//   In JavaScript, a function is a value, so we can deal with it as a value. The code above shows its string representation, which is the source code.

// Surely, a function is a special value, in the sense that we can call it like sayHi().

// But it’s still a value. So we can work with it like with other kinds of values.

// We can copy a function to another variable:

// ANOTher way is

function ask2(question, yes, no){
    if(confirm(question)) yes();
    else no();
}

ask2(
    "are u sure?",
    function(){alert("u agreed")},
    function(){alert("u cant say no to this")}
)


//function scope

let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined

let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now



//ref   https://javascript.info/function-expressions