interface StatCardProps {
  health: number;
  attack: number;
  defense: number;
}

const StatCard: React.FC<StatCardProps> = ({ health, attack, defense }) => {
  const healthWidth = health;
  return (
    <div className="p-4 bg-base-stat-color flex flex-col rounded-lg">
      <div className="flex flex-col font-lato text-base-id-poke text-lg gap-1 border-b-2 border-solid border-gray-700 pb-3">
        <p>Health</p>
        <div className="bg-bg-bar-hp h-[6px] rounded-md">
          <div
            className="bg-first-green from-first-green to-last-green h-[6px] rounded-md"
            style={{ width: `${healthWidth}%` }}></div>
        </div>
        <div className="flex gap-3 font-lato text-white items-center">
          <p className="text-2xl font-semibold">{health}</p>
          <p className="text-lg">from 1000</p>
        </div>
      </div>
      <div className="flex gap-[81px] pt-4">
        <div className="flex flex-col font-lato">
          <p className="text-lg text-base-id-poke">Attack</p>
          <p className="text-2xl text-white">{attack}</p>
        </div>
        <div className="flex flex-col font-lato">
          <p className="text-lg text-base-id-poke">Defense</p>
          <p className="text-2xl text-white">{defense}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
