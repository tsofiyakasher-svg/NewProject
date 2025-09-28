        // שומר את נתוני הטופס ב-LocalStorage ומציג אותם
        function saveFormData() {
            const username = document.getElementById('sign').value;
            const password = document.getElementById('up').value;
            const savedDataDiv = document.getElementById('savedData');

            if (username && password) {
                localStorage.setItem('sign', username);
                localStorage.setItem('up', password);
                savedDataDiv.innerHTML = `נתונים שמורים:<br>שם משתמש: ${username}<br>סיסמה: ${password}`;
                alert("The data was saved successfully");
            } else {
                savedDataDiv.innerHTML = 'אנא מלא את כל השדות.';
                alert("Please fill in all fields.");
            }
        }

document.getElementById('button2').addEventListener("click",saveFormData)
        