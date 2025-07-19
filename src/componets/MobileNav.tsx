import * as Dialog from "@radix-ui/react-dialog";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import "../styles/MobileNav.css";

type Props = {
  currentPath?: string;
};

const MobileNav = ({ currentPath = "" }: Props) => (
  <section className="md:hidden">
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="MobileNav-trigger" aria-label="Abrir menú">
        <HamburgerMenuIcon />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="MobileNavSheet-overlay" />
      <Dialog.Content className="MobileNavSheet-content">
        <div className="MobileNavSheet-header">
          <Dialog.Close asChild>
            <button className="MobileNavSheet-close" aria-label="Cerrar menú">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </div>

        <nav className="MobileNavSheet-nav">
          {navLinks.map((item) => {
            const isActive = currentPath.toLowerCase() === item.route.toLowerCase();
            return (
              <Dialog.Close asChild key={item.route}>
                <Link
                  to={item.route}
                  className={`MobileNavSheet-link ${isActive ? "is-active" : ""}`}
                >
                  {item.label}
                </Link>
              </Dialog.Close>
            );
          })}

          <Dialog.Close asChild>
                <Link
                  to={"/sign-in"}
                  className="MobileNavSheet-link"
                >
                  Sing In
                </Link>
              </Dialog.Close>
        </nav>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
  </section>
);

export default MobileNav;
