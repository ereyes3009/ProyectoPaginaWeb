import { useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownLine,
} from "react-icons/ri";
// Components
import Car from "./components/shared/Car";
import Sidebar from "./components/shared/Sidebar";
import Header from "./components/shared/header";
import Card from "./components/shared/Card";
//Function
function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };
  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <>
      <div className="bg-[#262837] w-full min-h-screen">
        <Sidebar showMenu={showMenu} />
        <Car showOrder={showOrder} setShowOrder={setShowOrder} />
        {/* Menu movil */}
        <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
          <button className="p-2">
            <RiUser3Line />
          </button>
          <button className="p-2">
            <RiAddLine />
          </button>
          <button onClick={toggleOrders} className="p-2">
            <RiPieChartLine />
          </button>
          <button onClick={toggleMenu} className="text-white p-2">
            {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
        </nav>
        <main className="lg:pl-32 lg:pr-96 pb-20">
          <div className="md:p-8 p-4">
            {/* Header */}
            <Header />
            {/* Title content */}
            <div className="flex items-center justify-between mb-16 ">
              <h2 className="text-xl text-gray-300">Escoge tu plato</h2>
              <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
                <RiArrowDownLine /> Dine in
              </button>
            </div>
            {/* Content */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {/* Card 1*/}
              <Card
                img="comida1.png"
                description="Lomo de Carne con papas nativas"
                price="S/30.00"
                inventory="15 Platillos disponibles"
              />
              {/* Card 2*/}
              <Card
                img="comida2.png"
                description="Lomo de Carne con papas nativas"
                price="S/30.00"
                inventory="15 Platillos disponibles"
              />
              {/* Card 3*/}
              <Card
                img="comida3.png"
                description="Lomo de Carne con papas nativas"
                price="S/30.00"
                inventory="15 Platillos disponibles"
              />
              {/* Card 4*/}
              <Card
                img="comida4.png"
                description="Lomo de Carne con papas nativas"
                price="S/30.00"
                inventory="15 Platillos disponibles"
              />
              {/* Card 5*/}
              <Card
                img="comida5.png"
                description="Lomo de Carne con papas nativas"
                price="S/30.00"
                inventory="15 Platillos disponibles"
              />
              {/* Card 6*/}
              <Card
                img="comida6.png"
                description="Lomo de Carne con papas nativas"
                price="S/30.00"
                inventory="15 Platillos disponibles"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
