class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header-desktop">
            <nav class="navbar">
                <a href="index.html">Marco Vassal</a>
                <ul>
                    <li><a href="index.html#competences">Compétences</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li class="visio"><a target="_blank" href="https://calendly.com/marco-vassal/30min">Réserver un appel</a></li>
                </ul>
            </nav>
            <div class="ligne_head"></div>
        </header>
        <header class="header-ham">
            <div class="logo"><a href="index.html">Marco Vassal</a></div>
            <div class="hambergur">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav class="navbar fullscreen">
            <ul>
                <li style="--animation-order: 1;"><a href="index.html">Accueil</a></li>
                <li style="--animation-order: 2;"><a href="index.html#competences">Compétences</a></li>
                <li style="--animation-order: 3;"><a href="services.html">Services</a></li>
                <li style="--animation-order: 4;"><a href="contact.html">Contact</a></li>
                <li class="visio-ham" style="--animation-order: 5;"><a href="https://calendly.com/marco-vassal/30min">Réserver un appel</a></li>
            </ul>
            <div class="close">
                <div></div>
            </div>
            </nav>
        </header>`
    }
}

//Footer

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `<footer class="reveal footer_desktop">
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
                        <a href="mentions-legales.html">Mentions légales</a>
                    </div>
                </div>
                <div class="footer_nav">
                    <h2 class="reveal-1">Navigation</h2>
                    <a class="reveal-2" href="index.html">Accueil</a>
                    <a class="reveal-3" href="index.html#competences">Compétences</a>
                    <a class="reveal-4" href="serices.html">Services</a>
                    <a class="reveal-5" href="contact.html">Contact</a>
                </div>
                <div class="footer_res">
                    <h2 class="reveal-1">Réseaux</h2>
                    <a class="reveal-2" target="_blank" href="https://www.linkedin.com/in/marco-vassal-144327204">Linkedin</a>
                    <a class="reveal-3" target="_blank" href="https://www.malt.fr/profile/marcovassal">Malt</a>
                    <a class="reveal-4" target="_blank" href="https://www.instagram.com/marco_vassal/">Instagram</a>
                </div>
            </div>
        </footer>
        <footer class="reveal footer_phone">
            <div class="bar reveal-1"></div>
                <div class="footer_ctn">
                    <div class="footer_res">
                        <a class="reveal-1" target="_blank" href="https://www.linkedin.com/in/marco-vassal-144327204"><img src="images/Logo/LinkedIn_logo_footer.svg" alt=""></a>
                        <a class="reveal-2" target="_blank" href="https://www.malt.fr/profile/marcovassal"><img src="images/Logo/Malt_logo_footer.svg" alt=""></a>
                        <a class="reveal-3" target="_blank" href="https://www.instagram.com/marco_vassal/"><img src="images/Logo/Instagram_logo.svg" alt=""></a>
                    </div>
                    <div class="footer_info">
                        <p class="reveal-1">Site codé par MARCO VASSAL</p>
                        <p class="reveal-2">Developpeur web front end freelance</p>
                        <a class="reveal-3" href="tel:+33644870471">TEL: 06 44 87 04 71</a>
                        <a class="reveal-4" href="mailto:marco.vassal07@gmail.com">EMAIL: Marco.vassal07@gmail.com</a>   
                    </div>
                    <div class="footer_nav">
                        <h2 class="reveal-1">Navigation</h2>
                        <a class="reveal-2" href="index.html">Accueil</a>
                        <a class="reveal-3" href="index.html#competences">Compétences</a>
                        <a class="reveal-4" href="serices.html">Services</a>
                        <a class="reveal-5" href="contact.html">Contact</a>
                    </div>
                </div>
                <div class="info_stack reveal-5">
                <p>Stack utilisé: HTML/CSS/JS(Gsap)</p>
                <p>© Copyright 2023 - Marco VASSAL. Tous droits réservés</p>
                <a href="mentions-legales.html">Mentions légales</a>
            </div>
        </footer>
        `

    }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);