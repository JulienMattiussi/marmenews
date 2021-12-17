import React from "react";
import Link from "next/link";
import { TagContent } from "../lib/tags";

type Props = {
  tags: TagContent[];
};

export function ExternalLinks({ tags }: Props) {
  return (
    <>
      <ul className="external-links">
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
      <style jsx>{`
        ul {
          opacity: 0;
          width: 100%;
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
          margin-bottom: 0.75rem;
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
      `}</style>
    </>
  );
}
