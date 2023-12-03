import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/logements.json";
import "../styles/App.css";

export default function Profile() {
  const { id } = useParams();

  // Récupération des id du logement.
  const profileData = data.find((el) => el.id === id);

  return (
    <div className="profile">
      <div className="cover">
        <figure>
          <img src={profileData.cover} alt={profileData.title} />
        </figure>
      </div>

      <div className="title">
        <h2>{profileData.title}</h2>
        <p className="location">{profileData.location}</p>
      </div>

      <p>{profileData.tags}</p>

      <p>{profileData.rating}</p>

      <div className="host">
        <p>{profileData.host.name}</p>
        <figure className="host-picture">
          <img src={profileData.host.picture} alt="" />
        </figure>
      </div>

      <div className="collapse">
        <p>{profileData.description}</p>
        <p>{profileData.equipments}</p>
      </div>
    </div>
  );
}
