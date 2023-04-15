const apiUrl = 'http://www.mocky.io/v2/5dfcef48310000ee0ed2c281'

document.getElementById('regform').addEventListener('submit', function(evt){
    evt.preventDefault();

    let age = document.getElementById('age').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let location = document.getElementById('location').value

    console.log(password)

    if(!age) {
        document.getElementById('age-error').classList.add('show')
        document.getElementById('age-error').classList.remove('hide')
        document.getElementById('age-error').innerHTML = 'Age is requered'
    }else {
        document.getElementById('age-error').classList.add('hide')
        document.getElementById('age-error').classList.remove('show')
    }
    if(!email) {
        document.getElementById('email-error').classList.add('show')
        document.getElementById('email-error').classList.remove('hide')
        document.getElementById('email-error').innerHTML = 'Email is requered'
    }else {
        document.getElementById('email-error').classList.add('hide')
        document.getElementById('email-error').classList.remove('show')
    }
    if(!password) {
        document.getElementById('password-error').classList.add('show')
        document.getElementById('password-error').classList.remove('hide')
        document.getElementById('password-error').innerHTML = 'Password is requered'
    }else {
        document.getElementById('password-error').classList.add('hide')
        document.getElementById('password-error').classList.remove('show')
    }
    if(!location) {
        document.getElementById('location-error').classList.add('show')
        document.getElementById('location-error').classList.remove('hide')
        document.getElementById('location-error').innerHTML = 'Location is requered'
    }else {
        document.getElementById('location-error').classList.add('hide')
        document.getElementById('location-error').classList.remove('show')
    }
    if(age && email && password && location ) {
        fetch(apiUrl, {
            method: 'post',
            body: {
                age: document.getElementById('age').value,
                email: document.getElementById('email').value,
                password: password = document.getElementById('password').value,
                location: document.getElementById('location').value
            },
        })
        .then(function(response) {
            console.log(response)
        })
    }
})