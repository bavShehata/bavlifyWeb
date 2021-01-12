<!-- ############################### Contact Form ############################### -->
<?php
    if(isset($_POST['submit']))
    {
        $to = "BavShehata@gmail.com";
        $subject = $_POST['subject'];
        $txt = "My name is " . $_POST['fName'] . " " . $_POST['lName'] . " and my message is
        " . $_POST['message'] ;
        $headers = "From: " . filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

        mail($to,$subject,$txt,$headers);
        header('location: success.html');
    }
?>
<html lang="en-us">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="bavlify Web is a website that gives you the opportunity to create your web presence by attracting visitors with a clean website that promotes you online"
    />
    <!-- <script type="text/javascript">
      (function () {
        var css = document.createElement("link");
        css.href = "https://use.fontawesome.com/releases/v5.1.0/css/all.css";
        css.rel = "stylesheet";
        css.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(css);
      })();
    </script> -->

    <meta name="author" content="Bavly Shehata" />
    <!-- <link rel="preload" href="/style/style.css" as="style">
    <link rel="stylesheet" href="/style/style.css" media="print" onload="this.media='all'"> -->
    <link rel="stylesheet" type="text/css" href="/style/style.css" />
    <link href="https://fonts.googleapis.com/css2?family=Creepster&family=Eater&display=swap" rel="stylesheet">
    <link rel="icon" href="/favicon.png" />
    <title>Front-End Web Development | Bavlify Web</title>
  </head>
  <body>
    <!-- ############################### Header ############################### -->
    <header>
      <a href="/" id="logo">
        <img src="/img/logo.png" alt="Logo" />
        <h2>Bavlify Web</h2>
      </a>
      <nav>
        <ul>
          <li id="ham-btn">
            <a href="javascript:void(0);" class="icon" onclick="showNav()">
              <i class="fa fa-bars"></i>
            </a>
          </li>
          <li class="active"><a href="#homepage">home</a></li>
          <li><a href="#services">services</a></li>
          <li><a href="#portfolio">portfolio</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
    </header>
    <!-- ############################### Homepage ############################### -->
    <main>
        <button class="btn" id="theme">Halloween!</button>
      <a href="" class="btn" id="scrollTop"
        ><i class="fas fa-arrow-alt-circle-up fa-2x"></i
      ></a>
      <section id="homepage">
        <div class="big-img"></div>
        <div class="text container">
          <h1>Create your web presence</h1>
          <h4>
            Attract visitors with a clean website that promotes you online
          </h4>
          <a href="#services" class="btn">go online</a>
        </div>
      </section>
      <!-- ############################### Services ############################### -->
      <section id="services">
        <div id="servicesBeginning">
          <h1>Services</h1>
        </div>
        <div class="container" id="servicesBeginning">
          <div class="grid">
            <div class="card" id="basic">
              <h3>Basic Web Development Service</h3>
              <p>No hosting</p>
              <ul>
                <li class="flat-price">99.99</li>
                <li>Semantic HTML</li>
                <li>HTML + CSS + JavaScript</li>
                <li>cross-browser compatibillity</li>
                <li>UI/UX Design</li>
                <li>Responsive Design</li>
                <li class="none">Custom Design (No Templates)</li>
                <li class="none">5 pages max</li>
                <li class="none">1 form</li>
                <li class="pay">
                  <form
                    action="https://www.paypal.com/cgi-bin/webscr"
                    method="post"
                    target="_top"
                  >
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input
                      type="hidden"
                      name="hosted_button_id"
                      value="JGHWTB8KDVTQW"
                    />
                    <input
                      type="image"
                      src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
                      border="0"
                      name="submit"
                      alt="PayPal - The safer, easier way to pay online!"
                    />
                    <img
                      alt=""
                      border="0"
                      src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                      width="1"
                      height="1"
                    />
                  </form>
                </li>
              </ul>
            </div>
            <div class="card" id="standard">
              <h3>Standard Web Development Service</h3>
              <p>No hosting</p>
              <ul>
                <li class="flat-price">179.99</li>
                <li>semantic HTML</li>
                <li>HTML + CSS + JavaScript</li>
                <li>cross-browser compatibillity</li>
                <li>UI/UX Design</li>
                <li>Responsive Design</li>
                <li class="unique">SEO optimization</li>
                <li class="none">Custom Design (No Templates)</li>
                <li class="none">10 pages max</li>
                <li class="none">2 forms</li>
                <li class="pay">
                  <form
                    action="https://www.paypal.com/cgi-bin/webscr"
                    method="post"
                    target="_top"
                  >
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input
                      type="hidden"
                      name="hosted_button_id"
                      value="8MTA6AZALZVBU"
                    />
                    <input
                      type="image"
                      src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
                      border="0"
                      name="submit"
                      alt="PayPal - The safer, easier way to pay online!"
                    />
                    <img
                      alt=""
                      border="0"
                      src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                      width="1"
                      height="1"
                    />
                  </form>
                </li>
              </ul>
            </div>
            <div class="card" id="premium">
              <h3>Premium Web Development Service</h3>
              <p>No hosting</p>
              <ul>
                <li class="flat-price">249.99</li>
                <li>semantic HTML</li>
                <li>HTML + CSS + JavaScript</li>
                <li>cross-browser compatibillity</li>
                <li>UI/UX Design</li>
                <li>Responsive Design</li>
                <li class="unique">SEO optimization</li>
                <li class="none">Custom Design (No Templates)</li>
                <li class="none">15 pages max</li>
                <li class="none">3 forms</li>
                <li class="pay">
                  <form
                    action="https://www.paypal.com/cgi-bin/webscr"
                    method="post"
                    target="_top"
                  >
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input
                      type="hidden"
                      name="hosted_button_id"
                      value="ZC8TND76UL5R2"
                    />
                    <input
                      type="image"
                      src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
                      border="0"
                      name="submit"
                      alt="PayPal - The safer, easier way to pay online!"
                    />
                    <img
                      alt=""
                      border="0"
                      src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                      width="1"
                      height="1"
                    />
                  </form>
                </li>
              </ul>
            </div>
            <div class="cross"></div>
            <div id="customServices">
              <h2>General Packages? Do you really want that?</h2>
              <p>
                I am sure you've seen that format before. Different packages for
                different needs? If that's what you want, then I would be more
                than eager to help you. <b>BUT</b> you probably need a
                personally customized package, one that was tailored just for
                you? maybe you need more pages but not as many forms? How about
                <a class="hosting">hosting and maintenance?</a>
                Perhaps you want something more than what these packages offer?
                I believe every project is unique and should be treated that
                way, so how about
                <a href="#contact">telling me exactly what you want?</a>
                and I will get back to you ASAP!
              </p>
              <h4>You'd rather choose one of the packages instead?</h4>
              <a href="#servicesBeginning"
                ><button class="btn" id="showPackages">
                  Show me the packages
                </button></a
              >
            </div>
          </div>
          <a href="#servicesBeginning"
            ><button class="btn" id="showCustomServices">
              Can't find a suitable package?
            </button></a
          >
          <div class="hostingService">
            <h4>
              Do you already have a website but you are looking for hosting and
              maintenance?<br />
              <a href="/hosting/hosting.html">Let me show you how I can help</a>
            </h4>
          </div>
          <!-- ############################### Definitions ############################### -->
          <div id="definitions">
            <div class="blurBackground"></div>
            <div class="container">
              <div id="semanticDef">
                <h3>What Is Semantic HTML?</h3>
                <p>
                  An important principle in web design is the idea of using HTML
                  elements to indicate what they actually are, rather than how
                  they may appear in the browser by default. This is known as
                  using semantic HTML.
                </p>
                <h3>Why is it important?</h3>
                <p>
                  The benefit of writing semantic HTML stems from what should be
                  the driving goal of any web page: the desire to communicate.
                  By adding semantic tags to your document, you provide
                  additional information about that document, which aids in
                  communication. Specifically, semantic tags make it clear to
                  the browser what the meaning of a page and its content is.
                  <i
                    >That clarity is also communicated with
                    <b>search engines</b>, ensuring that the right pages are
                    delivered for the right queries</i
                  >
                </p>
                <a
                  href="https://www.lifewire.com/why-use-semantic-html-3468271"
                  target="_blank"
                  >Credits: www.lifewire.com/</a
                >
                <button class="btn">Close</button>
              </div>
              <div id="langaugesDef">
                <h3>What are HTML, CSS, and JavaScript?</h3>
                <p>
                  These are just the languages I will be using to make your
                  website.
                </p>
                <p class="center">An overview</p>
                <ul>
                  <li>
                    <b>HTML</b> provides the basic structure of sites, which is
                    enhanced and modified by other technologies like CSS and
                    JavaScript.
                  </li>
                  <li>
                    <b>CSS</b> is used to control presentation, formatting, and
                    layout.
                  </li>
                  <li>
                    <b>JavaScript</b> is used to control the behavior of
                    different elements.
                  </li>
                </ul>
                <a
                  href="https://blog.hubspot.com/marketing/web-design-html-css-javascript#:~:text=HTML%20provides%20the%20basic%20structure%20of%20sites%2C%20which,used%20to%20control%20the%20behavior%20of%20different%20elements"
                  target="_blank"
                  >Credits: blog.hubspot.com/</a
                >
                <button class="btn">Close</button>
              </div>
              <div id="browserDef">
                <h3>What is Cross-Browser Compatibillity?</h3>
                <img
                  src="/services/img/browsers.jpg"
                  alt="different browsers"
                />
                <p>
                  Cross-browser compatibility is “the ability of a website or
                  web application to function across different browsers and
                  degrade gracefully when browser features are absent or
                  lacking.” Basically, cross-browser compatibility just means
                  making sure that your website works no matter what browser a
                  visitor to your site is using.
                </p>
                <h3>Is this really important?</h3>
                <p>
                  Actually, yes it is. As shown in the following chart, even
                  though about two thirds of people worldwide use google chrome,
                  the other third (containing potential visitors to your
                  website) come from all different browsers like Safari and
                  Firefox; and ensuring that they will equally access all the
                  features of your website is my job
                </p>
                <img
                  src="/services/img/browsersChart.jpg"
                  alt="A chart showing usage of different browsers"
                />
                <a
                  href="https://blog.flowstatemarketing.com/what-is-cross-browser-compatibility-and-why-is-it-so-important"
                  target="_blank"
                  >Credits: blog.flowstatemarketing.com/</a
                >
                <button class="btn">Close</button>
              </div>
              <div id="userDef">
                <h3>What does user-friendly mean?</h3>
                <p>
                  It is the art of making a website simple and easy to use; make
                  it effortless for your users to use your website, and they
                  will stay; make it difficult, and they will leave. Some of the
                  most basic example of user-friendliness include proper use of
                  taglines, intuitive navigation, concise content, and strategic
                  use of visuals. Avoid confusing features or functionality. Do
                  links and buttons appear clickable, as they should? Does the
                  website flow logically? Is it abundantly clear where important
                  information can be found? If not, your website is not
                  user-friendly.
                </p>
                <!-- <img
                  src="/services/img/userFriendly.gif"
                  alt="what does user-friendly mean?"
                /> -->
                <video autoplay loop muted>
                  <source
                    type="video/webm"
                    src="/services/img/userFriendly.webm"
                  />
                </video>
                <h3>Why is this important?</h3>
                <p>
                  Research conducted by <b>HubSpot.com</b> reveals that when
                  asked about the most important factor in a website, over 75%
                  of respondents stated they rank ease of finding the
                  information at the top. If you construct your website in a
                  manner that’s too complicated to navigate, produce content too
                  difficult to comprehend, or design functionality too
                  cumbersome to use, your website will not meet its objectives,
                  and you will lose business.
                </p>
                <img
                  src="/services/img/userFriendlyChart.png"
                  alt="A chart that shows the importance of user-friendliness"
                />
                <a
                  href="https://www.intechnic.com/blog/what-makes-a-website-user-friendly/"
                  target="_blank"
                  >Credits: intechnic.com</a
                >
                <button class="btn">Close</button>
              </div>
              <div id="responsiveDef">
                <h3>What is responsivity?</h3>
                <p>
                  Responsive web design is a relatively new way of approaching
                  website design that ensures that a website looks good on all
                  devices. On responsive websites, the same information and page
                  elements appear no matter what device you’re on, but the way
                  they’re sized and organized will change based on your screen
                  size. The website adapts (or responds) to the smaller screen
                  size of smartphones and tablets to provide an intuitive
                  experience, regardless of your device.
                  <i
                    >An adaptive design and flexible layout provides a better
                    <b>user experience</b> for your visitors and also helps to
                    boost your search engine optimization value</i
                  >.
                </p>
                <img
                  src="/services/img/responsive.jpg"
                  alt="Example of Responsive Design"
                />
                <h3>Why is it important?</h3>
                <p>
                  Responsivity is very important since according to the
                  following chart, more than half the users surf the internet on
                  a mobile device where nearly the same amount uses desktop.
                  Giving both users great experience is vital for your
                  business/goal. Another important reason is that Google itself
                  said that having a responsive website can help showing your
                  website on the first webpages of its search engine, giving you
                  more of a chance to be known. <br />
                </p>
                <a
                  href="https://www.hostgator.com/blog/what-is-responsive-web-design/#post-21474:~:text=5%20Reasons%20You%20Should%20Use%20Responsive,a%20relatively%20consistent%20experience%20across%20devices."
                  target="_blank"
                  >More reasons why responsivity is REALLY important</a
                >
                <img
                  src="/services/img/responsiveChart.jpg"
                  alt="A chart showing the imporance of responsivity"
                />
                <a
                  href="https://www.hostgator.com/blog/what-is-responsive-web-design/"
                  target="_blank"
                  >Credits: hostgator.com</a
                >
                <button class="btn">Close</button>
              </div>
              <div id="SEODef">
                <h3>What is SEO?</h3>
                <p>
                  SEO (Search Engine Optimization) is the act of trying to push
                  a website <i>higher up in a search engine's results</i> by
                  twearking particular factors known to affect search engine
                  results. Successful SEO can make certain pages more attractive
                  to search engines than similar pages that are vying for the
                  same keywords or keyword phrases. The better a web page's
                  search engine optimization, the higher a ranking it will
                  achieve in search result listings. SEO can help a website
                  <b>beat out competitors</b> offering a similar product or
                  service.
                </p>
                <img src="/services/img/seo.jpg" alt="Main SEO Components" />
                <a
                  href="https://www.thebalancesmb.com/search-engine-optimization-2948419#:~:text=Key%20Takeaways%201%20Search%20engine%20optimization%20%28SEO%29%20is,links%20to%20the%20page%20from%20other%20reputable%20sites."
                  target="_blank"
                  >Credits: thebalancesmb.com</a
                >
                <button class="btn">Close</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- ############################### Portfolio ############################### -->
      <section id="portfolio">
        <h1>Portfolio</h1>
        <div class="container">
          <article>
            <h3>responsive websites</h3>
            <div class="box">
              <div class="card">
                <a
                  href="/portfolio/work/responsive/pluralsightClone/index.html"
                  target="_blank"
                >
                  <img
                    src="/portfolio/work/responsive/pluralsightClone/sample.jpg"
                    alt="Pluralsight Clone"
                  />
                  pluralsight clone
                </a>
              </div>
              <div class="card">
                <a
                  href="/portfolio/work/responsive/iTunesClone/index.html"
                  target="_blank"
                >
                  <img
                    src="/portfolio/work/responsive/iTunesClone/sample.jpg"
                    alt="ITunes Clone"
                  />
                  iTunes clone</a
                >
              </div>
              <div class="card">
                <a
                  href="/portfolio/work/responsive/responsiveGridWebsite/index.html"
                  target="_blank"
                >
                  <img
                    src="/portfolio/work/responsive/responsiveGridWebsite/sample.jpg"
                    alt="Grid Website"
                  />
                  grid website</a
                >
              </div>
              <div class="card">
                <a
                  href="/portfolio/work/responsive/parallaxWebsite/index.html"
                  target="_blank"
                >
                  <img
                    src="/portfolio/work/responsive/parallaxWebsite/sample.jpg"
                    alt="Parallax Website"
                  />
                  parallax website</a
                >
              </div>
              <div class="card">
                <a
                  href="/portfolio/work/responsive/fullscreenLanding/index.html"
                  target="_blank"
                >
                  <img
                    src="/portfolio/work/responsive/fullscreenLanding/sample.jpg"
                    alt="Fullscreen Landing"
                  />
                  fullscreen landing</a
                >
              </div>
              <div class="card">
                <a
                  href="/portfolio/work/responsive/blurLanding/index.html"
                  target="_blank"
                >
                  <img
                    src="/portfolio/work/responsive/blurLanding/sample.jpg"
                    alt="Blur Landing"
                  />
                  blur landing</a
                >
              </div>
              <div class="card">
                <a
                  href="/portfolio/work/responsive/webDesignWebsite/index.html"
                  target="_blank"
                >
                  <img
                    src="/portfolio/work/responsive/webDesignWebsite/sample.jpg"
                    alt="Web Design Website"
                  />
                  web design website</a
                >
              </div>
              <div class="card">
                <a
                  href="/portfolio/work/responsive/photographySite/index.html"
                  target="_blank"
                >
                  <img
                    src="/portfolio/work/responsive/photographySite/sample.jpg"
                    alt="Photography Site"
                  />
                  photography site</a
                >
              </div>
            </div>
          </article>
          <article>
            <h3>desktop websites</h3>
            <div class="box">
              <div class="card">
                <a
                  href="/portfolio/work/desktop/PSD/index.html"
                  target="_blank"
                >
                  <img src="/portfolio/work/desktop/PSD/sample.jpg" alt="PSD" />
                  a photoshop design</a
                >
              </div>
              <div class="card">
                <a
                  href="/portfolio/work/desktop/fullWebsite/index/index.html"
                  target="_blank"
                >
                  <img
                    src="/portfolio/work/desktop/fullWebsite/sample.jpg"
                    alt="Full Website"
                  />
                  full static website</a
                >
              </div>
            </div>
          </article>
        </div>
      </section>
      <!-- ############################### About ############################### -->
      <section id="about">
        <h1>about</h1>
        <div class="container">
          <p>
            Having your own business, whether small or big, is a great way to
            make some money while being your own boss; we can all agree about
            that. Whether you already own an offline business or planning to
            start one, you should already know that you need a website of your
            own. Millions of business are started every year, and you need your
            very
            <b>unique online presence</b> to make your own business stand out.
          </p>
          <div class="summary">
            <img src="/about/img/bavlyShehata.jpg" alt="A photo of me" />
            <div class="me">
              <h3>Who am I?</h3>
              <p>
                My name is Bavly Shehata, an Egyptian 20-year-old web developer
                studying computer science at The British University in Egypt.<br />
              </p>
            </div>
          </div>
          <p>
            I am a driven person who believes in going after what you love no
            matter what other people think of you, you are in control of your
            life. Let me give you an example: Here in Egypt, and most of the
            middle east, it is believed that you could be succesful only if you
            are either a doctor or an engineer, and as a top student during my
            academic career, everyone expected me to pick one or the other. So
            there I am, graduated highschool and got offered a full scholarship
            at a university offering THE best engineering program in Egypt, and
            you know what I did? I turned it down. I just didn't feel passionate
            about it; I loved working with software, I loved how I can change
            the lives of people to the better by building them applications and
            websites to help them grow their businesses. Luckily, I was offered
            another scholarship to study computer science, and finished the
            first year the top of my class; and though it took about a year for
            my family to finally give in, this is the decision I am most proud
            of in my life and never, for once, regretted. <br />
          </p>
          <p>
            All I am trying to say is <b>follow your passion</b>. Because if you
            don't believe in yourself, who will? Here at Bavlify Web, I am all
            about helping you along your journey. Maybe you want to start a new
            business? or you may want to create a personal website or make
            yourself an online resume to apply for jobs? or perhaps you want to
            start your own blog and share your mind with the world? Whatever
            your goal is, I say <a href="#services">Let's do it!</a>.
          </p>
          <p>
            If you are not sure how this works, have some questions, or just
            wanna tell me something, don't hesitate to
            <a href="#contact">contact me</a>
            anytime, I love talking to new people
          </p>
        </div>
      </section>
      <!-- ############################### Contact ############################### -->
      <section id="contact">
        <h1>contact</h1>
        <div class="container">
          <article class="footerSocial">
            <h4>Feel free to contact me on any of these platforms anytime</h4>
            <div class="socialMedia">
              <a
                href="https://www.facebook.com/bavly.shehata.96"
                class="fa fa-facebook"
              ></a>
              <a
                href="https://www.facebook.com/bavly.shehata.96"
                target="_blank"
              >
                Bavly Shehata</a
              >
              <a
                href="https://wa.me/201550921678"
                target="_blank"
                class="fa fa-whatsapp"
              ></a>
              <a href="https://wa.me/201550921678" target="_blank"
                >(+20) 1550921678</a
              >
              <a
                href="mailto:bavshehata@gmail.com"
                target="_blank"
                class="fa fa-google"
              ></a>
              <a href="mailto:bavshehata@gmail.com" target="_blank"
                >BavShehata@gmail.com</a
              >
              <a
                href="https://www.linkedin.com/in/bavshehata/"
                class="fa fa-linkedin"
                target="_blank"
              ></a>
              <a href="https://www.linkedin.com/in/bavshehata/" target="_blank"
                >BavShehata</a
              >
            </div>
          </article>
          <form action="index.php" method="POST" id="contacting">
            <div class="nameDiv">
              <label for="fName" id="fNameL">First Name</label>
              <input
                type="text"
                name="fName"
                id="fName"
                placeholder=""
                required
              />
              <label for="lName" id="lNameL">Last Name</label>
              <input
                type="text"
                name="lName"
                id="lName"
                placeholder=""
                required
              />
            </div>
            <div class="emailDiv">
              <label for="email">E-mail address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder=""
                required
              />
            </div>
            <div class="subjectDiv">
              <label for="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="What is your message about?"
                required
              />
            </div>
            <div class="messsageDiv">
              <label for="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="I would love to hear your questions, feedback, suggestions or just a hello"
                required
              ></textarea>
            </div>
            <input
              type="submit"
              name="submit"
              id="submit"
              value="submit"
              class="btn"
            />
          </form>
        </div>
      </section>
    </main>
    <footer>
      <p>Copyright © 2020, BavlifyWeb&trade;</p>
    </footer>
    <script src="/script/app.js"></script>
    <script
      src="https://kit.fontawesome.com/6751b3949e.js"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
