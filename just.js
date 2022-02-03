//console.log('hello');
function getYourAge(){
    year = new Date().getFullYear()
    var yourAge=prompt('PLEASE enter your birthyear..');
    if (yourAge.length == 4){
        ageInDays=(year-yourAge)*365;
        ageInHours = ageInDays*24;
        ageInMinutes = ageInHours*60
        ageInSeconds = ageInMinutes*60
        var h1=document.createElement('h1');
        var textAnswer=document.createTextNode('you are '+ ageInDays + ' days ' + ageInHours + ' hours ' + ageInMinutes + ' minutes ' + ageInSeconds + ' seconds old. ' );
        h1.setAttribute('id', 'age-days');
        h1.appendChild(textAnswer);
        document.getElementById('output').appendChild(h1);
    }
    else{
        var h1=document.createElement('h1');
        var textAnswer=document.createTextNode('Enter the valid year..' );
        h1.setAttribute('id', 'age-days');
        h1.appendChild(textAnswer);
        document.getElementById('output').appendChild(h1);
    }
}

function resetThis(){
    document.getElementById('age-days').remove();
}

