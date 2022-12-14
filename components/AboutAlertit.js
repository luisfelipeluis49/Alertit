import Image from "next/image";
import {
	VscActivateBreakpoints,
	VscVmActive,
	VscReplaceAll,
	VscSymbolEvent,
} from "react-icons/vsc";

import starsIcon from "../public/images/stars.svg";

function AboutAlertit() {
	return (
		<section className="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden">
			<Image src={starsIcon} alt="Silver stars" />
			<div className="relative container px-4 mx-auto">
				<div>
					<div className="flex flex-wrap -mx-10">
						<div className="relative w-full lg:w-1/2 px-10 mb-10 lg:mb-20">
							<div
								id="alertit-intro"
								className="px-16 pt-16 pb-24 bg-gray-600 rounded-lg"
							>
								<span className="flex mb-10 justify-center items-center w-20 h-20 bg-blue-500 rounded-lg">
									<VscActivateBreakpoints className="w-8 h-8" />
								</span>
								<h3 className="mt-12 mb-8 text-4xl font-bold text-white">
									Monitoring pings
								</h3>
								<p className="text-lg text-gray-200">
									Utilize one of the instruments that administrators use most
									frequently to verify the availability of network devices.
								</p>
							</div>
						</div>
						<div className="relative w-full lg:w-1/2 px-10 mb-10 lg:mb-20">
							<div className="px-16 pt-16 pb-24 bg-gray-600 rounded-lg">
								<span className="flex mb-10 justify-center items-center w-20 h-20 bg-green-500 rounded-lg">
									<VscVmActive className="w-8 h-8" />
								</span>
								<h3 className="mt-12 mb-8 text-4xl font-bold text-white">
									Port surveillance
								</h3>
								<p className="text-lg text-gray-200">
									Is your email service still available? What about the crucial
									database server, for instance? Let's verify! Track any
									specified service that is active on any port.
								</p>
							</div>
						</div>
						<div className="w-full lg:w-1/2 px-10 mb-10 lg:mb-20">
							<div className="px-16 pt-16 pb-24 bg-gray-600 rounded-lg">
								<span className="flex mb-10 justify-center items-center w-20 h-20 bg-violet-500 rounded-lg">
									<VscReplaceAll className="w-8 h-8" />
								</span>
								<h3 className="mt-12 mb-8 text-4xl font-bold text-white">
									Keyword monitoring
								</h3>
								<p className="text-lg text-gray-200">
									Check the presence of specific text within the content of any
									site by crawling it whenever you want.
								</p>
							</div>
						</div>
						<div className="w-full lg:w-1/2 px-10">
							<div className="px-16 pt-16 pb-24 bg-gray-600 rounded-lg">
								<span className="flex mb-10 justify-center items-center w-20 h-20 bg-pink-500 rounded-lg">
									<VscSymbolEvent className="w-8 h-8" />
								</span>
								<h3 className="mt-12 mb-8 text-4xl font-bold text-white">
									Provide updates on incidents
								</h3>
								<p className="text-lg text-gray-200">
									To the subscribers of your Status page; send out status
									updates through email or other services you support.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Image
				className="absolute right-[10%] bottom-[3%]"
				src={starsIcon}
				alt="Silver stars"
			/>
		</section>
	);
}

export default AboutAlertit;
