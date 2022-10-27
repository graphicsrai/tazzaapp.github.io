let content=document.getElementById("content");
console.log(content)
/* home page code starts */
function home()
{
document.title="TazZA | Home"
content.innerHTML=`
<div class="heroContainer">
    <img src="./images/banner-slide/Banner-1.jpg" alt="">
    <div class="left">
        <h1>100% Organic</h1>
        <h2>Fresh & Natural Farm Food</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Tempora, iure. Eaque, deleniti? Eveniet,
            quibusdam.</p>
        <button class="btn">ALL PRODUCTS</button>
    </div>
</div>

<!-- Cards -->
<div class="cards">
    <div class="card">
        <div class="cardicon">
            <i class="fa-regular fa-id-badge"></i>
        </div>
        <h2>24/07 Support</h2>
    </div>
    <div class="card">
        <div class="cardicon">
            <i class="fa-solid fa-truck-fast"></i>
        </div>
        <h2>Free Shipping</h2>
    </div>
    <div class="card">
        <div class="cardicon">
            <i class="fa-solid fa-wheat-awn"></i>
        </div>
        <h2>Fresh & Healthy</h2>
    </div>
    <div class="card">
        <div class="cardicon">
            <i class="fa-solid fa-tractor"></i>
        </div>
        <h2>From our farm</h2>
    </div>
</div>

<!-- -------------- -->
<!-- about section -->
<section id="about" class="aboutSection">
    <img src="./images/about/about-banner.jpg" alt="">
    <div class="leftAbout">
        <h2>We Providing Services Since 1841 With Proud.</h2>
        <p class="firstLine">The Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reiciendis tenetur
            voluptas.</p>
        <p class="secondline">The Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reiciendis tenetur
            voluptas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus ipsam magnam aspernatur quasi
            quia! Deserunt quas hic assumenda, in voluptatibus molestiae amet dolorum, error porro aliquid officiis non
            repellat libero.</p>
        <p class="lastline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia labore animi voluptates odit,
            explicabo nam rem adipisci cum.</p>
        <button class="btn" onclick="about()">READ MORE</button>
    </div>
</section>
<!-- best selling products -->
<section class="bestSelling">
    <h1>Our Best Selling Products</h1>
    <p>The passage Experianced A Surge in Popularity During The 1960s When <br> Again During The 90s AS Desktop
        Publishers</p>
    <div class="products">
        <div class="product" onmouseover="viewProduct()" onmouseout="viewProductout()">
            <img src="./images/products/product-1.jpg" alt="">
            <div class="price">
                <h2>Musk Melon</h2>
                <p>$1 KG</p>
            </div>
            <div class="viewbutton">
                <button class="btn">VIEW PRODUCTS</button>
            </div>
        </div>
        <div class="product" onmouseover="viewProduct2()" onmouseout="viewProductout2()">
            <img src="./images/products/product-2.jpg" alt="">
            <div class="price">
                <h2>Orange</h2>
                <p>$1 KG</p>
            </div>
            <div class="viewbuttonP2">
                <button class="btn">VIEW PRODUCTS</button>
            </div>
        </div>

        <div class="product" onmouseover="viewProduct3()" onmouseout="viewProductout3()">
            <img src="./images/products/product-3.jpg" alt="">
            <div class="price">
                <h2>Apple</h2>
                <p>$1 KG</p>
            </div>
            <div class="viewbuttonP3">
                <button class="btn">VIEW PRODUCTS</button>
            </div>
        </div>
        <div class="product" onmouseover="viewProduct4()" onmouseout="viewProductout4()">
            <img src="./images/products/product-4.jpg" alt="">
            <div class="price">
                <h2>Dradon</h2>
                <p>$1 KG</p>
            </div>
            <div class="viewbuttonP4">
                <button class="btn">VIEW PRODUCTS</button>
            </div>
        </div>
    </div>
</section>

<!-- Product session ends -->
<!-- Testimonial session  -->
<section class="testimonial">
    <h1>Our Happy Customers</h1>
    <p>The passage Experianced A Surge in Popularity During The 1960s When <br> Again During The 90s AS Desktop
        Publishers</p>
    <div class="testimonial1">

        <div class="lefttest">
            <img src="./images/testimonial/testimonial-1.png">
        </div>
        <div class="righttest">
            <p>Not only was customer support very fast, but the dsign is <br> very peofessional. Will definitely be
                looking for new <br> products in the future from this author.</p>
            <h2>Jecob Oramson</h2>
            <p class="happy">Happy Customers</p>
            <img src="./images/testimonial/qoutes.svg" alt="">
        </div>
    </div>
</section>
<!-- Testimonial session ends -->

<section class="gallery">
    <h1>Our Gallery</h1>
    <p>The passage Experianced A Surge in Popularity During The 1960s When <br> Again During The 90s AS Desktop
        Publishers</p>
    <div class="galitems">
        <div class="one">
            <div class="item"><img src="./images/gallery/g-1.jpg" alt=""></div>
        <div class="item"><img src="./images/gallery/g-2.jpg" alt=""></div>
        <div class="item"><img src="./images/gallery/g-3.jpg" alt=""></div>
        </div>
        <div class="two">
            <div class="item"><img src="./images/gallery/g-4.jpg" alt=""></div>
        <div class="item"><img src="./images/gallery/g-5.jpg" alt=""></div>
        <div class="item"><img src="./images/gallery/g-6.jpg" alt=""></div>
        </div>
    </div>
    <button class="btn">VIEW MORE</button>
</section>

`
}
<!-- functions for product view -->
function viewProduct(){
var view = document.getElementsByClassName("viewbutton");
view[0].className="viewbutton2"

}
function viewProductout(){
var view = document.getElementsByClassName("viewbutton2");
view[0].className="viewbutton"

}
function viewProduct2(){
var view = document.getElementsByClassName("viewbuttonP2");
view[0].className="viewbutton2"

}
function viewProductout2(){
var view = document.getElementsByClassName("viewbutton2");
view[0].className="viewbuttonP2"

}
function viewProduct3(){
var view = document.getElementsByClassName("viewbuttonP3");
view[0].className="viewbutton2"

}
function viewProductout3(){
var view = document.getElementsByClassName("viewbutton2");
view[0].className="viewbuttonP3"

}
function viewProduct4(){
var view = document.getElementsByClassName("viewbuttonP4");
view[0].className="viewbutton2"

}
function viewProductout4(){
var view = document.getElementsByClassName("viewbutton2");
view[0].className="viewbuttonP4"

}

<!-- functions for product view ENDS -->

/* home page code ends */
function about()
{
content.innerHTML=`<div class="aboutpage" id="about">
    <div class="heroContainer">
        <img src="./images/banner-slide/top-banner.jpg" alt="">
        <div class="left">
            <h1>About Us</h1>
        </div>
    </div>
</div>
<section class="aboutUs">
    <h2>About Us</h2>
    <p>This is one of the Unique Products which is an excellent thirst beverage <br> and provides relief in the strong summer season.</p>
    <div class="AboutContect">
        <div class="leftside">
            <img src="./images/about/about-img.jpg" alt="">
        </div>
        <div class="rightside">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.neque distinctio quas dignissimos minima consequatur placeat non reiciendis fuga alias corporis possimus veniam, asperiores sunt omnis. Dolore ducimus dolorem fuga minima veritatis consectetur nam, voluptatibus quo praesentium error vel, sed laborum dolorum autem magnam obcaecati saepe sint quaerat eos consequatur. At deserunt voluptas earum facilis omnis vero officiis nostrum modi consequatur tempora autem doloribus, laboriosam dicta, perspiciatis obcaecati pariatur fuga ipsum blanditiis beatae!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maxime quaerat ut dolorem quis, ad nam dolore a facere praesentium recusandae assumenda soluta cumque temporibus perferendis voluptatibus veniam eligendi eum quidem qui tenetur asperiores, quisquam in debitis! Veniam ab neque mollitia explicabo, autem quidem consequatur, provident, libero fuga dolorum velit.</p>
        </div>
    </div>
    <div class="AboutContect">
        <div class="leftside">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.neque distinctio quas dignissimos minima consequatur placeat non reiciendis fuga alias corporis possimus veniam, asperiores sunt omnis. Dolore ducimus dolorem fuga minima veritatis consectetur nam, voluptatibus quo praesentium error vel, sed laborum dolorum autem magnam obcaecati saepe sint quaerat eos consequatur. At deserunt voluptas earum facilis omnis vero officiis nostrum modi consequatur tempora autem doloribus, laboriosam dicta, perspiciatis obcaecati pariatur fuga ipsum blanditiis beatae!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maxime quaerat ut dolorem quis, ad nam dolore a facere praesentium recusandae assumenda soluta cumque temporibus perferendis voluptatibus veniam eligendi eum quidem qui tenetur asperiores, quisquam in debitis! Veniam ab neque mollitia explicabo, autem quidem consequatur, provident, libero fuga dolorum velit.</p>
        </div>
        <div class="rightside">
          <img src="./images/about/about-img.jpg" alt="">
        </div>
    </div>
</section>
`
document.title="TazZA | About"
}
function product()
{
content.innerHTML=`
<div class="productpage" id="product">
    <div class="heroContainer">
        <img src="./images/banner-slide/top-banner.jpg" alt="">
        <div class="left">
            <h1>Product</h1>
        </div>
    </div>
</div>
<section class="OurProducts">
   <div class="bestseller">
    <h1>Our Best Seller Product</h1>
    <p>The passage Experianced A Surge in Popularity During The 1960s When <br> Again During The 90s AS Desktop
        Publishers</p>
   </div>

   <div class="buyproducts">
    <div class="buyleft">
        <img src="./images/products/fresh-fruits2.jpg" alt="">
    </div>

    <div class="buyright">
        <h1>Pure Lemon Juice</h1>
        <p>Ready to use Pure, Natural, and Fresh Lemon Juice Concentrate in lemon shape bottle of 14 Lemons & 30 <br>
        Lemons, No Need to Buy costly Lemons Anymore. Then cut and Squeeze & store them, just Bring!</p>
        <p>Easy to use and easy to carry, just squeeze it to use it.99.90% Lemon juice concentrate, no added sugar or anything.</p>
        <h2>Uses of Nimboo Ras</h2>
        <p>Use in all your cooking, use in all types of drinks, with Green Tea, with Warm Water.</p>
        <h2>Benifites Of Nimboo Ras</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque dicta corporis animi fuga minima autem, provident impedit Iure doloremque dicta corporis animi fuga minima autem, provident impedit molestiae dolorem...</p>
            <button class="btn">BUY NOW</button>
    </div>
   </div>


   <div class="buyproducts">
    <div class="buyleft">
        <h1>Pure Orange Juice</h1>
        <p>Ready to use Pure, Natural, and Fresh Lemon Juice Concentrate in lemon shape bottle of 14 Lemons & 30 <br>
        Lemons, No Need to Buy costly Lemons Anymore. Then cut and Squeeze & store them, just Bring!</p>
        <p>Easy to use and easy to carry, just squeeze it to use it.99.90% Lemon juice concentrate, no added sugar or anything.</p>
        <h2>Uses of Nimboo Ras</h2>
        <p>Use in all your cooking, use in all types of drinks, with Green Tea, with Warm Water.</p>
        <h2>Benifites Of Nimboo Ras</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque dicta corporis animi fuga minima autem, provident impedit Iure doloremque dicta corporis animi fuga minima autem, provident impedit molestiae dolorem...</p>
            <button class="btn">BUY NOW</button>
       
    </div>

    <div class="buyright">
        <img src="./images/products/fresh-fruits1.jpg" alt="">
    </div>

    
   </div>


</section>
`
document.title="TazZA | Product"
}
function gallery()
{
content.innerHTML=`
<div class="gallerypage" id="gallery">
    <div class="heroContainer">
        <img src="./images/banner-slide/top-banner.jpg" alt="">
        <div class="left">
            <h1>Gallery</h1>
        </div>
    </div>
</div>
<section class="ourgallery">
    <div class="bestseller">
        <h1>Our Gallery</h1>
        <p>The passage Experianced A Surge in Popularity During The 1960s When <br> Again During The 90s AS Desktop
            Publishers</p>
       </div>

       <div class="galleryitems">
        <div class="row">
            <div class="item"><img src="./images/gallery/g-1.jpg" alt=""></div>
            <div class="item"><img src="./images/gallery/g-2.jpg" alt=""></div>
            <div class="item"><img src="./images/gallery/g-3.jpg" alt=""></div>
        </div>
        <div class="row">
            <div class="item"><img src="./images/gallery/g-4.jpg" alt=""></div>
            <div class="item"><img src="./images/gallery/g-5.jpg" alt=""></div>
            <div class="item"><img src="./images/gallery/g-6.jpg" alt=""></div>
        </div>
        <div class="row">
            <div class="item"><img src="./images/gallery/g-7.jpg" alt=""></div>
            <div class="item"><img src="./images/gallery/g-8.jpg" alt=""></div>
            <div class="item"><img src="./images/gallery/g-9.jpg" alt=""></div>
        </div>
       </div>
</section>
`
document.title="TazZA | Gallery"
}
function contactPage()
{
content.innerHTML=`
<div class="contactpage" id="contact">
    <div class="heroContainer">
        <img src="./images/banner-slide/top-banner.jpg" alt="">
        <div class="left">
            <h1>Contact Us</h1>
        </div>
    </div>
</div>

<section class="getincouch">
    <div class="bestseller">
        <h1>Get In Touch</h1>
        <p>The passage Experianced A Surge in Popularity During The 1960s When <br> Again During The 90s AS Desktop
            Publishers</p>
       </div>

       <div class="form">
        <div class="formleft">
            <div class="col">
                <input type="text" placeholder="Your Name *">
                <input type="text" placeholder="Your Email *">
            </div>
            <div class="col">
                <input type="text" placeholder="Your Address *">
                <input type="text" placeholder="Your Phone *">
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea><br>
            <button class="btn">SEND MESSAGE</button>
        </div>
        <div class="formright">
            <div class="cont">
                <p>Any Questions? Call us</p>
            <h2><i class="fa-solid fa-phone"></i>  +91 991 561 4693</h2>
            </div>
            <div class="cont">
                <p>Any Questions? Email us</p>
            <h2><i class="fa-solid fa-envelope"></i>  info@example.com</h2>
            </div>
        </div>
        
       </div>
</section>
`
document.title="TazZA | Contact"
}
home();