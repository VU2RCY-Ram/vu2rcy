import Link from "next/link";
import QRZ from "../public/icons/qrz.png";
import GitHub from "../public/icons/github@2x.png";
import Facebook from "../public/icons/facebook@2x.png";
import Instagram from "../public/icons/instagram@2x.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex select-none text-sm py-16 flex-col h-max items-center mx-auto justify-center">
      <div className="flex justify-center space-x-4 md:space-x-6 dark:text-white/70 text-gray-500 text-[0.6rem] sm:text-xs md:text-sm lg:text-md mt-2">
        <Link href="https://www.qrz.com/db/VU2RCY" target="blank">
          {/* QRZ.com */}
          <Image src={QRZ} alt="qrz website" width="34" />
        </Link>
        <Link href="https://github.com/VU2RCY-RAM" target="blank">
          {/* GitHub */}
          <Image src={GitHub} alt="github" width="30" />
        </Link>
        <Link href="https://www.facebook.com/VU2RCY/" target="blank">
          {/* Facebook */}
          <Image src={Facebook} alt="facebook" width="30" />
        </Link>
        <a href="https://www.instagram.com/VU2RCY/" target="blank">
          {/* Instagram */}
          <Image src={Instagram} alt="instagram" width="30" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
