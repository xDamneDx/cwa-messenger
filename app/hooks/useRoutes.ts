import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiChat, HiUsers } from "react-icons/hi";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import useConversation from "./useConversation";

const useRoutes = () => {
  const pathName = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversation",
        icon: HiChat,
        active: pathName === "/conversations" || !!conversationId,
      },
      {
        label: "Users",
        href: "/users",
        icon: HiUsers,
        active: pathName === "/conversations" || !!conversationId,
      },
      {
        label: "Logout",
        href: "#",
        icon: HiArrowLeftOnRectangle,
        onClick: () => signOut(),
      },
    ],
    [conversationId, pathName]
  );

  return routes;
};

export default useRoutes;
