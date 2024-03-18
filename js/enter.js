document.addEventListener('DOMContentLoaded', function() {
    const db = [
        {
            email: "arnatsultanbek2@gmail.com",
            password: "12345678"
        },
        {
            email: "example@example.com",
            password: "password123"
        },
        {
            email: "serikbayev_n",
            password: "123456"
        }
    ];

    document.getElementById('check').onclick = function(){
        let emailInput = document.getElementById('email').value;
        let passwordInput = document.getElementById('password').value;
        
        let userFound = false;

        for (let i = 0; i < db.length; i++) {
            if (db[i].email === emailInput && db[i].password === passwordInput) {
                window.location.href = "index.html";
                userFound = true;
                break;
            }
        }

        if (!userFound) {
            alert("Incorrect email or password!");
        }
    };
});
