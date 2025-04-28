import { Button } from "@/components/ui/button";

const Oceania = () => {
  return (
    <div
      data-aos="fade-left"
      className="bg-yellow-400 rounded-xl p-6 w-full  h-64 flex flex-col items-center shadow-md "
    >
      {/* Region Title */}
      <div className="bg-white rounded-md px-4 py-2 mb-4">
        <h2 className="text-[#FF2D55] font-semibold text-lg text-center">
          Океания
        </h2>
      </div>

      {/* Country List */}
      <ul className="flex-1 w-full flex flex-col items-center space-y-2 text-center mb-2">
        <li className="text-gray-800 text-lg">
          <p>Австралия</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Новая Зеландия</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Французская Полинезия</p>
        </li>
      </ul>

      {/* Contact Button */}
      <Button className="bg-gradient-to-r from-red-500 to-yellow-400 text-white font-semibold rounded-full px-6 pb-2 shadow-md hover:scale-105 transition-transform">
        Связь с консультантом
      </Button>
    </div>
  );
};

export default Oceania;
