const About=()=>{
    return (
        <div className="w-[100%] h-screen bg-gray-100">
            <div className="w-[100%] flex flex-col justify-center items-center bg-gray-100">
                <div className="text-[114%] border-b-2 h-[50%] text-justify w-[85%] pb-4 mt-32 bg-gray-100">
                    Welcome to <span className="text-orange-500 font-bold">YumRush! </span>
                    Your ultimate online destination for discovering and ordering from the
                    finest restaurants in Hyderabad. Our platform is designed to cater to your culinary
                    cravings with ease and convenience, offering a diverse range of food options from 
                    top-rated eateries across the city. Whether you’re in the mood for traditional Hyderabadi
                    biryani, exotic international cuisines, or a simple, comforting meal, YumRush has you covered.
                </div>

                <div className="text-lg text-justify h-[50%] w-[85%] mt-4 mb-[110px] bg-gray-100">
                    Explore a vast array of restaurants on YumRush, each offering a unique dining experience. 
                    Our user-friendly interface allows you to browse through various eateries, check ratings, 
                    and view their specialty dishes. From upscale fine dining to cozy neighborhood cafes, 
                    YumRush brings you closer to the best of Hyderabad's culinary scene.
                </div> 
            </div>
            <div className="collapse md:visible flex items-center justify-center p-4 bg-black text-white w-[100%] h-[150px] fixed bottom-0">
                <p className="">Made by Akansha</p>
            </div>
        </div>    
        )
}
export default About;