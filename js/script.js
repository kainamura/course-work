navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classlist.toggle('active');
    profile.classlist.remove('active');
}

profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
    profile.classlist.toggle('active');
    navbar.classlist.remove('active');
}

window.onscroll = () =>{
    navbar.classlist.remove('active');
    profile.classlist.remove('active');
}