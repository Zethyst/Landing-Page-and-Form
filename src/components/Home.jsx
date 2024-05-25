import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Spark from './spark.png'
import Stroke from './stroke.png'
import Accordion from './Accordion';

function Home() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [opacity, setOpacity] = useState(1);
    const arr = ["Enhance fortune 50 company's insights teams research capabilities","Implement advanced data analytics tools to extract actionable insights","Develop cutting-edge ML algorithms to predict future market trends"]
    const handleClick = (index) => {
        setOpacity(0);
        setTimeout(() => {
          setActiveIndex((activeIndex + 1) % arr.length);
          setOpacity(1);
        }, 500); 
    };

    useEffect(() => {
        const interval = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
          setOpacity(0);
          setTimeout(() => {
            setOpacity(1);
        }, 500); 
        }, 5000);
        return () => clearInterval(interval);
      }, []);
      
      useEffect(() => {
        const handleResize = () => {
          setInnerWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <div className='flex flex-col justify-center items-center min-h-[220vh] relative'>
        <Navbar/>
        <div className='m-10 pt-3'>
            <p className='text-center text-green-600 text-3xl covered-by-your-grace-regular'>Success stories</p>
            <p className='text-center manrope text-6xl '>Every success journey</p>
            <p className='text-center manrope text-6xl '>we've encountered.</p>
            <div className='flex flex-col md:flex-row justify-around items-center crop-container '>
            <div className=' flex flex-col md:flex-row justify-center items-center gap-5 relative' style={{ fontFamily: 'Switzer',  transition: 'opacity 0.5s', opacity }}>
                <img className='m-10 rounded-3xl h-96 ' src="https://s3-alpha-sig.figma.com/img/c086/323e/b8fae54c91face434e9ea448a875ea3e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPPJu~LH5jYqxc8GcYbYi8GpYZgu3j-AFGk6P5AmeOJnOVh~MFFvaY-W2zLzP1Z-nbTnsFqaK9IwMhqY17hc~mTOe-T65fjKPsSLz2IuGlJPXLjCD0Nft~wq1uZntYN3HhCA5uVhv~0Et663QLCcv3lOLUCpuJFYrd1zDpR94UWGVhMmI-PnyW1EWDkGgfPIdMIBlyMQ5X9F7n2nNNI55Hp56B3F~tOPgUcBN9jDOTv2kKq1BuNYd-QxrPNSlQ~iJKerpafsOWRN14nu-xFnt8KbvT-IrBC3BatAs~MMcHy5IJBnBrAol9VY6q2kPz1p1ifSVXMX3tnrb9N4L74Zpg__" alt="" srcset="" />
                <div className='absolute right-8 md:-right-16 bottom-16  shadow-xl bg-white rounded-full w-56 h-16 flex justify-center items-center'>
                    <div className='h-10 w-10 p-5 rounded-full bg-[#e7ede8] text-[#2DA950] justify-center items-center'><i class="fa-solid fa-rocket scale-125 -translate-x-2 -translate-y-3"></i></div>
                    <div className='flex flex-col'>
                        <p className='text-black text-2xl font-bold uppercase text-center'>10 Days</p>
                        <p className='text-gray-400 text-center w-32'>Staff Deployment</p>
                    </div>
                </div>
                <div className='absolute right-10 md:-right-14 top-20 w-48 shadow-2xl rounded-2xl bg-white flex justify-center items-center h-48'>
                    <div className='absolute bottom-24 left-0'><img src={Spark} className='rounded-full'/></div>
                    <span style={{fontFamily:"Switzer"}}className='absolute top-12 left-8 text-4xl px-2 text-black'>40%</span>
                    <p className='text-[#828282] translate-y-9 text-sm px-6'>Achieved reduction in project execution time by optimising team availability</p>
                </div>
                <div className='absolute left-20 md:left-[220px] bottom-8 md:bottom-2 shadow-xl bg-green-950 w-56 h-44 rounded-3xl flex flex-col justify-center items-center'>
                    <div style={{fontFamily:"Switzer"}}><span className='text-5xl px-2 text-white'>$0.5</span><span className='uppercase font-bold text-[#A6A3A0]'>Million</span></div>
                    <p className='text-[#CCCCCC] text-sm py-3 px-6'>Reduced client expenses by saving on hiring and employee costs.</p>
                </div>
                </div>
                <div className='h-44 w-56 relative'>
                <p style={{ fontFamily: 'Switzer',  transition: 'opacity 0.5s', opacity }} className={`h-64 w-72 text-3xl transition-all duration-150 ease-in`}>
                    {arr[activeIndex]}
                </p>
                <div className='flex w-24 space-x-2 absolute top-44'>
                    <div className={`bg-[${activeIndex===0?"#2DA950":"#E4E3E3"}] ${activeIndex===0?"":"hover:bg-[#CAD0CB]"} rounded-full p-1 cursor-pointer transition-all duration-150 ease-in `} onClick={()=>{handleClick(0)}}></div>
                    <div className={`bg-[${activeIndex===1?"#2DA950":"#E4E3E3"}] ${activeIndex===1?"":"hover:bg-[#CAD0CB]"} rounded-full p-1 cursor-pointer transition-all duration-150 ease-in`} onClick={()=>{handleClick(1)}}></div>
                    <div className={`bg-[${activeIndex===2?"#2DA950":"#E4E3E3"}] ${activeIndex===2?"":"hover:bg-[#CAD0CB]"} rounded-full p-1 cursor-pointer transition-all duration-150 ease-in`} onClick={()=>{handleClick(2)}}></div>
                </div>
                <button className='text-white h-14 bg-black rounded-full p-5 shadow w-44 pb-11 hover:bg-[#4E4E4E] transition-all duration-150 ease-in' >Explore More &rarr;</button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row rounded-3xl bg-[#E8EEE7] p-20 mt-24 w-[95vw] mx-auto'>
                <div className='flex flex-col justify-between items-center'>
                    <div className='flex flex-col '>
                        <p className='covered-by-your-grace-regular text-2xl text-[#9E9D9D]'>What's on your mind</p>
                        <p className='manrope text-5xl'>Ask Questions</p>
                    </div>
                    <img className={`h-96 ${innerWidth > 768 ? 'visible' : 'hidden'}`} src={Stroke} alt="" />
                </div>
                <div className='accordion md:w-52'>
                <div className="w-full md:w-[35rem]" style={{fontFamily:"Manrope"}}>
                    <Accordion
                        title="Do you offer freelancers?"
                        content="We do engage with freelancers for specific projects or roles that require specialized skills or expertise. We recognize the value that freelancers can bring to our organization in terms of flexibility, diverse perspectives, and access to unique talents. "
                    />
                    <Accordion
                        title="What's the guarantee that I will be satisfied
                        with the hired talent?"
                        content="We guarantee your satisfaction with the hired talent through a rigorous screening process, clear expectations, open communication, performance monitoring, and flexibility to address any concerns or make necessary adjustments. Our goal is to ensure that you are fully satisfied with the talent you hire through our organization and we are committed to finding solutions to any issues that may arise"
                    />
                    <Accordion
                        title="Can I hire multiple talents at once?"
                        content="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
                    />
                    <Accordion
                        title="Why should I not go to an agency directly?"
                        content="Content for Accordion Item 4"
                    />
                    <Accordion
                        title="Who can help me pick a right skillset
                        and duration for me?"
                        content="Content for Accordion Item 5"
                    />
                </div>
                </div>
            </div>
            <div className='flex justify-between rounded-3xl bg-[#F5F5F5] p-14 mt-10 w-[95vw] mx-auto'>
                <p>&copy; Akshat Jaiswal 2024. All rights reserved</p>
                <div className='flex space-x-7 underline'>
                <a href="">Terms & Conditions</a>
                <a href="">Privacy Policy</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home