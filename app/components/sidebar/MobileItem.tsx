"use client";

import clsx from "clsx";
import Link from "next/link";

interface Props {
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem: React.FC<Props> = ({ href, icon: Icon, active, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        `group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 hover:text-black hover:bg-gray-100`,
        active && "bg-gray-100 text-black",
        !active && "text-gray-500"
      )}
    >
      <Icon />
    </Link>
  );
};

export default MobileItem;
