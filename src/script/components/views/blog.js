const blog = {
  async render() {
    return `
    
        <h1>hello world</h1>
        <div class="container">
        <div class="card" style="width: 18rem;">
          <img src="./asset/ilham.png" class="card-img-top" alt="Your Photo">
          <div class="card-body">
            <h5 class="card-title">Your Name</h5>
            <p class="card-text">Position</p>
            <a href="https://github.com/your-github-profile" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://twitter.com/your-twitter-profile" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://www.facebook.com/your-facebook-profile" target="_blank"><i class="fab fa-facebook"></i></a>
          </div>
        </div>
      </div>
        `;
  },
  async afterRender() {
    //
  },
};

export default blog;