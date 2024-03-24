<template>
  <div class="contact-page">
    <div class="background-image"></div>
    <div class="contact-form">
      <h2>Write Us!</h2>
      <form action="https://formspree.io/f/xyyrpzdo" method="POST">
        <div class="form-group">
          <label for="fullname">Full Name:</label>
          <input type="text" id="fullname" name="fullname" placeholder="Your Full Name" required>
        </div>
        <div class="form-group">
          <label for="email">Email Address:</label>
          <input type="email" id="email" name="email" placeholder="Your Email Address" required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" placeholder="Message Us" required></textarea>
        </div>
        <div class="send-message">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://i.ibb.co/s2SRGkP/mohammad-dadkhah-h33si-B2533-Y-unsplash.jpg');
  background-size: cover;
  z-index: -1;
}

.contact-form {
  max-width: 500px;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
}

.contact-form h2 {
  text-align: center;
  color: #fff;
}

.contact-form .form-group {
  margin-bottom: 1rem;
}

.contact-form label {
  color: #fff;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.5rem;
  background-color: transparent;
  border: none;
  border-left: 3px solid transparent;
  border-bottom: 1px solid #fff;
  color: #fff;
  margin-top: 5px;
}

.contact-form textarea {
  resize: vertical;
}

.contact-form .send-message {
  margin-top: 20px;
  text-align: center;
}

.contact-form button {
  padding: 0.75rem 1rem;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.contact-form button:hover {
  background-color: #0056b3;
}
</style>
