import { Button } from "@/components/ui/button";

const Europe = () => {
  return (
    <div className="bg-yellow-400 rounded-xl p-6 w-full flex  h-ful flex-col items-center shadow-md">
      {/* Region Title */}
      <div className="bg-white rounded-md px-4 py-2 mb-4">
        <h2 className="text-[#FF2D55] font-semibold text-lg text-center">
          Европа
        </h2>
      </div>

      {/* Country List */}
      <ul className="flex-1 w-full flex flex-col items-center space-y-2 text-center mb-6">
        <li className="text-gray-800 text-lg">
          <p>Италия</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Испания</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Франция</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Германия</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Черногория</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Португалия</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Греция</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Словения</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Финляндия</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Хорватия</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Эстония</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Латвия</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Литва</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Чехия</p>
        </li>
      </ul>

      {/* Contact Button */}
      <Button className="bg-gradient-to-r from-red-500 to-yellow-400 text-white font-semibold rounded-full px-6 py-2 shadow-md hover:scale-105 transition-transform">
        Связь с консультантом
      </Button>
    </div>
  );
};

export default Europe;
