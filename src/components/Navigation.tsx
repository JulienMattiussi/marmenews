import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { CloseIcon } from "./icons/CloseIcon";

export function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      {router.pathname !== "/" && (
        <div className="nav">
          <Link href="/">
              <a aria-label="Retour Page Accueil" title="Retour">
                <CloseIcon className="link" height={32} width={32}/>
              </a>
          </Link>
        </div>
      )}
      <style jsx>
        {`
          .nav {
            position: fixed;
            top: 32px;
            right: 32px;
            z-index: 1;
          }
          .link {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
