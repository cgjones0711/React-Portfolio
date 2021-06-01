import React from 'react'

function Footer() {
    return (

     <footer className="footer" style={{backgroundColor: "black"}}>
          <div className="content has-text-centered">
            <p>
              <strong> CLAYTON JONES DESIGNS</strong> <a target="_blank" rel="noreferrer" href="https://www.github.com/cgjones0711"><i class="fab fa-github"></i></a> ||
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/clayton-jones-8077101b6"><i class="fab fa-linkedin"></i></a> ||
              <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1PSCP6vmhP6IRwB0qKuIO4SjsZARbt1II/view?usp=sharing"><i class="fas fa-file-pdf"></i>RESUME</a>               
            </p>
          </div>
        </footer>
    )
}

export default Footer;