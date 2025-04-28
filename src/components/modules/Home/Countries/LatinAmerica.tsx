import { Button } from "@/components/ui/button";

const LatinAmerica = () => {
  return (
    <div
      data-aos="fade-down"
      className="bg-yellow-400 rounded-xl p-6 w-full  h-96 flex flex-col items-center shadow-md "
    >
      {/* Region Title */}
      <div className="bg-white rounded-md px-4 py-2 mb-4">
        <h2 className="text-[#FF2D55] font-semibold text-lg text-center">
          Латинская Америка
        </h2>
      </div>

      {/* Country List */}
      <ul className="flex-1 w-full flex flex-col items-center space-y-2 text-center mb-6">
        <li className="text-gray-800 text-lg">
          <p>Колумбия</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Мексика</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Гватемала</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Бразилия</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Боливия</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Коста-Рика</p>
        </li>
      </ul>

      {/* Contact Button */}
      <Button className="bg-gradient-to-r from-red-500 to-yellow-400 text-white font-semibold rounded-full px-6  shadow-md hover:scale-105 transition-transform pb-2">
        Связь с консультантом
      </Button>
    </div>
  );
};

export default LatinAmerica;
