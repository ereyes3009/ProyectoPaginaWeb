import React from "react"
import {RiCloseLine,RiDeleteBin6Line} from "react-icons/ri";

const Card = (props) => {
    const {showOrder, setShowOrder} = props
    return (
<div className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${showOrder ? "right-0" : "-right-full"}`}> 
{/* Orders */}
<div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
  <RiCloseLine onClick={() => setShowOrder(false)} className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl" />
  <h1 className="text-2xl my-4">Orden #15486</h1>
  {/*Pills*/}
  <div className="flex items-center gap-4 flex-wrap mb-8">
    <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">Dine In</button>
    <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">To go</button>
    <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">Delivery</button>
  </div>
  {/* Car */}
  <div>
    <div className="grid grid-cols-6 mb-4 p-4">
    <h5 className="col-span-4">Item</h5>
    <h5>Qty</h5>
    <h5>Price</h5>
    </div>
    {/* Products */}
    <div className="h-[400px] md:h-[700px] lg:h-[600px] overflow-scroll">
      {/* Product */}
      <div className="bg-[#262837] p-4 rounded-xl mb-4">
    <div className="grid grid-cols-6 mb-2">
      {/* Product description*/}
      <div className="col-span-4 flex items-center gap-3">
        <img src="comida1.png" className="w-10 h-10 object-cover"/>
        <div>
        <h5 className="text-sm">Lomo de Carne con papas nativas</h5>
        <p className="tex-xs text-gray-500">S/30.00</p>
        </div>
      </div>
      {/* Quantity */}
      <div>
        <span>2</span>
      </div>
      {/* Price */}
      <div>
        <span>S/60.00</span>
      </div>
    </div>
      {/* Note */}
      <div className="grid grid-cols-6 items-center">
        <form className="col-span-5">
          <input type="text" className="bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none" placeholder="Order note.."/>
        </form>
        <div>
            <button className="border border-red-500 p-2 rounded-lg">
            <RiDeleteBin6Line className="text-red-500"/>
            </button>
        </div>
      </div>
      </div>
      {/* Product */}
      <div className="bg-[#262837] p-4 rounded-xl mb-4">
    <div className="grid grid-cols-6 mb-2">
      {/* Product description*/}
      <div className="col-span-4 flex items-center gap-3">
        <img src="comida1.png" className="w-10 h-10 object-cover"/>
        <div>
        <h5 className="text-sm">Lomo de Carne con papas nativas</h5>
        <p className="tex-xs text-gray-500">S/30.00</p>
        </div>
      </div>
      {/* Quantity */}
      <div>
        <span>2</span>
      </div>
      {/* Price */}
      <div>
        <span>S/60.00</span>
      </div>
    </div>
      {/* Note */}
      <div className="grid grid-cols-6 items-center">
        <form className="col-span-5">
          <input type="text" className="bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none" placeholder="Order note.."/>
        </form>
        <div>
            <button className="border border-red-500 p-2 rounded-lg">
            <RiDeleteBin6Line className="text-red-500"/>
            </button>
        </div>
      </div>
      </div>
      {/* Product */}
      <div className="bg-[#262837] p-4 rounded-xl mb-4">
    <div className="grid grid-cols-6 mb-2">
      {/* Product description*/}
      <div className="col-span-4 flex items-center gap-3">
        <img src="comida1.png" className="w-10 h-10 object-cover"/>
        <div>
        <h5 className="text-sm">Lomo de Carne con papas nativas</h5>
        <p className="tex-xs text-gray-500">S/30.00</p>
        </div>
      </div>
      {/* Quantity */}
      <div>
        <span>2</span>
      </div>
      {/* Price */}
      <div>
        <span>S/60.00</span>
      </div>
    </div>
      {/* Note */}
      <div className="grid grid-cols-6 items-center">
        <form className="col-span-5">
          <input type="text" className="bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none" placeholder="Order note.."/>
        </form>
        <div>
            <button className="border border-red-500 p-2 rounded-lg">
            <RiDeleteBin6Line className="text-red-500"/>
            </button>
        </div>
      </div>
      </div>
      {/* Product */}
      <div className="bg-[#262837] p-4 rounded-xl mb-4">
    <div className="grid grid-cols-6 mb-2">
      {/* Product description*/}
      <div className="col-span-4 flex items-center gap-3">
        <img src="comida1.png" className="w-10 h-10 object-cover"/>
        <div>
        <h5 className="text-sm">Lomo de Carne con papas nativas</h5>
        <p className="tex-xs text-gray-500">S/30.00</p>
        </div>
      </div>
      {/* Quantity */}
      <div>
        <span>2</span>
      </div>
      {/* Price */}
      <div>
        <span>S/60.00</span>
      </div>
    </div>
      {/* Note */}
      <div className="grid grid-cols-6 items-center">
        <form className="col-span-5">
          <input type="text" className="bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none" placeholder="Order note.."/>
        </form>
        <div>
            <button className="border border-red-500 p-2 rounded-lg">
            <RiDeleteBin6Line className="text-red-500"/>
            </button>
        </div>
      </div>
      </div>                         
    </div>
  </div>
  {/* Submit payment */}
  <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
    <div className="flex items-center justify-between mb-4">
      <span className="text-gray-400">Discount</span>
      <span>S/0</span>
    </div>   
    <div className="flex items-center justify-between mb-6">
      <span className="text-gray-400">Subtotal</span>
      <span>S/60.00</span>
    </div>
    <div>
      <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">Continue to payment</button>
    </div>
  </div>
</div>
</div>  
    )
};

export default Card