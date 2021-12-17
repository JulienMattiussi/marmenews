import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={"container " + (active ? "active" : "")}>
        <div className="nav">
          <ul>
            {router.pathname !== "/" && (
              <li>
                <Link href="/">
                  <a>Retour</a>
                </Link>
              </li>
            )}
          </ul>
          <h5>Liens utiles</h5>
          <ul>
            <li>
              <Link href="https://meet.google.com/fhu-wvvr-zph">
                <a target="_blank" rel="noopener">
                  ☕ Café
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://casquette.xyz">
                <a target="_blank" rel="noopener">
                  🧢 Casquette
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <style jsx>
          {`
            .container {
              width: 0;
            }
            .nav {
              position: fixed;
              top: 0;
              z-index: 1;
              transform: translateY(100%);
              transition: opacity 200ms;
            }
            ul {
              opacity: 0;
              width: 100%;
              height: 100vh;
              list-style: none;
              margin: 0;
              padding: 8px 0px;

              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            .active ul {
              opacity: 1;
              transform: translateY(0);
            }
            li {
              margin-bottom: 1.75rem;
              font-size: 2rem;
              padding: 0 1.5rem 0 0;
            }
            li:last-child {
              margin-bottom: 0;
            }
            li:hover {
              text-decoration: underline;
              text-underline-offset: 8px;
            }
            .active {
              color: #222;
            }

            @media (min-width: 769px) {
              .container {
                width: 7rem;
                display: block;
                padding: 16px;
              }
              ul {
                opacity: 1;
                width: 7rem;
                top: auto;
                display: block;
                transform: translateY(0);
              }
              li {
                font-size: 1rem;
                padding: 0;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}
