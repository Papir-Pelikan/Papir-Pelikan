
        // Felhasználó kiválasztása
        document.querySelectorAll('.user').forEach(user => {
            user.addEventListener('click', function() {
                // Eltávolítjuk a korábbi kijelölést
                document.querySelectorAll('.user').forEach(u => u.classList.remove('selected'));
                
                // Kijelöljük az aktuális felhasználót
                this.classList.add('selected');
                
                // Beállítjuk a kiválasztott felhasználó nevét
                const selectedUserName = this.getAttribute('data-user');
                document.getElementById('selectedUser').textContent = selectedUserName + ' bejelentkezés';
                
                // Megjelenítjük a jelszó mezőt
                document.getElementById('passwordContainer').style.display = 'block';
                
                // Fókusz a jelszómezőre
                setTimeout(() => {
                    document.getElementById('password').focus();
                }, 100);
            });
        });

        // Egyszerű SHA-256 hash kódolás (csak demonstráció)
        async function sha256Hash(text) {
            const encoder = new TextEncoder();
            const data = encoder.encode(text);
            const hashBuffer = await crypto.subtle.digest('SHA-256', data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        }

        // Sózás hozzáadása a jelszóhash-eléshez
        function addSalt(password, salt) {
            return password + salt;
        }

        // Jelszó erősség indikátor
        function checkPasswordStrength(password) {
            let strength = 0;
            if (password.length >= 8) strength += 25;
            if (/[A-Z]/.test(password)) strength += 25;
            if (/[0-9]/.test(password)) strength += 25;
            if (/[^A-Za-z0-9]/.test(password)) strength += 25;
            
            document.getElementById('passwordStrengthBar').style.width = strength + '%';
            
            if (strength < 50) {
                document.getElementById('passwordStrengthBar').style.background = '#e74c3c';
            } else if (strength < 75) {
                document.getElementById('passwordStrengthBar').style.background = '#f39c12';
            } else {
                document.getElementById('passwordStrengthBar').style.background = '#2ecc71';
            }
        }

        // Jelszó láthatóság váltása
        document.getElementById('togglePassword').addEventListener('click', function() {
            const passwordField = document.getElementById('password');
            const icon = this.querySelector('i');
            
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordField.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });

        // Jelszó erősség ellenőrzése
        document.getElementById('password').addEventListener('input', function() {
            checkPasswordStrength(this.value);
        });

        // Bejelentkezési folyamat
        document.getElementById('loginForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Ellenőrizzük, hogy van-e kiválasztott felhasználó
            const selectedUser = document.querySelector('.user.selected');
            if (!selectedUser) {
                document.getElementById('errorMessage').textContent = 'Kérjük, válassz felhasználót!';
                document.getElementById('errorMessage').style.display = 'block';
                return;
            }
            
            const username = selectedUser.getAttribute('data-user');
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('errorMessage');
            const loginBtn = document.getElementById('loginBtn');
            
            // Jelszó erősség ellenőrzése
            if (password.length < 6) {
                errorMessage.textContent = 'A jelszónak legalább 6 karakter hosszúnak kell lennie!';
                errorMessage.style.display = 'block';
                document.getElementById('loginForm').classList.add('shake');
                setTimeout(() => {
                    document.getElementById('loginForm').classList.remove('shake');
                }, 500);
                return;
            }
            
            loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Feldolgozás...';
            loginBtn.disabled = true;
            
            try {
                // Szimuláljuk a bejelentkezési folyamatot
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Ellenőrzés (csak demonstráció)
                if ((username === 'Ádi' && password === 'pelikan2024') || 
                    (username === 'Mesi' && password === 'pelikan2024')) {
                    // Sikeres bejelentkezés
                    errorMessage.style.display = 'none';
                    document.getElementById('loginScreen').style.display = 'none';
                    document.getElementById('adminDashboard').style.display = 'block';
                    document.getElementById('adminGreeting').textContent = `Üdvözöljük, ${username}!`;

                    const dashboardUserImg = document.getElementById('dashboardUserImg');
                    const dashboardUserName = document.getElementById('dashboardUserName');
                    const dropdownUserLabel = document.getElementById('dropdownUserLabel');
                    
                    dashboardUserImg.src = username === 'Ádi' ? 'adi.png' : 'mesi.png';
                    dashboardUserImg.alt = `${username} profilképe`;
                    dashboardUserName.textContent = username;
                    dropdownUserLabel.textContent = username;

                    sessionStorage.setItem('adminLoggedIn', 'true');
                    sessionStorage.setItem('adminUser', username);
                } else {
                    // Hibás bejelentkezés
                    errorMessage.textContent = 'Hibás jelszó!';
                    errorMessage.style.display = 'block';
                    document.getElementById('loginForm').classList.add('shake');
                    setTimeout(() => {
                        document.getElementById('loginForm').classList.remove('shake');
                    }, 500);
                }

            } catch (error) {
                console.error('Hiba a bejelentkezés során:', error);
                errorMessage.textContent = 'Hiba történt a bejelentkezés során. Kérjük, próbálja újra.';
                errorMessage.style.display = 'block';
            } finally {
                loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Belépés';
                loginBtn.disabled = false;
            }
        });

        // Dropdown menü kezelése
        document.addEventListener('DOMContentLoaded', function() {
            const dashboardUser = document.getElementById('dashboardUser');
            const profileDropdown = document.getElementById('profileDropdown');
            
            if (dashboardUser && profileDropdown) {
                // Kattintás a profilra
                dashboardUser.addEventListener('click', function(e) {
                    e.stopPropagation();
                    profileDropdown.classList.toggle('show');
                });
                
                // Kijelentkezés a dropdown menüből
                const logoutDropdownItem = document.getElementById('logoutDropdownItem');
                if (logoutDropdownItem) {
                    logoutDropdownItem.addEventListener('click', function() {
                        if (confirm('Biztosan kijelentkezel?')) {
                            sessionStorage.removeItem('adminLoggedIn');
                            sessionStorage.removeItem('adminUser');
                            document.getElementById('loginScreen').style.display = 'block';
                            document.getElementById('adminDashboard').style.display = 'none';
                            document.getElementById('password').value = '';
                            document.getElementById('passwordStrengthBar').style.width = '0%';
                            document.querySelectorAll('.user').forEach(u => u.classList.remove('selected'));
                            document.getElementById('passwordContainer').style.display = 'none';
                            profileDropdown.classList.remove('show');
                        }
                    });
                }
                
                // Kattintás máshova bezárja a dropdown-ot
                document.addEventListener('click', function() {
                    profileDropdown.classList.remove('show');
                });
                
                // Megakadályozzuk, hogy a dropdownra kattintva bezáródjon
                profileDropdown.addEventListener('click', function(e) {
                    e.stopPropagation();
                });
            }
        });

        // Oldal betöltésekor ellenőrizzük a bejelentkezési állapotot
        window.addEventListener('DOMContentLoaded', function() {
            if (sessionStorage.getItem('adminLoggedIn') === 'true') {
                const username = sessionStorage.getItem('adminUser') || 'Admin';
                document.getElementById('loginScreen').style.display = 'none';
                document.getElementById('adminDashboard').style.display = 'block';
                document.getElementById('adminGreeting').textContent = `Üdvözöljük, ${username}!`;

                const dashboardUserImg = document.getElementById('dashboardUserImg');
                const dashboardUserName = document.getElementById('dashboardUserName');
                const dropdownUserLabel = document.getElementById('dropdownUserLabel');
                
                dashboardUserImg.src = username === 'Ádi' ? 'adi.png' : 'mesi.png';
                dashboardUserImg.alt = `${username} profilképe`;
                dashboardUserName.textContent = username;
                dropdownUserLabel.textContent = username;

                // Automatikus kijelentkezés
                setTimeout(function() {
                    if (sessionStorage.getItem('adminLoggedIn') === 'true') {
                        sessionStorage.removeItem('adminLoggedIn');
                        sessionStorage.removeItem('adminUser');
                        alert('Automatikus kijelentkezés történt inaktivitás miatt.');
                        document.getElementById('loginScreen').style.display = 'block';
                        document.getElementById('adminDashboard').style.display = 'none';
                    }
                }, 30 * 60 * 1000); // 30 perc
            }
        });
        