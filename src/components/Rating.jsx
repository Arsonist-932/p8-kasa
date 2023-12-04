const Rating = ({ rating }) => {
  // Fonction pour générer des étoiles basées sur la notation
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star-filled" : "star-empty"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="rating-item">
      <div>{renderStars(rating)}</div>
      {/* Ajoutez d'autres informations si nécessaire */}
    </div>
  );
};

export default Rating;
