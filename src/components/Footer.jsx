import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-yellow-700 text-white text-center py-6 border-t border-yellow-300">
      <div className="flex justify-center gap-6 mb-2">
        <a href="#" className="hover:text-yellow-200" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" className="hover:text-yellow-200" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" className="hover:text-yellow-200" aria-label="Instagram"><FaInstagram /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} PowerFixit Tapes. All rights reserved.</p>
    </footer>
  );
}