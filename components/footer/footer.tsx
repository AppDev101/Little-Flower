import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg- flex justify-center gap-30 bg-taupe-800 py-15 text-white">
      <h1 className="text-xl font-bold">COFFEE</h1>
      <div className="space-y-2">
        <h2 className="font-semibold">PRIVACY</h2>
        <ul className="space-y-1 text-sm">
          <li>Terms of use</li>
          <li>Privacy policy</li>
          <li>Cookie policy</li>
        </ul>
      </div>
      <div className="space-y-2">
        <h2 className="font-semibold">SERVICES</h2>
        <ul className="space-y-1 text-sm">
          <li>Shop</li>
          <li>Order ahead</li>
          <li>Menu</li>
        </ul>
      </div>
      <div className="space-y-2">
        <h2 className="font-semibold">ABOUT US</h2>
        <ul className="space-y-1 text-sm">
          <li>Find a location</li>
          <li>About us</li>
          <li>Our story</li>
        </ul>
      </div>
      <div className="space-y-2">
        <h2 className="font-semibold">INFORMATION</h2>
        <ul className="space-y-1 text-sm">
          <li>Plans & pricing</li>
          <li>Sell your products</li>
          <li>Jobs</li>
        </ul>
      </div>
      <div className="space-y-3">
        <h2 className="text-[1.125rem] font-semibold">SOCIAL MEDIA</h2>
        <ul className="flex justify-center gap-3">
          <li>
            <FaXTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
