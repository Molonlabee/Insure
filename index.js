console.log('batman')

function toggle(){
    let menu = document.getElementById('header__mobile-menu');
    if(menu.style.display === 'block'){
        menu.style.display = 'none'
    } else{
        menu.style.display = 'block';
    }
}
