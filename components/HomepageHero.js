import Image from "next/image";
import Button from "./Button";

import twoPhones from "../public/images/two-phones.png";

function HomepageHero() {
	return (
		<>
			<section className="relative pb-20 bg-gray-800">
				<div className="absolute bottom-0 inset-x-0 h-full bg-gradient-to-r from-purple-600 to-blue-600"></div>
				<div className="absolute -bottom-[6px] -left-[30px] h-3/5 w-[82%] bg-gradient-to-r from-purple-600 to-blue-600 transform -rotate-6"></div>
				<div className="absolute top-[120px] md:-top-60 left-1/2 transform translate-y-full translate-x-0 lg:translate-x-[-20%] lg:translate-y-[66%] ">
					<Image src={twoPhones} />
				</div>

				<div className="relative px-8 container pt-12 md:pt-20 mx-auto">
					<div className="hidden 2xl:block absolute bottom-0 w-3/5 mb-40 h-2 border-b border-white"></div>
					<div className="w-full lg:w-1/2 2xl:w-2/5 mb-12 mb:mb-0">
						<span className="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600">
							Never miss a beat!
						</span>
						<div className="max-w-lg lg:max-w-md 2xl:max-w-none mt-7 mb-12 text-6xl lg:text-7xl 2xl:text-9xl text-white">
							<h2>
								<span className="text-violet-200"> Welcome to </span>
							</h2>
							<h3 className="text-center md:text-left font-bold">Alertit</h3>
						</div>
						<p className="mb-12 lg:mb-24 text-lg text-white opacity-90">
							The ultimate Uptime Monitor
						</p>
						<Button text="Get Started" linkTo="#" />
					</div>
				</div>
			</section>
			<div className="h-24 w-full	bg-indigo-400 py-24"></div>
		</>
	);
}

export default HomepageHero;