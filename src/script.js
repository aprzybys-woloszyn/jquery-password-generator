$('button').click(() => {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ![]{}()%&*$#^<>~@|";
    let passwordLength = 16;
    let password = "";


    for (let i = 0; i < passwordLength; i++) {

        let randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }

    $('input').val(password);

})