;(function() {
    let btn = document.querySelector('#show-phones');
    let list = document.querySelector('#phones');
    let ajaxPhones = new XMLHttpRequest();

    
    
    ajaxPhones.onload = function() {

        if(ajaxPhones.status !== 200){
            console.log(ajaxPhones.status);
            return;  
        }
        let phones = JSON.parse(ajaxPhones.responseText);

        console.log(ajaxPhones.responseText);  
        console.log(phones); 
        
        phones.forEach( phoneInfo => {
            list.innerHTML += '<li>' + phoneInfo.name + '</li>';
            console.log(phoneInfo.name);
        });
    };
    
    btn.addEventListener('click', () => {
        console.log('BTN');

        ajaxPhones.open('GET', 'js/phones.json');
        ajaxPhones.send();
    });

})();