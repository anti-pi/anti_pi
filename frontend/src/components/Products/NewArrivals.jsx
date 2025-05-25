import React, { useRef, useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewArrivals = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [canScrollLeft, setCanScrollLeft] = useState(false);

      const newArrivals = [
        {
            _id: "1",
            name: "Scaler DSA in Java",
            brand: "Scaler",
            type: "Courses",
            reward: "100₹ - 500₹",
            submits: 0,
            image: [
                { url: "https://system32.ink/attachments/1736586223189-webp.178/", altText: "Scaler DSA and Algo course" },
                { url: "https://picsum.photos/200/200?random=11", altText: "Extra 1" }
            ],
        },
        {
            _id: "2",
            name: "Scaler DSA in C++",
            brand: "Scaler",
            type: "Courses",
            reward: "200₹ - 1000₹",
            submits: 2,
            image: [
                { url: "https://system32.ink/attachments/1736585801037-webp.177/", altText: "Scaler DSA and Algo course" },
                { url: "https://picsum.photos/200/200?random=12", altText: "Extra 2" }
            ],
        },
        {
            _id: "3",
            name: "Sigma 7.0 Apna College",
            brand: "Apna College",
            type: "Courses",
            reward: "300₹ - 1200₹",
            submits: 5,
            image: [
                { url: "https://picsum.photos/200/200?random=13", altText: "Sigma 7.0" },
                { url: "https://picsum.photos/200/200?random=14", altText: "Extra 3" }
            ],
        },
        {
            _id: "4",
            name: "Newton School Bootcamp",
            brand: "Newton",
            type: "Courses",
            reward: "150₹ - 800₹",
            submits: 1,
            image: [
                { url: "https://picsum.photos/200/200?random=15", altText: "Newton Bootcamp" },
                { url: "https://picsum.photos/200/200?random=16", altText: "Extra 4" }
            ],
        },
        {
            _id: "5",
            name: "Adobe Photoshop 2024",
            brand: "Adobe",
            type: "Software",
            reward: "500₹ - 2000₹",
            submits: 3,
            image: [
                { url: "https://picsum.photos/200/200?random=17", altText: "Photoshop" },
                { url: "https://picsum.photos/200/200?random=18", altText: "Extra 5" }
            ],
        },
        {
            _id: "6",
            name: "Figma Pro",
            brand: "Figma",
            type: "Software",
            reward: "250₹ - 900₹",
            submits: 4,
            image: [
                { url: "https://picsum.photos/200/200?random=19", altText: "Figma" },
                { url: "https://picsum.photos/200/200?random=20", altText: "Extra 6" }
            ],
        },
        {
            _id: "7",
            name: "Netflix Premium",
            brand: "Netflix",
            type: "Entertainment",
            reward: "100₹ - 400₹",
            submits: 7,
            image: [
                { url: "https://picsum.photos/200/200?random=21", altText: "Netflix" },
                { url: "https://picsum.photos/200/200?random=22", altText: "Extra 7" }
            ],
        },
        {
            _id: "8",
            name: "Udemy Python Masterclass",
            brand: "Udemy",
            type: "Courses",
            reward: "120₹ - 600₹",
            submits: 2,
            image: [
                { url: "https://picsum.photos/200/200?random=23", altText: "Udemy Python" },
                { url: "https://picsum.photos/200/200?random=24", altText: "Extra 8" }
            ],
        },
        {
            _id: "9",
            name: "Marvel Avengers Movie",
            brand: "Marvel",
            type: "Movies",
            reward: "80₹ - 300₹",
            submits: 6,
            image: [
                { url: "https://picsum.photos/200/200?random=25", altText: "Avengers" },
                { url: "https://picsum.photos/200/200?random=26", altText: "Extra 9" }
            ],
        },
        {
            _id: "10",
            name: "Spotify Family Plan",
            brand: "Spotify",
            type: "Entertainment",
            reward: "90₹ - 350₹",
            submits: 5,
            image: [
                { url: "https://picsum.photos/200/200?random=27", altText: "Spotify" },
                { url: "https://picsum.photos/200/200?random=28", altText: "Extra 10" }
            ],
        },
    ]

    const allImages = newArrivals.flatMap(product =>
        product.image.map(img => ({
            ...img,
            productId: product._id
        }))
    );

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = x - startX;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
    };

    const scroll = (direction) => {
        const scrollAmount = direction === "left" ? -300 : 300;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    const updateScrollButton = () => {
        const container = scrollRef.current;
        if (container) {
            const leftScroll = container.scrollLeft;
            const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;

            setCanScrollLeft(leftScroll > 0);
            setCanScrollRight(rightScrollable);
        }
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener("scroll", updateScrollButton);
            updateScrollButton();
            return () => container.removeEventListener("scroll", updateScrollButton);
        }
    }, []);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollOne = () => {
            const card = container.querySelector('div.min-w-[100%],div.lg\\:min-w-\\[30\\%\\]');
            if (card) {
                container.scrollBy({ left: card.offsetWidth, behavior: "smooth" });
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
                    setTimeout(() => {
                        container.scrollTo({ left: 0, behavior: "smooth" });
                    }, 600);
                }
            }
        };

        const interval = setInterval(scrollOne, 2500);
        return () => clearInterval(interval);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        pauseOnHover: true,
        appendDots: dots => (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
                <ul style={{ margin: 0, padding: 0 }}> {dots} </ul>
            </div>
        ),
        prevArrow: <button className="slick-arrow slick-prev bg-white border rounded-full p-2 absolute left-2 top-1/2 -translate-y-1/2 z-10"><FiChevronLeft className="text-2xl" /></button>,
        nextArrow: <button className="slick-arrow slick-next bg-white border rounded-full p-2 absolute right-2 top-1/2 -translate-y-1/2 z-10"><FiChevronRight className="text-2xl" /></button>,
    };

    return (
        <>

            {/* New Arrivals Section */}
            <section className="py-16 px-4 lg:px-0">
                <div className="container mx-auto text-center mb-10 relative">
                    <h2 className="text-3xl font-bold mb-4">Explore New Products</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Discover the latest product straight from the brand. Increase your chance
                        to win high value reward.
                    </p>
                </div>
                {/* Add gap below the Trending Now section */}
              
                {/* You can keep the scrollable row below if you want both carousel and scroll, or remove if not needed */}
                <div
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUpOrLeave}
                    onMouseLeave={handleMouseUpOrLeave}
                    className="flex space-x-4 overflow-x-auto px-4 lg:px-0 mt-10 scroll-smooth"
                >
                    {/* {newArrivals.map(product => (
                        <div key={product._id} className="min-w-[80%] sm:min-w-[60%] md:min-w-[40%] lg:min-w-[30%] bg-white rounded-xl shadow-md p-4">
                            <img
                                src={product.image[0].url}
                                alt={product.image[0].altText}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <p className="text-sm text-gray-500">{product.brand} • {product.type}</p>
                            <p className="text-md mt-2 font-medium text-green-600">{product.reward}</p>
                            <p className="text-sm text-gray-400">Submits: {product.submits}</p>
                        </div>
                    ))} */}
                </div>
            </section>
            <Slider {...settings}>
                {newArrivals.map(product => (
                    <div
                        key={product._id}
                        className="flex flex-col items-center justify-center"
                        style={{
                            minHeight: "600px", // Large but reasonable
                            minWidth: "600px",  // Large but reasonable
                            padding: "40px 0",
                        }}
                    >
                        <img
                            src={product.image[0].url}
                            alt={product.image[0].altText || product.name}
                            className="rounded-xl shadow mb-6"
                            style={{
                                width: "700px",   // Large image
                                height: "400px",  // Large image
                                objectFit: "cover",
                                background: "#fff",
                                margin: "0 auto"
                            }}
                        />
                        <div className="w-full flex flex-col items-center text-center">
                            <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                            <p className="text-lg text-gray-500 mb-1">{product.brand} • {product.type}</p>
                            <p className="text-xl font-medium text-green-600 mb-1">{product.reward}</p>
                            <p className="text-md text-gray-400">Submits: {product.submits}</p>
                        </div>
                    </div>
                ))}
            </Slider>
                <div className="h-16"></div>
                    <div className="h-16"></div>
        </>
    );
};

export default NewArrivals;
