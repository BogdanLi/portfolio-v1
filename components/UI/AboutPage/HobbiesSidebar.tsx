import Image from "next/image";
import Link from "next/link";

// ? Components
import FolderDropdown from "../FolderDropdown";
import FolderLink from "./FolderLink";
import FileLink from "./FileLink";

// ? Assets
import mail from "assets/icons/mail.svg";
import phone from "assets/icons/phone.svg";
import folder from "assets/icons/folder.svg";
import greenFolder from "assets/icons/green-folder.svg";
import purpleFolder from "assets/icons/purple-folder.svg";

const HobbiesSidebar = () => {
  return (
    <div className="hidden h-full w-fit border-e border-lines lg:block">
      <FolderDropdown label="interests">
        <div className="space-y-2 py-4">
          <FolderLink folderIcon={greenFolder.src} label="anime">
            <FileLink label="anime.tsx" href="/about/hobbies/anime" />
          </FolderLink>
        </div>
      </FolderDropdown>
      <FolderDropdown label="contacts">
        <div className="space-y-2 py-4">
          <Link
            href="mailto:li.bogdan44@gmail.com"
            className="flex w-full gap-2 pe-12 hover:brightness-125"
          >
            <Image src={mail.src} width={24} height={24} alt="" />
            li.bogdan44@gmail.com
          </Link>
          <Link
            href="tel:900108304"
            className="flex gap-2 hover:brightness-125"
          >
            <Image src={phone.src} width={24} height={24} alt="" />
            +992 900 108 304
          </Link>
        </div>
      </FolderDropdown>
    </div>
  );
};

export default HobbiesSidebar;
