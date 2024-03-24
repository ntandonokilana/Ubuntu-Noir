<template>
    <nav class="navbar">
        <div class="logo">
            <img src="https://i.ibb.co/KmqZT2r/ubuntu.png" alt="Logo" class="logo-img">
        </div>
        <div class="nav-links">
            <router-link to="/" class="nav-link">Home</router-link> |
            <router-link to="/about" class="nav-link">About</router-link> |
            <router-link to="/products" class="nav-link">Gear</router-link> |
            <router-link to="/contact" class="nav-link">Contact</router-link> |
            <router-link to="/admin" class="nav-link">Admin</router-link>
            <router-link to="/users" class="nav-link">Users</router-link>
        </div>
        <div class="nav-icons">
            <router-link to="/checkout" class="nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                </svg>
            </router-link>
            <router-link to="/signup" class="nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
                </svg>
            </router-link>
        </div>
    </nav>
</template>

<style>
.navbar {
    background-color: #000000;
    padding: 10px; /* Adjust padding */
    display: flex;
    justify-content: space-between; /* Align items to the ends */
    align-items: center; /* Center items vertically */
}

.nav-links {
    display: flex;
}

.nav-link {
    color: #ffffff; 
    text-decoration: none;
    margin: 0 10px;
    padding: 5px 10px;
    transition: color 0.3s ease, background-color 0.3s ease; /* Transition effects for color and background-color */
}

.nav-link:hover {
    color: #181616; 
    background-color: #ffffff; 
    border-radius: 5px; 
}

.logo-img {
    width: 50px; /* Adjust the width to make the logo smaller */
}

.nav-icons {
    display: flex;
}

.nav-icon {
    color: #ffffff;
    text-decoration: none;
    margin: 0 10px;
    padding: 5px;
    transition: color 0.3s ease;
}

.nav-icon:hover {
    color: #181616; 
}
</style>