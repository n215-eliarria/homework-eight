var homeContent =`<div class="homeContent">
<div class="hero">
  <div class="text-holder">
      <div class="text-head">
      <h1>Decorating Ideas</h1>
      <p>"Home is Where The Heart Is." Expressing Creativity
        Since 1994.</p>
        <span>Our Blog</span>
      </div>
      </div>
      <div class="foot">
        <p>Copyright PrettierRooms 1994 </p>
      </div>
  </div>
</div>`;
var blogContent =`    <div class="blogContent">
<div class="left2">
    <div class="box">
        <div class="pic1"></div>
        <div class="pic2"></div>
    </div>
</div>
<div class="right2">
    <div class="word-holder">
    <h1>Blog Entry #1:</h1>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt tortor aliquam nulla facilisi. Mattis nunc sed blandit libero. Consequat mauris nunc congue nisi vitae suscipit tellus. Risus sed vulputate odio ut enim. Lorem dolor sed viverra ipsum nunc aliquet. Enim ut tellus elementum sagittis vitae et leo duis ut. Turpis egestas integer eget aliquet nibh. Id diam vel quam elementum. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Massa placerat duis ultricies lacus. Nullam ac tortor vitae purus."
    </p>
</div>
<div class="word-holder">
    <h1>Blog Entry #2:</h1>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt tortor aliquam nulla facilisi. Mattis nunc sed blandit libero. Consequat mauris nunc congue nisi vitae suscipit tellus. Risus sed vulputate odio ut enim. Lorem dolor sed viverra ipsum nunc aliquet. Enim ut tellus elementum sagittis vitae et leo duis ut. Turpis egestas integer eget aliquet nibh. Id diam vel quam elementum. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Massa placerat duis ultricies lacus. Nullam ac tortor vitae purus."
    </p>
</div>
</div>
</div>`;
var aboutContent =`    <div class="aboutContent">
<div class="left"></div>
<div class="right">
    <div class="word-holder">
    <h1>About Us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim facilisis gravida neque convallis a. Tincidunt vitae semper quis lectus nulla at volutpat diam. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. At consectetur lorem donec massa sapien faucibus et molestie ac. Euismod in pellentesque massa placerat duis ultricies lacus. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Nisl tincidunt eget nullam non. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Amet consectetur adipiscing elit ut aliquam purus sit amet. Convallis convallis tellus id interdum. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse.
    </p>
</div>
</div>
</div>`;
var contactContent =`<div class="contactContent">
<div class="left">
    </div>
    <div class="right">
        <div class="word-holder">
            <h1>Contact Us</h1>
    </div>
    <div class="form-holder">
        <div class="form">
            <label for="">Name:</label>
            <input type="text">
        </div>
        <div class="form">
            <label for="">Email:</label>
            <input type="text">
        </div>
        <div class="form">
            <label for="">Phone:</label>
            <input type="text">
        </div>

        <span>submit</span>

    </div>
    </div>
</div>`;



function initListeners() {

    $("nav .links a").on("click", function (e) {
      let btnID = e.currentTarget.id;
      let pageContentID = btnID + "Content";
      changePageContent(pageContentID);
    });
  }

function changePageContent(pageContentVarName){
    $("#app").html(eval(pageContentVarName));

}

$(document).ready(function () {
    changePageContent("homeContent");
    initListeners();
});