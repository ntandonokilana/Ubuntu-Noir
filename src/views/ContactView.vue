<template>
  <div class="contact-body">
    <div class="contact-form">
      <h2>Write Us!</h2>
      <form action="https://formspree.io/f/xyyrpzdo" method="POST">
        <label for="fullname">Full Name:</label>
        <input type="text" id="fullname" name="fullname" placeholder="Your Full Name" required>
        <label for="email">Email Address:</label>
        <input type="email" id="email" name="email" placeholder="Your Email Address" required>
        <label for="message">Message:</label>
        <textarea id="message" name="message" placeholder="Message Us" required></textarea>
        <div class="send-message">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
  .contact-body {
    background-image: url('https://i.ibb.co/x2yfXc5/vintage-photography.jpg'); /* change this to a high resolution picture it is pixlated*/
    background-size: cover;
    background-position: center;
    padding-top: 100px; /* Adjust this value to create space between navbar and body */
  }

  .contact-form {
    padding: 50px;
    max-width: 400px;
    margin: 0 auto;
    border-radius: 30px;
  }

  .contact-form h2 {
    text-align: center;
    color: #000000;
  }

  .contact-form form label {
    display: block;
    margin-bottom: 10px;
    color: #000000;
  }

  .contact-form form input[type="text"],
  .contact-form form input[type="email"],
  .contact-form form textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid black; 
    border-radius: 0; 
    outline: none;
  }

  .contact-form form textarea {
    height: 100px;
  }

  .contact-form form button {
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #000000;
    cursor: pointer;
  }

  .contact-form form button:hover {
    background-color: #4e563e;
  }
</style>
