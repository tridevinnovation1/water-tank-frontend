import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import { useNavigate, useParams } from 'react-router-dom';
import Carousel from './Carousel';
import { getProductById, imageUrl } from '../../../../api/Api';


const Details = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const [photoNo, setphotoNo] = useState(0)
  const [productData, setProductData] = useState({})
  const [dayCount, setDayCount] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [duration, setDuration] = useState('days')

  const getMinDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 3); // Add 3 days
    return today.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  };

  const fetchProductById = async () => {
    try {
      console.log(productId)
      const token = localStorage.getItem("token");
      const response = await fetch(getProductById, {
        method: "POST",
        body: JSON.stringify({ productId }),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch Product");
      }

      const productData = await response.json();
      console.log(productData.product);
      setProductData(productData.product)

    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchProductById();
  }, []);


  // const productData = [
  //   {
  //     id: 1,
  //     pName: "Drone",
  //     image: "https://media.gettyimages.com/id/533548487/photo/drone-with-camera.jpg?s=612x612&w=0&k=20&c=vZ7UcrTJhDX2j0JwbMF7bjOJXMJ6sXpXpyCPZ7MkoHE=",
  //     rating: 4,
  //     NumberOfReview: 150,
  //     inStock: true,
  //     price: 192,
  //     detail: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quas at dolor impedit commodi illo non aspernatur! Error quidem accusamus nihil earum libero vel dolor velit temporibus blanditiis esse, optio ipsam qui quia ab corrupti iusto sunt odit. Eum nam ipsam aperiam sed unde veniam assumenda minus totam, vel sit!"
  //   }
  // ]
  const handleShowPic = (id) => {
    setphotoNo(id - 1);
  }
  const handleClick1 = () => {
    setDayCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const handleClick2 = () => {
    setDayCount(dayCount + 1)
  }
  const handleClick5 = () => {
    setQuantity(quantity + 1)
  }
  const handleClick6 = () => {
    setQuantity((prevCount) => Math.max(prevCount - 1, 0));
  };
  const handleClick3 = () => {
    setDuration('days')
  }
  const handleClick4 = () => {
    setDuration('months')
  }
  const handleInputChange = (event) => {
    const value = event.target.value;
    const sanitizedValue = value.replace(/^0+(?!$)/, "");
    setDayCount(sanitizedValue === "" ? "" : parseInt(sanitizedValue, 10));
  };
  const handleQuantityChange = (event) => {
    const value = event.target.value;
    const sanitizedValue = value.replace(/^0+(?!$)/, "");
    setQuantity(sanitizedValue === "" ? "" : parseInt(sanitizedValue, 10));
  };

  return (
    <div className='mb-20'>
      <div className='hidden showCarousel:flex  h-[31.25rem]  w-[75.6875rem] mx-auto mt-4 gap-8'>
        <img
          src={`${imageUrl}/${productData.image}`}
          alt={`image`}
          className='h-[31.25rem] w-[550px]'
        />
        <div className='flex-1  h-[31.25rem]'>
          <div className='flex flex-col justify-between  h-[31.25rem]'>

            <h2 className='text-2xl font-medium'>{productData.pName}</h2>

            <div className="flex mb-1 mt-1 gap-1 justify-between">
              <div className='flex justify-between '>
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={index < productData.rating ? 'text-[#FFAD33]' : 'text-gray-500'}
                  />
                ))}
                <h2 className='ml-5 text-gray-400'>{productData.NumberOfReview} Review</h2>
              </div>
              {productData.inStock ? (
                <h2 className="text-[#00C851]">In stock</h2>
              ) : (
                <h2 className="text-red-500">Out of stock</h2>
              )}
            </div>
            <div className='text-2xl'>
              Rs {productData.price}
            </div>

            <div className="pb-4 border-b border-gray-400">
              <div className="line-clamp-4 text-sm text-justify">
                {productData.detail}
              </div>
            </div>

            <div className='mt-4'>
              Quantity:
              <div className='flex mt-1'>


                <button className='w-9 h-10 text-2xl border border-r-0 border-black rounded-md rounded-r-none' onClick={handleClick6}>-</button>
                <input className='w-20 h-10 border flex justify-center items-center border-black rounded-y-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}

                  style={{ textAlign: 'center' }}
                />
                <button className='w-8 h-10 text-2xl text-white  border-l-0 border-black rounded-md rounded-l-none bg-[#FFAD33]' onClick={handleClick5}>+</button>


              </div>

            </div>
            <div className='mt-4'>
              Duration:
              <div className='flex mt-1'>
                <button className='w-9 h-10 text-2xl border border-r-0 border-black rounded-md rounded-r-none' onClick={handleClick1}>-</button>
                <input className='w-20 h-10 border flex justify-center items-center border-black rounded-y-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                  type="number"
                  value={dayCount}
                  onChange={handleInputChange}

                  style={{ textAlign: 'center' }}
                />
                <button className='w-8 h-10 text-2xl text-white  border-l-0 border-black rounded-md rounded-l-none bg-[#FFAD33]' onClick={handleClick2}>+</button>

                <div className='flex ml-2'>
                  <button className='w-9 h-10 text-2xl border border-r-0 border-black rounded-md rounded-r-none' onClick={handleClick3}>-</button>
                  <h2 className='w-20 h-10 border flex justify-center items-center border-black rounded-y-md'>{duration}</h2>
                  <button className='w-8 h-10 text-2xl text-white  border-l-0 border-black rounded-md rounded-l-none bg-[#FFAD33]' onClick={handleClick4}>+</button>
                </div>
              </div>

            </div>




            <div className='flex flex-col mt-4'>
              Date:
              <input
                type="date"
                className="border-b-2 h-[3.1rem]  px-1 outline-none w-40  bg-[#FFAD33] text-white border rounded-lg"
                min={getMinDate()}  // This function sets min date to 3 days from today
              />
            </div>


            <div className='mt-4 border border-gray-600 rounded-md'>
              <div className='p-5 flex items-center gap-5 border-b border-b-gray-600 '><FaTruckFast className='text-4xl' />Free Delivery</div>
              <div className='p-5 flex items-center gap-5 '><GiReturnArrow className='text-4xl' />
                <div>
                  <h2>Return Delivery</h2>
                  <h2 className='text-xs'>Free 30 Days Delivery Returns.</h2>
                </div>
              </div>
            </div>
            <button className='w-44 text-white bg-[#FFAD33] rounded-md mt-4 py-2' onClick={() => navigate(`/buyproduct/${productData.id}`)} >Rent Now</button>

          </div>
        </div>
      </div>
      <div className='block showCarousel:hidden w-screen min-w-full  [&_.swiper-button-prev]:text-white [&_.swiper-button-next]:text-white swiper-pagination [&.swiper-pagination-bullet-active]:text-white  '>
        <Carousel />
        <div className='flex flex-col justify-between mx-6 mt-6 h-[31.25rem]'>

          <h2 className='text-2xl font-medium'>{productData.pName}</h2>

          <div className="flex mb-1 mt-1 gap-1 justify-between">
            <div className='flex justify-between '>
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={index < productData.rating ? 'text-[#FFAD33]' : 'text-gray-500'}
                />
              ))}
              <h2 className='ml-5 text-gray-400'>{productData.NumberOfReview} Review</h2>
            </div>
            {productData.inStock ? (
              <h2 className="text-[#00C851]">In stock</h2>
            ) : (
              <h2 className="text-red-500">Out of stock</h2>
            )}
          </div>
          <div className='text-2xl'>
            {productData.price}
          </div>

          <div className="pb-4 border-b border-gray-400">
            <div className="line-clamp-4 text-sm text-justify">
              {productData.detail}
            </div>
          </div>
          <div className='flex mt-4'>
            <button className='w-9 h-10 text-2xl border border-r-0 border-black rounded-md rounded-r-none' onClick={handleClick1}>-</button>
            <input className='w-20 h-10 border flex justify-center items-center border-black rounded-y-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
              type="number"
              value={dayCount}
              onChange={handleInputChange}

              style={{ textAlign: 'center' }}
            />
            <button className='w-8 h-10 text-2xl text-white  border-l-0 border-black rounded-md rounded-l-none bg-[#FFAD33]' onClick={handleClick2}>+</button>
            <button className='w-44 text-white bg-[#FFAD33] rounded-md ml-5' onClick={() => navigate(`/buyproduct/${productData.id}`)} >Rent Now</button>
          </div>

          <div className='flex mt-4'>
            <button className='w-9 h-10 text-2xl border border-r-0 border-black rounded-md rounded-r-none' onClick={handleClick3}>-</button>
            <h2 className='w-20 h-10 border flex justify-center items-center border-black rounded-y-md'>{duration}</h2>
            <button className='w-8 h-10 text-2xl text-white  border-l-0 border-black rounded-md rounded-l-none bg-[#FFAD33]' onClick={handleClick4}>+</button>
          </div>

          <div className='mt-4 w-72 border border-gray-600 rounded-md'>
            <div className='p-5 flex items-center gap-5 border-b border-b-gray-600 '><FaTruckFast className='text-4xl' />Free Delivery</div>
            <div className='p-5 flex items-center gap-5 '><GiReturnArrow className='text-4xl' />
              <div>
                <h2>Return Delivery</h2>
                <h2 className='text-xs'>Free 30 Days Delivery Returns.</h2>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Details