import "./footer.css";

export default function PageFooter() {
  return (
    <div>
      <footer className="footer-cont">
        <p></p>
        <p className="footer-para">&copy; LeftOver Inc.</p>
        <div className="socialLinkContainer">
          <a
            href="https://www.facebook.com/profile.php?id=100090249380362"
            target="_blank"
          >
            <i class="fa-brands fa-facebook icon"></i>
          </a>
          <a href="https://twitter.com/Leftover_foods" target="_blank">
            <i class="fa-brands fa-square-x-twitter icon"></i>
          </a>
          <a href="https://www.instagram.com/leftover_foods/" target="_blank">
            <i class="fa-brands fa-instagram icon"></i>
          </a>
          <a href="leftoverfood2023@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope icon"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
