interface CardProps {
  name: string;
  artworkFront: string;
}

const Card: React.FC<CardProps> = ({ name, artworkFront }) => {
  return (
    <div className="pt-10 pb-2 px-5 flex flex-col gap-2 rounded-lg bg-base-card hover:scale-105 transition cursor-pointer group">
      <img
        src={artworkFront}
        alt="Test Pokemon"
        className="group-hover:scale-150 transition group-hover:-translate-y-8"
      />
      <p className="font-lato font-bold text-base">{name}</p>
    </div>
  );
};

export default Card;
