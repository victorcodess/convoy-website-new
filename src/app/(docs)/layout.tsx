'use client';
import '../globals.scss';
import Image from 'next/image';
import SearchInput from '@/app/components/SearchInput';
import Link from 'next/link';
import data from '../data/nav.json';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
	const [showMenu, setShowMenu] = useState(true);
	const [activeContent, setCurrentContent] = useState('');
	const [currentDoc, setCurrentDoc] = useState('');
	const pathname = usePathname();
	const isChildRouteActive = (parentRoute: any) => {
		const childrenRoutes = data.find(item => item.title === parentRoute)?.children;

		return childrenRoutes?.some(route => route.link === pathname);
	};

	const showChildren = (title: string) => {
		if (title === activeContent) setCurrentContent('title');
		else setCurrentContent(title);
	};

	return (
		<html lang="en" style={{ scrollBehavior: 'smooth' }}>
			<body suppressHydrationWarning={true}>
				<div className="w-full desktop:flex">
					<div className="bg-light-blue">
						<div
							className={`desktop:max-w-[268px] desktop:min-w-[268px] desktop:w-full desktop:ml-[max(0px,calc((100vw-(268px+1200px))/2))] h-screen overflow-y-auto no-scrollbar transition-all duration-300 z-50 fixed desktop:static ${
								showMenu ? 'bg-light-blue w-268px' : 'w-0 overflow-x-hidden'
							}`}>
							<div className="px-24px py-50px">
								<div className="flex items-center mb-20px">
									<button
										className="px-0 py-0 border border-grey-10 bg-white-100 rounded-100px w-24px h-24px desktop:hidden flex items-center justify-center mr-10px"
										onClick={() => setShowMenu(!showMenu)}>
										<Image
											src="/doc-icons/collapse.svg"
											alt="collapse icon"
											width={10}
											height={10}
											className={`transition duration-150 ${showMenu ? 'rotate-180' : ''}`}
										/>
									</button>

									<Link href="/docs">
										<Image src="/svg/convoy.svg" alt="Convoy Logo" width={128} height={22} priority />
									</Link>
								</div>

								{/* <SearchInput /> */}

								<div className="flex items-center gap-16px mt-22px">
									<Link href="https://github.com/frain-dev/convoy" className="bg-transparent flex items-center text-12 text-gray-600">
										<Image className="mr-8px" src="/svg/github.svg" alt="Github Logo" width={14} height={14} priority />
										Github
									</Link>
									<Link
										href="https://join.slack.com/t/convoy-community/shared_invite/zt-xiuuoj0m-yPp~ylfYMCV9s038QL0IUQ"
										className="bg-transparent flex items-center text-12 text-gray-600">
										<Image className="mr-8px" src="/svg/slack.svg" alt="Slack Logo" width={11} height={11} priority />
										Community
									</Link>
								</div>

								<div className="h-[1px] w-full bg-primary-25 mt-30px"></div>

								<Link href="https://convoy.readme.io/" className="flex items-center text-gray-500 text-12 my-16px w-full">
									API Reference
									<Image className="ml-10px" src="/svg/arrow-top-right.svg" alt="Arrow top right icon" width={12} height={12} />
								</Link>

								<div className="h-[1px] w-full bg-primary-25 mb-30px"></div>

								<ul>
									{data.map((item, i) => (
										<li className="mb-34px" key={i}>
											{item.children && (
												<Link
													href={item.children[0].link}
													className={`flex justify-items-center transition-all duration-300 text-12 ${
														isChildRouteActive(item.title) ? 'text-primary-400' : 'text-gray-500'
													} `}>
													<svg
														width="18"
														height="18"
														className={`mr-8px transition-all duration-300 ${
															isChildRouteActive(item.title)
																? item.icon === 'introduction'
																	? 'fill-primary-400'
																	: 'stroke-primary-400'
																: item.icon === 'introduction'
																? 'fill-gray-500'
																: 'stroke-gray-500'
														} `}>
														<use xlinkHref={`#${item.icon}-icon`}></use>
													</svg>
													{item.icon === 'introduction'}
													{item.title}
												</Link>
											)}
											{!item.children && (
												<Link
													href={item.link}
													className={`flex justify-items-center transition-all duration-300 text-12 ${
														item.link === pathname ? 'text-primary-400' : 'text-gray-500'
													} `}>
													<svg
														width="18"
														height="18"
														className={`mr-8px ${
															item.link === pathname
																? item.icon === 'introduction'
																	? 'fill-primary-400'
																	: 'stroke-primary-400'
																: item.icon === 'introduction'
																? 'fill-gray-500'
																: 'stroke-gray-500'
														}`}>
														<use xlinkHref={`#${item.icon}-icon`}></use>
													</svg>
													{item.title}
												</Link>
											)}

											{item.children && (
												<ul className={`mt-24px border-l-2 border-primary-50 transition-all duration-300`}>
													{item.children.map((subItem, index) => (
														<li
															className={`mb-24px -ml-2px transition-all duration-400 text-12 text-gray-400  ${
																pathname.includes(subItem.link)
																	? 'border-l-2 border-primary-400 text-primary-400 font-normal'
																	: 'text-gray-400 font-light'
															}`}
															key={index}>
															<Link href={subItem.link} onClick={() => setCurrentDoc(subItem.link)} className="pl-24px">
																{subItem.title}
															</Link>
														</li>
													))}
												</ul>
											)}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>

					<div className="bg-white shadow-layout w-full relative">
						<div
							className="h-screen desktop-min:max-w-[1200px] desktop-min:w-full desktop-min:mr-[max(0px,calc((100vw-(268px+1200px))/2))] overflow-y-auto no-scrollbar"
							id="docPage">
							<div className="flex desktop:hidden items-center p-16px shadow-sm">
								<button
									className="px-0 py-0 border border-grey-10 bg-white-100 rounded-100px w-30px h-30px flex items-center justify-center"
									onClick={() => setShowMenu(!showMenu)}>
									<Image src="/doc-icons/collapse.svg" alt="collapse icon" width={12} height={12} priority />
								</button>
								<Image className="ml-10px" src="/svg/convoy.svg" alt="Convoy Logo" width={110} height={22} priority />
							</div>

							{children}
						</div>
					</div>
				</div>

				<svg display="none" className="hidden">
					<symbol width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" id="cli-icon">
						<path
							d="M5.16797 7.58496C5.90297 7.95246 6.53297 8.50746 6.99047 9.19746C7.25297 9.58746 7.25297 10.09 6.99047 10.48C6.53297 11.1625 5.90297 11.7175 5.16797 12.085"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path d="M9.75 12.085H12.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						<path
							d="M6.75 17.335H11.25C15 17.335 16.5 15.835 16.5 12.085V7.58496C16.5 3.83496 15 2.33496 11.25 2.33496H6.75C3 2.33496 1.5 3.83496 1.5 7.58496V12.085C1.5 15.835 3 17.335 6.75 17.335Z"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</symbol>

					<symbol width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" id="configurations-icon">
						<path
							d="M9 12.085C10.2426 12.085 11.25 11.0776 11.25 9.83496C11.25 8.59232 10.2426 7.58496 9 7.58496C7.75736 7.58496 6.75 8.59232 6.75 9.83496C6.75 11.0776 7.75736 12.085 9 12.085Z"
							strokeWidth="1.5"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M1.5 10.495V9.17503C1.5 8.39504 2.1375 7.75004 2.925 7.75004C4.2825 7.75004 4.8375 6.79004 4.155 5.61254C3.765 4.93754 3.9975 4.06004 4.68 3.67004L5.9775 2.92754C6.57 2.57504 7.335 2.78504 7.6875 3.37754L7.77 3.52004C8.445 4.69754 9.555 4.69754 10.2375 3.52004L10.32 3.37754C10.6725 2.78504 11.4375 2.57504 12.03 2.92754L13.3275 3.67004C14.01 4.06004 14.2425 4.93754 13.8525 5.61254C13.17 6.79004 13.725 7.75004 15.0825 7.75004C15.8625 7.75004 16.5075 8.38754 16.5075 9.17503V10.495C16.5075 11.275 15.87 11.92 15.0825 11.92C13.725 11.92 13.17 12.88 13.8525 14.0575C14.2425 14.74 14.01 15.61 13.3275 16L12.03 16.7425C11.4375 17.095 10.6725 16.885 10.32 16.2925L10.2375 16.15C9.5625 14.9725 8.4525 14.9725 7.77 16.15L7.6875 16.2925C7.335 16.885 6.57 17.095 5.9775 16.7425L4.68 16C3.9975 15.61 3.765 14.7325 4.155 14.0575C4.8375 12.88 4.2825 11.92 2.925 11.92C2.1375 11.92 1.5 11.275 1.5 10.495Z"
							strokeWidth="1.5"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</symbol>

					<symbol width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" id="deployment-icon">
						<g clipPath="url(#clip0_9271_9859)">
							<mask id="path-1-inside-1_9420_9767" fill="white">
								<path d="M13.8155 6.99976C13.3572 5.94676 12.5663 5.07307 11.564 4.51256C10.5617 3.95204 9.40326 3.73563 8.26619 3.89649C7.12912 4.05735 6.07616 4.5866 5.26866 5.40314C4.46116 6.21968 3.94366 7.27847 3.79547 8.41726C3.08041 8.5885 2.45313 9.01639 2.03277 9.61965C1.61241 10.2229 1.42823 10.9596 1.51521 11.6897C1.6022 12.4198 1.95429 13.0925 2.50462 13.5802C3.05495 14.0678 3.76519 14.3363 4.50047 14.3348C4.69938 14.3348 4.89014 14.2557 5.0308 14.1151C5.17145 13.9744 5.25047 13.7837 5.25047 13.5848C5.25047 13.3858 5.17145 13.1951 5.0308 13.0544C4.89014 12.9138 4.69938 12.8348 4.50047 12.8348C4.10264 12.8348 3.72111 12.6767 3.43981 12.3954C3.1585 12.1141 3.00047 11.7326 3.00047 11.3348C3.00047 10.9369 3.1585 10.5554 3.43981 10.2741C3.72111 9.9928 4.10264 9.83476 4.50047 9.83476C4.69938 9.83476 4.89014 9.75574 5.0308 9.61509C5.17145 9.47444 5.25047 9.28367 5.25047 9.08476C5.25238 8.19772 5.56868 7.34008 6.14317 6.6642C6.71766 5.98832 7.51314 5.53797 8.38828 5.39317C9.26342 5.24836 10.1616 5.41847 10.9231 5.87327C11.6847 6.32807 12.2604 7.03812 12.548 7.87726C12.5908 8.00614 12.6679 8.12096 12.7709 8.20946C12.874 8.29796 12.9991 8.35682 13.133 8.37976C13.6325 8.47416 14.0854 8.73496 14.4177 9.11966C14.7501 9.50436 14.9424 9.99028 14.9633 10.4982C14.9841 11.0062 14.8324 11.5063 14.5327 11.9169C14.233 12.3276 13.8031 12.6247 13.313 12.7598C13.12 12.8095 12.9547 12.9338 12.8535 13.1054C12.7522 13.277 12.7232 13.4818 12.773 13.6748C12.8227 13.8677 12.947 14.033 13.1186 14.1343C13.2902 14.2355 13.495 14.2645 13.688 14.2148C14.4773 14.0062 15.1769 13.5458 15.6807 12.9034C16.1845 12.261 16.4649 11.4717 16.4793 10.6555C16.4938 9.83921 16.2414 9.04054 15.7606 8.38075C15.2799 7.72096 14.5969 7.23608 13.8155 6.99976V6.99976ZM9.53297 8.55226C9.46164 8.48398 9.37753 8.43046 9.28547 8.39476C9.10287 8.31975 8.89806 8.31975 8.71547 8.39476C8.6234 8.43046 8.53929 8.48398 8.46797 8.55226L6.21797 10.8023C6.07674 10.9435 5.9974 11.135 5.9974 11.3348C5.9974 11.5345 6.07674 11.726 6.21797 11.8673C6.35919 12.0085 6.55074 12.0878 6.75047 12.0878C6.95019 12.0878 7.14174 12.0085 7.28297 11.8673L8.25047 10.8923V15.0848C8.25047 15.2837 8.32948 15.4744 8.47014 15.6151C8.61079 15.7557 8.80155 15.8348 9.00047 15.8348C9.19938 15.8348 9.39014 15.7557 9.5308 15.6151C9.67145 15.4744 9.75047 15.2837 9.75047 15.0848V10.8923L10.718 11.8673C10.7877 11.9376 10.8706 11.9934 10.962 12.0314C11.0534 12.0695 11.1515 12.0891 11.2505 12.0891C11.3495 12.0891 11.4475 12.0695 11.5389 12.0314C11.6303 11.9934 11.7132 11.9376 11.783 11.8673C11.8533 11.7975 11.9091 11.7146 11.9471 11.6232C11.9852 11.5318 12.0048 11.4338 12.0048 11.3348C12.0048 11.2358 11.9852 11.1377 11.9471 11.0463C11.9091 10.9549 11.8533 10.872 11.783 10.8023L9.53297 8.55226Z" />
							</mask>
							<path
								d="M13.8155 6.99976C13.3572 5.94676 12.5663 5.07307 11.564 4.51256C10.5617 3.95204 9.40326 3.73563 8.26619 3.89649C7.12912 4.05735 6.07616 4.5866 5.26866 5.40314C4.46116 6.21968 3.94366 7.27847 3.79547 8.41726C3.08041 8.5885 2.45313 9.01639 2.03277 9.61965C1.61241 10.2229 1.42823 10.9596 1.51521 11.6897C1.6022 12.4198 1.95429 13.0925 2.50462 13.5802C3.05495 14.0678 3.76519 14.3363 4.50047 14.3348C4.69938 14.3348 4.89014 14.2557 5.0308 14.1151C5.17145 13.9744 5.25047 13.7837 5.25047 13.5848C5.25047 13.3858 5.17145 13.1951 5.0308 13.0544C4.89014 12.9138 4.69938 12.8348 4.50047 12.8348C4.10264 12.8348 3.72111 12.6767 3.43981 12.3954C3.1585 12.1141 3.00047 11.7326 3.00047 11.3348C3.00047 10.9369 3.1585 10.5554 3.43981 10.2741C3.72111 9.9928 4.10264 9.83476 4.50047 9.83476C4.69938 9.83476 4.89014 9.75574 5.0308 9.61509C5.17145 9.47444 5.25047 9.28367 5.25047 9.08476C5.25238 8.19772 5.56868 7.34008 6.14317 6.6642C6.71766 5.98832 7.51314 5.53797 8.38828 5.39317C9.26342 5.24836 10.1616 5.41847 10.9231 5.87327C11.6847 6.32807 12.2604 7.03812 12.548 7.87726C12.5908 8.00614 12.6679 8.12096 12.7709 8.20946C12.874 8.29796 12.9991 8.35682 13.133 8.37976C13.6325 8.47416 14.0854 8.73496 14.4177 9.11966C14.7501 9.50436 14.9424 9.99028 14.9633 10.4982C14.9841 11.0062 14.8324 11.5063 14.5327 11.9169C14.233 12.3276 13.8031 12.6247 13.313 12.7598C13.12 12.8095 12.9547 12.9338 12.8535 13.1054C12.7522 13.277 12.7232 13.4818 12.773 13.6748C12.8227 13.8677 12.947 14.033 13.1186 14.1343C13.2902 14.2355 13.495 14.2645 13.688 14.2148C14.4773 14.0062 15.1769 13.5458 15.6807 12.9034C16.1845 12.261 16.4649 11.4717 16.4793 10.6555C16.4938 9.83921 16.2414 9.04054 15.7606 8.38075C15.2799 7.72096 14.5969 7.23608 13.8155 6.99976V6.99976ZM9.53297 8.55226C9.46164 8.48398 9.37753 8.43046 9.28547 8.39476C9.10287 8.31975 8.89806 8.31975 8.71547 8.39476C8.6234 8.43046 8.53929 8.48398 8.46797 8.55226L6.21797 10.8023C6.07674 10.9435 5.9974 11.135 5.9974 11.3348C5.9974 11.5345 6.07674 11.726 6.21797 11.8673C6.35919 12.0085 6.55074 12.0878 6.75047 12.0878C6.95019 12.0878 7.14174 12.0085 7.28297 11.8673L8.25047 10.8923V15.0848C8.25047 15.2837 8.32948 15.4744 8.47014 15.6151C8.61079 15.7557 8.80155 15.8348 9.00047 15.8348C9.19938 15.8348 9.39014 15.7557 9.5308 15.6151C9.67145 15.4744 9.75047 15.2837 9.75047 15.0848V10.8923L10.718 11.8673C10.7877 11.9376 10.8706 11.9934 10.962 12.0314C11.0534 12.0695 11.1515 12.0891 11.2505 12.0891C11.3495 12.0891 11.4475 12.0695 11.5389 12.0314C11.6303 11.9934 11.7132 11.9376 11.783 11.8673C11.8533 11.7975 11.9091 11.7146 11.9471 11.6232C11.9852 11.5318 12.0048 11.4338 12.0048 11.3348C12.0048 11.2358 11.9852 11.1377 11.9471 11.0463C11.9091 10.9549 11.8533 10.872 11.783 10.8023L9.53297 8.55226Z"
								strokeWidth="3"
								mask="url(#path-1-inside-1_9420_9767)"
							/>
						</g>
						<defs>
							<clipPath id="clip0_9271_9859">
								<rect width="18" height="18" fill="white" transform="translate(0 0.834961)" />
							</clipPath>
						</defs>
					</symbol>

					<symbol width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" id="faqs-icon">
						<path
							d="M12.75 14.6573H9.75L6.41249 16.8772C5.91749 17.2072 5.25 16.8548 5.25 16.2548V14.6573C3 14.6573 1.5 13.1573 1.5 10.9073V6.40723C1.5 4.15723 3 2.65723 5.25 2.65723H12.75C15 2.65723 16.5 4.15723 16.5 6.40723V10.9073C16.5 13.1573 15 14.6573 12.75 14.6573Z"
							strokeWidth="1.5"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M8.99986 9.35498V9.19751C8.99986 8.68751 9.31488 8.4175 9.62988 8.2C9.93738 7.99 10.2448 7.72001 10.2448 7.22501C10.2448 6.53501 9.68986 5.97998 8.99986 5.97998C8.30986 5.97998 7.75488 6.53501 7.75488 7.22501"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path d="M8.99662 11.1475H9.00337" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</symbol>

					<symbol width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" id="forward-proxies-icon">
						<g clipPath="url(#clip0_9271_9859)">
							<mask id="path-1-inside-1_9271_9859" fill="white">
								<path d="M6 5.33496C6.14834 5.33496 6.29334 5.29097 6.41668 5.20856C6.54001 5.12615 6.63614 5.00902 6.69291 4.87197C6.74968 4.73493 6.76453 4.58413 6.73559 4.43864C6.70665 4.29316 6.63522 4.15952 6.53033 4.05463C6.42544 3.94974 6.2918 3.87831 6.14632 3.84937C6.00083 3.82043 5.85003 3.83529 5.71299 3.89205C5.57594 3.94882 5.45881 4.04495 5.3764 4.16828C5.29399 4.29162 5.25 4.43662 5.25 4.58496C5.25 4.78387 5.32902 4.97464 5.46967 5.11529C5.61032 5.25594 5.80109 5.33496 6 5.33496ZM15.75 15.085H11.115C11.003 14.7704 10.8224 14.4847 10.5863 14.2486C10.3502 14.0125 10.0645 13.8319 9.75 13.72V12.085H12.75C13.3467 12.085 13.919 11.8479 14.341 11.426C14.7629 11.004 15 10.4317 15 9.83496V8.33496C14.9967 7.77992 14.7883 7.24569 14.415 6.83496C14.7883 6.42423 14.9967 5.89 15 5.33496V3.83496C15 3.23822 14.7629 2.66593 14.341 2.24397C13.919 1.82201 13.3467 1.58496 12.75 1.58496H5.25C4.65326 1.58496 4.08097 1.82201 3.65901 2.24397C3.23705 2.66593 3 3.23822 3 3.83496V5.33496C3.00331 5.89 3.21166 6.42423 3.585 6.83496C3.21166 7.24569 3.00331 7.77992 3 8.33496V9.83496C3 10.4317 3.23705 11.004 3.65901 11.426C4.08097 11.8479 4.65326 12.085 5.25 12.085H8.25V13.72C7.93545 13.8319 7.64977 14.0125 7.41368 14.2486C7.17758 14.4847 6.99699 14.7704 6.885 15.085H2.25C2.05109 15.085 1.86032 15.164 1.71967 15.3046C1.57902 15.4453 1.5 15.636 1.5 15.835C1.5 16.0339 1.57902 16.2246 1.71967 16.3653C1.86032 16.5059 2.05109 16.585 2.25 16.585H6.885C7.04265 17.0193 7.33022 17.3946 7.70862 17.6598C8.08703 17.925 8.53791 18.0673 9 18.0673C9.46209 18.0673 9.91297 17.925 10.2914 17.6598C10.6698 17.3946 10.9573 17.0193 11.115 16.585H15.75C15.9489 16.585 16.1397 16.5059 16.2803 16.3653C16.421 16.2246 16.5 16.0339 16.5 15.835C16.5 15.636 16.421 15.4453 16.2803 15.3046C16.1397 15.164 15.9489 15.085 15.75 15.085ZM4.5 3.83496C4.5 3.63605 4.57902 3.44528 4.71967 3.30463C4.86032 3.16398 5.05109 3.08496 5.25 3.08496H12.75C12.9489 3.08496 13.1397 3.16398 13.2803 3.30463C13.421 3.44528 13.5 3.63605 13.5 3.83496V5.33496C13.5 5.53387 13.421 5.72464 13.2803 5.86529C13.1397 6.00594 12.9489 6.08496 12.75 6.08496H5.25C5.05109 6.08496 4.86032 6.00594 4.71967 5.86529C4.57902 5.72464 4.5 5.53387 4.5 5.33496V3.83496ZM5.25 10.585C5.05109 10.585 4.86032 10.5059 4.71967 10.3653C4.57902 10.2246 4.5 10.0339 4.5 9.83496V8.33496C4.5 8.13605 4.57902 7.94528 4.71967 7.80463C4.86032 7.66398 5.05109 7.58496 5.25 7.58496H12.75C12.9489 7.58496 13.1397 7.66398 13.2803 7.80463C13.421 7.94528 13.5 8.13605 13.5 8.33496V9.83496C13.5 10.0339 13.421 10.2246 13.2803 10.3653C13.1397 10.5059 12.9489 10.585 12.75 10.585H5.25ZM9 16.585C8.85166 16.585 8.70666 16.541 8.58332 16.4586C8.45999 16.3762 8.36386 16.259 8.30709 16.122C8.25032 15.9849 8.23547 15.8341 8.26441 15.6886C8.29335 15.5432 8.36478 15.4095 8.46967 15.3046C8.57456 15.1997 8.7082 15.1283 8.85368 15.0994C8.99917 15.0704 9.14997 15.0853 9.28701 15.1421C9.42406 15.1988 9.54119 15.2949 9.6236 15.4183C9.70601 15.5416 9.75 15.6866 9.75 15.835C9.75 16.0339 9.67098 16.2246 9.53033 16.3653C9.38968 16.5059 9.19891 16.585 9 16.585ZM6 8.33496C5.85166 8.33496 5.70666 8.37895 5.58332 8.46136C5.45999 8.54377 5.36386 8.6609 5.30709 8.79795C5.25032 8.93499 5.23547 9.08579 5.26441 9.23128C5.29335 9.37676 5.36478 9.5104 5.46967 9.61529C5.57456 9.72018 5.7082 9.79161 5.85368 9.82055C5.99917 9.84949 6.14997 9.83464 6.28701 9.77787C6.42406 9.7211 6.54119 9.62498 6.6236 9.50164C6.70601 9.3783 6.75 9.2333 6.75 9.08496C6.75 8.88605 6.67098 8.69528 6.53033 8.55463C6.38968 8.41398 6.19891 8.33496 6 8.33496V8.33496Z" />
							</mask>
							<path
								d="M6 5.33496C6.14834 5.33496 6.29334 5.29097 6.41668 5.20856C6.54001 5.12615 6.63614 5.00902 6.69291 4.87197C6.74968 4.73493 6.76453 4.58413 6.73559 4.43864C6.70665 4.29316 6.63522 4.15952 6.53033 4.05463C6.42544 3.94974 6.2918 3.87831 6.14632 3.84937C6.00083 3.82043 5.85003 3.83529 5.71299 3.89205C5.57594 3.94882 5.45881 4.04495 5.3764 4.16828C5.29399 4.29162 5.25 4.43662 5.25 4.58496C5.25 4.78387 5.32902 4.97464 5.46967 5.11529C5.61032 5.25594 5.80109 5.33496 6 5.33496ZM15.75 15.085H11.115C11.003 14.7704 10.8224 14.4847 10.5863 14.2486C10.3502 14.0125 10.0645 13.8319 9.75 13.72V12.085H12.75C13.3467 12.085 13.919 11.8479 14.341 11.426C14.7629 11.004 15 10.4317 15 9.83496V8.33496C14.9967 7.77992 14.7883 7.24569 14.415 6.83496C14.7883 6.42423 14.9967 5.89 15 5.33496V3.83496C15 3.23822 14.7629 2.66593 14.341 2.24397C13.919 1.82201 13.3467 1.58496 12.75 1.58496H5.25C4.65326 1.58496 4.08097 1.82201 3.65901 2.24397C3.23705 2.66593 3 3.23822 3 3.83496V5.33496C3.00331 5.89 3.21166 6.42423 3.585 6.83496C3.21166 7.24569 3.00331 7.77992 3 8.33496V9.83496C3 10.4317 3.23705 11.004 3.65901 11.426C4.08097 11.8479 4.65326 12.085 5.25 12.085H8.25V13.72C7.93545 13.8319 7.64977 14.0125 7.41368 14.2486C7.17758 14.4847 6.99699 14.7704 6.885 15.085H2.25C2.05109 15.085 1.86032 15.164 1.71967 15.3046C1.57902 15.4453 1.5 15.636 1.5 15.835C1.5 16.0339 1.57902 16.2246 1.71967 16.3653C1.86032 16.5059 2.05109 16.585 2.25 16.585H6.885C7.04265 17.0193 7.33022 17.3946 7.70862 17.6598C8.08703 17.925 8.53791 18.0673 9 18.0673C9.46209 18.0673 9.91297 17.925 10.2914 17.6598C10.6698 17.3946 10.9573 17.0193 11.115 16.585H15.75C15.9489 16.585 16.1397 16.5059 16.2803 16.3653C16.421 16.2246 16.5 16.0339 16.5 15.835C16.5 15.636 16.421 15.4453 16.2803 15.3046C16.1397 15.164 15.9489 15.085 15.75 15.085ZM4.5 3.83496C4.5 3.63605 4.57902 3.44528 4.71967 3.30463C4.86032 3.16398 5.05109 3.08496 5.25 3.08496H12.75C12.9489 3.08496 13.1397 3.16398 13.2803 3.30463C13.421 3.44528 13.5 3.63605 13.5 3.83496V5.33496C13.5 5.53387 13.421 5.72464 13.2803 5.86529C13.1397 6.00594 12.9489 6.08496 12.75 6.08496H5.25C5.05109 6.08496 4.86032 6.00594 4.71967 5.86529C4.57902 5.72464 4.5 5.53387 4.5 5.33496V3.83496ZM5.25 10.585C5.05109 10.585 4.86032 10.5059 4.71967 10.3653C4.57902 10.2246 4.5 10.0339 4.5 9.83496V8.33496C4.5 8.13605 4.57902 7.94528 4.71967 7.80463C4.86032 7.66398 5.05109 7.58496 5.25 7.58496H12.75C12.9489 7.58496 13.1397 7.66398 13.2803 7.80463C13.421 7.94528 13.5 8.13605 13.5 8.33496V9.83496C13.5 10.0339 13.421 10.2246 13.2803 10.3653C13.1397 10.5059 12.9489 10.585 12.75 10.585H5.25ZM9 16.585C8.85166 16.585 8.70666 16.541 8.58332 16.4586C8.45999 16.3762 8.36386 16.259 8.30709 16.122C8.25032 15.9849 8.23547 15.8341 8.26441 15.6886C8.29335 15.5432 8.36478 15.4095 8.46967 15.3046C8.57456 15.1997 8.7082 15.1283 8.85368 15.0994C8.99917 15.0704 9.14997 15.0853 9.28701 15.1421C9.42406 15.1988 9.54119 15.2949 9.6236 15.4183C9.70601 15.5416 9.75 15.6866 9.75 15.835C9.75 16.0339 9.67098 16.2246 9.53033 16.3653C9.38968 16.5059 9.19891 16.585 9 16.585ZM6 8.33496C5.85166 8.33496 5.70666 8.37895 5.58332 8.46136C5.45999 8.54377 5.36386 8.6609 5.30709 8.79795C5.25032 8.93499 5.23547 9.08579 5.26441 9.23128C5.29335 9.37676 5.36478 9.5104 5.46967 9.61529C5.57456 9.72018 5.7082 9.79161 5.85368 9.82055C5.99917 9.84949 6.14997 9.83464 6.28701 9.77787C6.42406 9.7211 6.54119 9.62498 6.6236 9.50164C6.70601 9.3783 6.75 9.2333 6.75 9.08496C6.75 8.88605 6.67098 8.69528 6.53033 8.55463C6.38968 8.41398 6.19891 8.33496 6 8.33496V8.33496Z"
								strokeWidth="3"
								mask="url(#path-1-inside-1_9271_9859)"
							/>
						</g>
						<defs>
							<clipPath id="clip0_9271_9859">
								<rect width="18" height="18" fill="white" transform="translate(0 0.834961)" />
							</clipPath>
						</defs>
					</symbol>

					<symbol width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" id="getting-started-icon">
						<g clipPath="url(#clip0_9246_10996)">
							<path
								d="M13.7698 5.81494C14.7136 6.75903 15.3563 7.96177 15.6166 9.27108C15.8768 10.5804 15.743 11.9375 15.2321 13.1708C14.7211 14.404 13.856 15.4581 12.746 16.1997C11.636 16.9413 10.331 17.3371 8.9961 17.3371C7.66117 17.3371 6.35621 16.9413 5.24623 16.1997C4.13624 15.4581 3.27108 14.404 2.76012 13.1708C2.24916 11.9375 2.11536 10.5804 2.37563 9.27108C2.63591 7.96177 3.27856 6.75903 4.22235 5.81494"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path d="M9 2.33496V9.83496" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</g>
						<defs>
							<clipPath id="clip0_9246_10996">
								<rect width="18" height="18" fill="white" transform="translate(0 0.834961)" />
							</clipPath>
						</defs>
					</symbol>

					<symbol width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg" id="introduction-icon">
						<path d="M15.0001 6.83484L10.5001 2.88984C10.0876 2.52088 9.55352 2.31689 9.00007 2.31689C8.44662 2.31689 7.91259 2.52088 7.50007 2.88984L3.00007 6.83484C2.76185 7.0479 2.57175 7.30926 2.44243 7.60153C2.3131 7.89379 2.24753 8.21026 2.25007 8.52984V15.0848C2.25007 15.6816 2.48712 16.2539 2.90908 16.6758C3.33104 17.0978 3.90333 17.3348 4.50007 17.3348H13.5001C14.0968 17.3348 14.6691 17.0978 15.0911 16.6758C15.513 16.2539 15.7501 15.6816 15.7501 15.0848V8.52234C15.7515 8.20402 15.6855 7.889 15.5562 7.5981C15.4269 7.30721 15.2373 7.04706 15.0001 6.83484ZM10.5001 15.8348H7.50007V12.0848C7.50007 11.8859 7.57909 11.6952 7.71974 11.5545C7.86039 11.4139 8.05116 11.3348 8.25007 11.3348H9.75007C9.94898 11.3348 10.1397 11.4139 10.2804 11.5545C10.4211 11.6952 10.5001 11.8859 10.5001 12.0848V15.8348ZM14.2501 15.0848C14.2501 15.2838 14.1711 15.4745 14.0304 15.6152C13.8897 15.7558 13.699 15.8348 13.5001 15.8348H12.0001V12.0848C12.0001 11.4881 11.763 10.9158 11.3411 10.4939C10.9191 10.0719 10.3468 9.83484 9.75007 9.83484H8.25007C7.65333 9.83484 7.08104 10.0719 6.65908 10.4939C6.23712 10.9158 6.00007 11.4881 6.00007 12.0848V15.8348H4.50007C4.30116 15.8348 4.11039 15.7558 3.96974 15.6152C3.82909 15.4745 3.75007 15.2838 3.75007 15.0848V8.52234C3.75021 8.41585 3.77302 8.31062 3.81698 8.21363C3.86095 8.11664 3.92507 8.03013 4.00507 7.95984L8.50507 4.02234C8.64194 3.9021 8.81789 3.83579 9.00007 3.83579C9.18225 3.83579 9.3582 3.9021 9.49507 4.02234L13.9951 7.95984C14.0751 8.03013 14.1392 8.11664 14.1832 8.21363C14.2271 8.31062 14.2499 8.41585 14.2501 8.52234V15.0848Z" />
					</symbol>

					<symbol width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" id="product-manual-icon">
						<path
							d="M16.5 13.3897V4.33724C16.5 3.43724 15.765 2.76974 14.8725 2.84474H14.8275C13.2525 2.97974 10.86 3.78224 9.525 4.62224L9.3975 4.70474C9.18 4.83974 8.82 4.83974 8.6025 4.70474L8.415 4.59224C7.08 3.75974 4.695 2.96474 3.12 2.83724C2.2275 2.76224 1.5 3.43724 1.5 4.32974V13.3897C1.5 14.1097 2.085 14.7847 2.805 14.8747L3.0225 14.9047C4.65 15.1222 7.1625 15.9472 8.6025 16.7347L8.6325 16.7497C8.835 16.8622 9.1575 16.8622 9.3525 16.7497C10.7925 15.9547 13.3125 15.1222 14.9475 14.9047L15.195 14.8747C15.915 14.7847 16.5 14.1097 16.5 13.3897Z"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path d="M9 4.95239V16.2024" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M5.8125 7.20239H4.125" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M6.375 9.45239H4.125" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</symbol>

					<symbol width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" id="release-notes-icon">
						<path
							d="M15 7.02246V14.335C15 16.585 13.6575 17.335 12 17.335H6C4.3425 17.335 3 16.585 3 14.335V7.02246C3 4.58496 4.3425 4.02246 6 4.02246C6 4.48746 6.18748 4.90746 6.49498 5.21496C6.80248 5.52246 7.2225 5.70996 7.6875 5.70996H10.3125C11.2425 5.70996 12 4.95246 12 4.02246C13.6575 4.02246 15 4.58496 15 7.02246Z"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M12 4.02246C12 4.95246 11.2425 5.70996 10.3125 5.70996H7.6875C7.2225 5.70996 6.80248 5.52246 6.49498 5.21496C6.18748 4.90746 6 4.48746 6 4.02246C6 3.09246 6.7575 2.33496 7.6875 2.33496H10.3125C10.7775 2.33496 11.1975 2.52246 11.505 2.82996C11.8125 3.13746 12 3.55746 12 4.02246Z"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path d="M6 10.585H9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M6 13.585H12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</symbol>

					<symbol width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" id="resources-icon">
						<path
							d="M15 7.02246V14.335C15 16.585 13.6575 17.335 12 17.335H6C4.3425 17.335 3 16.585 3 14.335V7.02246C3 4.58496 4.3425 4.02246 6 4.02246C6 4.48746 6.18748 4.90746 6.49498 5.21496C6.80248 5.52246 7.2225 5.70996 7.6875 5.70996H10.3125C11.2425 5.70996 12 4.95246 12 4.02246C13.6575 4.02246 15 4.58496 15 7.02246Z"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M12 4.02246C12 4.95246 11.2425 5.70996 10.3125 5.70996H7.6875C7.2225 5.70996 6.80248 5.52246 6.49498 5.21496C6.18748 4.90746 6 4.48746 6 4.02246C6 3.09246 6.7575 2.33496 7.6875 2.33496H10.3125C10.7775 2.33496 11.1975 2.52246 11.505 2.82996C11.8125 3.13746 12 3.55746 12 4.02246Z"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path d="M6 10.585H9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M6 13.585H12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</symbol>

					<symbol width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" id="sdk-icon">
						<g clipPath="url(#clip0_9246_9834)">
							<path d="M1.5 13.585L9 17.335L16.5 13.585" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M1.5 9.83496L9 13.585L16.5 9.83496" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M9 2.33496L1.5 6.08496L9 9.83496L16.5 6.08496L9 2.33496Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</g>
						<defs>
							<clipPath id="clip0_9246_9834">
								<rect width="18" height="18" fill="white" transform="translate(0 0.834961)" />
							</clipPath>
						</defs>
					</symbol>

					<symbol width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" id="tools-icon">
						<path
							d="M11.025 5.55976C10.8876 5.69996 10.8106 5.88845 10.8106 6.08476C10.8106 6.28108 10.8876 6.46957 11.025 6.60976L12.225 7.80976C12.3652 7.94718 12.5537 8.02416 12.75 8.02416C12.9463 8.02416 13.1348 7.94718 13.275 7.80976L16.1025 4.98226C16.4796 5.81565 16.5938 6.74419 16.4299 7.64412C16.2659 8.54406 15.8315 9.37265 15.1847 10.0195C14.5379 10.6663 13.7093 11.1006 12.8094 11.2646C11.9094 11.4286 10.9809 11.3144 10.1475 10.9373L4.96501 16.1198C4.66664 16.4181 4.26197 16.5858 3.84001 16.5858C3.41806 16.5858 3.01338 16.4181 2.71501 16.1198C2.41665 15.8214 2.24902 15.4167 2.24902 14.9948C2.24902 14.5728 2.41665 14.1681 2.71501 13.8698L7.89751 8.68726C7.52039 7.85387 7.4062 6.92534 7.57017 6.0254C7.73414 5.12547 8.16848 4.29688 8.8153 3.65005C9.46213 3.00323 10.2907 2.56889 11.1907 2.40492C12.0906 2.24095 13.0191 2.35514 13.8525 2.73226L11.0325 5.55226L11.025 5.55976Z"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</symbol>

					<symbol width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" id="angle-down-icon">
						<path d="M11.3333 6.11333C11.2084 5.98916 11.0395 5.91946 10.8633 5.91946C10.6872 5.91946 10.5182 5.98916 10.3933 6.11333L8.00001 8.47333L5.64001 6.11333C5.5151 5.98916 5.34613 5.91946 5.17001 5.91946C4.99388 5.91946 4.82491 5.98916 4.70001 6.11333C4.63752 6.1753 4.58792 6.24904 4.55408 6.33027C4.52023 6.41151 4.50281 6.49865 4.50281 6.58666C4.50281 6.67467 4.52023 6.7618 4.55408 6.84304C4.58792 6.92428 4.63752 6.99802 4.70001 7.05999L7.52667 9.88666C7.58865 9.94914 7.66238 9.99874 7.74362 10.0326C7.82486 10.0664 7.912 10.0839 8.00001 10.0839C8.08801 10.0839 8.17515 10.0664 8.25639 10.0326C8.33763 9.99874 8.41136 9.94914 8.47334 9.88666L11.3333 7.05999C11.3958 6.99802 11.4454 6.92428 11.4793 6.84304C11.5131 6.7618 11.5305 6.67467 11.5305 6.58666C11.5305 6.49865 11.5131 6.41151 11.4793 6.33027C11.4454 6.24904 11.3958 6.1753 11.3333 6.11333Z" />
					</symbol>

					<symbol width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="arrow-circle-icon">
						<path
							d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8 1.33333C4.3181 1.33333 1.33333 4.3181 1.33333 8C1.33333 11.6819 4.3181 14.6667 8 14.6667Z"
							fill="transparent"
							strokeWidth="1.5"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path d="M7.16 10.3533L9.50667 8L7.16 5.64667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</symbol>
				</svg>
			</body>
			<Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} />

			<Script strategy="lazyOnload">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
					page_path: window.location.pathname,
					});
				`}
			</Script>
		</html>
	);
}
