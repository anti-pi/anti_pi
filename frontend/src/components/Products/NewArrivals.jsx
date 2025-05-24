import React, { useRef, useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NewArrivals = () => {

    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const newArrivals = [
        {
            _id: "1",
            name: "Scaler DSA in Java, DBMS, OS, CN Low and High Level System Design",
            reward: "100₹ - 500₹",
            submits: 0,
            image: [
                {
                    url: "https://system32.ink/attachments/1736586223189-webp.178/",
                    altText: "Scaler DSA and Algo course",
                },
                
                ],
        },
        {
            _id: "2",
            name: "Scaler DSA in C++, DBMS, OS, CN, Development, LLD and HLD",
            reward: "200₹ - 1000₹",
            submits: 0,
            image: [
                {
                    url: "https://system32.ink/attachments/1736585801037-webp.177/",
                    altText: "Scaler DSA and Algo course",
                },
                
                ],
        },
    ]

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft)
        setScrollLeft(scrollReft.current.scrollLeft);
    }
    const handleMouseMove = (e) => {
        if(!isDragging) return;
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = x - startX;
        scrollRef.current.scrollLeft = scrollLeft - walk;

    }
    const handleMouseUpOrLeave = (e) => {
        setIsDragging(false)

    }

    const scroll = (direction) => {
        const scrollAmount = direction === "left" ? -300 : 300;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

    const updateScrollButton = () => {
        const container = scrollRef.current;
        if(container){
            const leftScroll = container.scrollLeft;
            const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;

            setCanScrollLeft(leftScroll>0);
            setCanScrollRight(rightScrollable);
        }
    }
    useEffect(() => {
        const container = scrollRef.current;
        if(container){
            container.addEventListener("scroll", updateScrollButton)
            updateScrollButton();
            return () => container.removeEventListener("scroll", updateScrollButton);
        }
    },[])
  return (
    <section className='py-16 px-4 lg:px-0'>
        <div className='container mx-auto text-center mb-10 relative'>
            <h2 className='text-3xl font-bold mb-4'>Explore New Products</h2>
            <p className='text-lg text-gray-600 mb-8'>
                Discover the latest product straight from the brand, Increase your chance
                to win high value reward.
            </p>
            <div className='absolute right-0 bottom-[-30px] flex space-x-2'>
                <button onClick={() => scroll("left")}  disabled={!canScrollLeft} className={`p-2 rounded border ${canScrollLeft ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
                    <FiChevronLeft className='text-2xl'/>
                </button>
                <button onClick={() => scroll("right")} className={`p-2 rounded border ${canScrollRight ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
                    <FiChevronRight className='text-2xl'/>
                </button>
            </div>
        </div>
        <div ref={scrollRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUpOrLeave} onMouseLeave={handleMouseUpOrLeave} className='container mx-auto overflow-x-scroll flex space-x-6 relative'>
            {newArrivals.map((product) => (
                <div key={product._id} className='min-w-[100%] sm:min-w-[100%] lg:min-w-[30%] relative'>
                    <img draggable="false" src={product.image[0]?.url} 
                    alt={product.image[0]?.altText || product.name}
                    className='w-full h-[500px] object-cover rounded-lg'
                    />
                    <div className='absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg'>
                        <Link to={`/product/${product._id}`} className="block">
                            <h4 className='font-medium'>{product.name}</h4>
                            <p className='mt-1'>{product.reward}</p>
                        
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
};
export default NewArrivals;