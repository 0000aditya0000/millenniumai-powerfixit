import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {

  return (
    <footer className="bg-gray-700 text-white text-center py-6 border-t border-white">
      <div className="flex justify-center gap-6 mb-2">
        <a href="#" className="hover:text-red-500" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" className="hover:text-red-500" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" className="hover:text-red-500" aria-label="Instagram"><FaInstagram /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Power Fixit Tapes. All rights reserved.</p>
    </footer>
  );
}