function storeFormData() {
    var formData = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        sex: document.querySelector('input[name="sex"]:checked').value,
        email: document.getElementById('email').value,
        supportReason: document.getElementById('support-reason').value
    };
    
    localStorage.setItem('formData', JSON.stringify(formData));
}