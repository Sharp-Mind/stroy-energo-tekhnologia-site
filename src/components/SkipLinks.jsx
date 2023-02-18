import React from "react";
import classNames from "classnames";
import styles from "./SkipLinks.module.css";
import useSkipLinks from "./useSkipLinks";

export default function SkipLinks({ className }) {
  const { skipLinks } = useSkipLinks();
  
  return (
    <nav className={classNames(styles.skipLinks, className)}>
      <ul>
        {skipLinks.map(link => (
          <li key={link.title}>
            <a href="#{link.id}">Go to {link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}