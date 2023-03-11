window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    const firstName = params.get('firstName');
    const lastName = params.get('lastName');
    const dateOfBirth = params.get('dateOfBirth');
    const previousDegree = params.get('previousDegree');
    const email = params.get('email');
    const phone = params.get('phone');
    const password = params.get('password');
    const confirmedPassword = params.get('confirmedPassword');
    const gender = params.get('gender');

    document.getElementById('result-firstName').innerHTML=firstName;
    document.getElementById('result-lastName').innerHTML=lastName;
    document.getElementById('result-dateOfBirth').innerHTML=dateOfBirth;
    document.getElementById('result-previousDegree').innerHTML=previousDegree;
    document.getElementById('result-email').innerHTML=email;
    document.getElementById('result-phone').innerHTML=phone;
    document.getElementById('result-password').innerHTML=password;
    document.getElementById('result-confirmedPassword').innerHTML=confirmedPassword;
    document.getElementById('result-gender').innerHTML=gender;
})