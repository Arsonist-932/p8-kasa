import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/logements.json";
import Collapse from "../components/Collapse";
import Slider from "../components/Slider";
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

      <div className="profile-content">
        <div className="title">
          <h2>{profileData.title}</h2>
          <p className="location">{profileData.location}</p>
          <div className="tags-list">
            {profileData.tags.map((el) => (
              <p className="tag">{el}</p>
            ))}
          </div>
        </div>

        <div className="rating">
          <div className="host">
            <p>{profileData.host.name}</p>
            <figure className="host-picture">
              <img src={profileData.host.picture} alt="" />
            </figure>
          </div>
          <p>{profileData.rating}</p>
        </div>
      </div>

      <div className="profile-collapse">
        <Collapse title="Description" text={profileData.description} />
        <Collapse
          title="Equipements"
          text={profileData.equipments.map((el) => (
            <li>{el}</li>
          ))}
        />
      </div>
    </div>
  );
}
