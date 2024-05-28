document.addEventListener('DOMContentLoaded', function() {
    var formData = JSON.parse(localStorage.getItem('formData'));

    if (formData) {
        document.getElementById('profile-name').textContent = formData.firstName + ' ' + formData.lastName;
        document.getElementById('profile-email').textContent = formData.email;
        document.getElementById('profile-sex').textContent = formData.sex;
        document.getElementById('profile-reason').textContent = formData.supportReason;
    }

    var profilePicture = localStorage.getItem('profilePicture');
    var headerPicture = localStorage.getItem('headerPicture');

    if (profilePicture) {
        document.getElementById('profile-image').querySelector('img').src = profilePicture;
    }

    if (headerPicture) {
        document.getElementById('header-image').style.backgroundImage = `url(${headerPicture})`;
    }
});

function savePictures() {
    const profilePictureInput = document.getElementById('upload-profile-picture').files[0];
    const headerPictureInput = document.getElementById('upload-header-picture').files[0];

    if (profilePictureInput) {
        const reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem('profilePicture', e.target.result);
            document.getElementById('profile-image').querySelector('img').src = e.target.result;
        };
        reader.readAsDataURL(profilePictureInput);
    }

    if (headerPictureInput) {
        const reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem('headerPicture', e.target.result);
            document.getElementById('header-image').style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(headerPictureInput);
    }
}



    function redirect() {
        window.location.href = 'images.html';
    }
