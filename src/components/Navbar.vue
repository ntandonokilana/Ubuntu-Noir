<template>
    <nav class="navbar">
      <div class="logo">
        <!-- Add your logo image here -->
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link> |
        <router-link to="/about" class="nav-link">About</router-link> |
        <router-link to="/products" class="nav-link">Gear</router-link> |
        <router-link to="/checkout" class="nav-link">Checkout</router-link> |
        <router-link to="/contact" class="nav-link">Contact</router-link> |
        <router-link to="/admin" class="nav-link">Admin</router-link> |
        <router-link to="/signup" class="nav-link">Sign Up</router-link> 

      </div>
    </nav>
  </template>
  
  <style>
  .navbar {
    background-color: #000000;
    padding: 10px 0; 
    text-align: center;
  }
  
  .nav-links {
    display: flex;
    justify-content: center;
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
  
  .logo {
    width: auto;
  }
  </style>