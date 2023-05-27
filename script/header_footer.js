class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header id="myHeader">
            <nav class="navbar">
                <a href="index.html">Marco Vassal</a>
                <ul>
                    <li><a href="index.html#competences">Compétences</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </nav>
            <div class="ligne_head"></div>
        </header>`
    }
  }
  
  //Footer
  
  class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `<footer class="reveal">
            <div class="bar reveal-1"></div>
            <div class="footer_ctn">
                <div class="footer_info">
                    <div class="info_dev">
                        <p class="reveal-1">Site codé par MARCO VASSAL</p>
                        <p class="reveal-2">Developpeur web front end freelance</p>
                        <a class="reveal-3" href="tel:+33644870471">TEL: 06 44 87 04 71</a>
                        <a class="reveal-4" href="mailto:marco.vassal07@gmail.com">EMAIL: Marco.vassal07@gmail.com</a>   
                    </div>
                    <div class="info_stack reveal-5">
                        <p>Stack utilisé: HTML/CSS/JS(Gsap)</p>
                        <p>© Copyright 2023 - Marco VASSAL. Tous droits réservés</p>
                        <a href="">Mentions légales</a>
                    </div>
                </div>
                <div class="footer_nav">
                    <h2 class="reveal-1">Navigation</h2>
                    <a class="reveal-2"href="index.html">Accueil</a>
                    <a  class="reveal-3" href="index.html#competences">Compétences</a>
                    <a class="reveal-4" href="serices.html">Services</a>
                    <a class="reveal-5" href="contact.html">Contact</a>
                </div>
                <div class="footer_res">
                    <h2 class="reveal-1">Réseaux</h2>
                    <a class="reveal-2" href="">Linkedin</a>
                    <a class="reveal-3" href="">Malt</a>
                    <a class="reveal-4" href="">Instagram</a>
                </div>
            </div>
        </footer>`
      
    }
  }
  
  customElements.define('main-header', Header);
  customElements.define('main-footer', Footer);