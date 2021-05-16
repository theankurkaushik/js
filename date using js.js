var d= new Date();

let date= d.getDate()+"-"+d.getMonth+1+"-"+d.getFullYear();
document.getElementById("your tag id").innerHTML= date;
firebase.database().ref('/user/'+ username).set({
//User table, Username Key
            Name:name,
            Email:email,
            Password:password,
            Phone:phone,
            DateofRegistration :date
        });
//getMonth method returns months in range 0 to 11
//So for correct month d.getMonth+1
//getDate() - 0-31
//getFullYear()
//getHours()- 0-23
//getMinutes() - 0-59
//getSeconds() - 0-59
// 4 Methods for date object constructor
// new Date()
//new Date(year, month, day, hours, minutes, seconds, milliseconds)
//new Date(milliseconds)
//new Date(date string)
