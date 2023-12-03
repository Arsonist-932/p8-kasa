import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="error">
      <p className="code-error">404</p>
      <p className="text-error">
        Oups! La page que vous demandez n'existe pas.
      </p>

      <Link to="/">
        <p>Retourner à la page d'accueil</p>
      </Link>
    </div>
  );
}
