<template>
  <div class="about">
    <div class="container">
      <div class="about-content">
        <h1>Our Story</h1>
        <p>Welcome to Ubuntu Noir, your premier destination for photography and filmmaking
           enthusiasts. At Ubuntu Noir, we're passionate about empowering individuals to unleash 
           their creativity and bring their visual storytelling to life.
        </p>
        <h5>What Sets Us Apart:</h5>
        <p>
          <strong>Comprehensive Product Selection:</strong> From cameras and lenses to lighting equipment and set props, we 
          offer a diverse range of high-quality products to suit every budget and skill level.
          <br>
          <strong>Affordable Alternatives:</strong>In addition to new products, we provide budget-friendly alternatives, 
          refurbished items, and second-hand products for sale or rental, promoting accessibility and sustainability within the industry.
          <br>
          <strong>Community Engagement:</strong> We foster a vibrant and supportive community through user reviews, discussion forums, 
          educational resources, and interactive elements, encouraging knowledge sharing and collaboration among photographers and filmmakers.
          <br>
          <strong>Sustainability Initiatives:</strong> Committed to environmental responsibility, we incorporate eco-friendly practices such 
          as using recycled packaging materials and partnering with environmentally responsible suppliers to reduce our carbon footprint.
          <br><br>
          <strong>Join the Ubuntu Noir Community:</strong>
          Whether you're a seasoned professional or an aspiring enthusiast, Ubuntu Noir is here to support your 
          creative journey. Join our community today and discover a world of inspiration, innovation, and collaboration.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://i.ibb.co/3hg48tn/Untitled-design-4.png');
}

.container {
  max-width: 800px;
  padding: 20px;
}

.about-content {
  opacity: 0;
  animation-name: slide-in;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  color: aliceblue;
}

@keyframes slide-in {
  0% {
    transform: translateX(-50%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>