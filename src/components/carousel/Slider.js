import React, {useState} from 'react'
import './Slider.css'
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi'
import Link from 'gatsby-link'

const Slider = () => {
    const [nothide, setHide] = useState(true)
    return (
        <>
        {nothide &&
        <div className="carousel absolute left-0 top-0 w-full h-full shadow-2xl bg-transparent -mt-32 z-3000">
	    <div className="carousel-inner relative overflow-hidden w-full">
		<input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked" />
        <div className="carousel-item absolute opacity-0" style={{'height':'100vh'}}>
			<div className="block h-full w-full bg-gray-900 opacity-75 text-white text-center pt-64 slider-text">Calling all Beekeepers, Hobbyists, <br /> Honey Lovers and Activists.</div>
		</div>
		<label for="carousel-3" className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-orange-600 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
		<label for="carousel-2" className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-orange-600 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
		
		<input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" />
		<div className="carousel-item absolute opacity-0" style={{'height':'100vh'}}>
			<div className="block h-full w-full bg-gray-900 opacity-75 text-white text-center pt-64 slider-text">The Worldwide Bee Organization was founded to connect 
                <br /> proactive individuals dedicated to sharing, designing, and 
                <br /> constructing valuable solutions that can truly make a 
                <br /> difference in the bee and honey industry.</div>
		</div>
		<label for="carousel-1" className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:hover:bg-orange-600 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
		<label for="carousel-3" className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:hover:bg-orange-600 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> 
		
		<input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="" />
		<div className="carousel-item absolute opacity-0" style={{'height':'100vh'}}>
			<div className="block h-full w-full bg-gray-900 opacity-75 text-white text-center  pt-64 slider-text">We can bee the solution.</div>
		</div>
        <button class="slider-button cursor-pointer" onClick={()=> setHide(nothide => !nothide)}>Skip to home page</button>
		<label for="carousel-2" className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:hover:bg-orange-600 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
		<label for="carousel-1" className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:hover:bg-orange-600 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
		<ol className="carousel-indicators">
			<li className="inline-block mr-3">
				<label for="carousel-1" className="carousel-bullet cursor-pointer block text-6xl text-white hover:text-orange-600">•</label>
			</li>
			<li className="inline-block mr-3">
				<label for="carousel-2" className="carousel-bullet cursor-pointer block text-6xl text-white hover:text-orange-600">•</label>
			</li>
			<li className="inline-block mr-3">
				<label for="carousel-3" className="carousel-bullet cursor-pointer block text-6xl text-white hover:text-orange-600">•</label>
			</li>
		</ol>
		
	</div>
</div>
}
</>
    )
}

export default Slider