'use client';
import Image from 'next/image';

import retries from '../../../../public/svg/retries 3.svg';
import circuit from '../../../../public/svg/circuit.svg';
import ssl from '../../../../public/svg/ssl.svg';
import rateLimiting from '../../../../public/svg/rate-limiting 2.svg';
import timeouts from '../../../../public/svg/timeouts.svg';
//
import postgresql from '../../../../public/svg/postgresql.svg';
import policies from '../../../../public/svg/policies.svg';
import archiving from '../../../../public/svg/archiving.svg';
import logs from '../../../../public/svg/logs.svg';
//
import control from '../../../../public/svg/control.svg';
import read from '../../../../public/svg/read.svg';
import multitenant from '../../../../public/svg/multitenant.svg';
import extendable from '../../../../public/svg/archiving.svg';
import extensive from '../../../../public/svg/logs.svg';
//
import hmac from '../../../../public/svg/hmac.svg';
import blacklisting from '../../../../public/svg/read.svg';
import tls from '../../../../public/svg/tls.svg';
//
import prometheus from '../../../../public/svg/prometheus.svg';
import telemetry from '../../../../public/svg/telemetry.svg';
//
import ingest from '../../../../public/svg/ingest.svg';
import connect from '../../../../public/svg/connect.svg';
import catalogue from '../../../../public/svg/catalogue.svg';
import portal from '../../../../public/svg/portal.svg';
import fineGrained from '../../../../public/svg/fine-grained.svg';
import support from '../../../../public/svg/support.svg';
import retry from '../../../../public/svg/retry.svg';
import synchronous from '../../../../public/svg/synchronous.svg';

const advancedFeatures = [
	{
		icon: retries,
		title: 'Retries.',
		description: 'Automatically attempts to resend webhooks if delivery fails, ensuring reliable message delivery.',
		link: 'https://docs.getconvoy.io/webhook-guides/webhook-retries#webhook-retries'
	},
	{
		icon: circuit,
		title: 'Circuit Breaking.',
		description:
			'Temporarily pause webhook delivery to failing endpoints, preventing repeated errors and maintain system stability by redirecting traffic away from problematic connections.',
		link: ''
	},
	{
		icon: ssl,
		title: 'Enforce SSL.',
		description:
			'Guarantee secure webhook delivery by requiring SSL/TLS in production, protecting data in transit from interception and tampering, and ensuring compliance with security standards.',
		link: ''
	},
	{
		icon: rateLimiting,
		title: 'Rate Limiting.',
		description: 'Control the number of webhooks sent per second, preventing overload and ensuring system stability.',
		link: ''
	},
	{
		icon: timeouts,
		title: 'Fine-grained Connection Timeouts.',
		description: 'Customise timeout settings for each webhook, optimising performance and resource usage.',
		link: ''
	}
];

const webhookFeatures = [
	{
		icon: postgresql,
		title: 'Built on PostgreSQL.',
		description: 'Leverage the world’s most ubiquitous database to ensure durability and reliability for all events, deliveries, and delivery attempts.',
		link: ''
	},
	{
		icon: policies,
		title: 'Flexible Retention Policies.',
		description:
			'Provide customisable data retention policies for archiving older events, optimising storage costs, and ensuring compliance with regulatory requirements efficiently.',
		link: ''
	},
	{
		icon: archiving,
		title: 'High-Performance Archiving to Object Storage.',
		description: "Utilise PostgreSQL partitioning to enable efficient archiving, maintaining the system's SLA and ensuring optimal performance.",
		link: ''
	},
	{
		icon: logs,
		title: 'Filter Webhook Logs.',
		description: 'Control the number of webhooks sent per second, preventing overload and ensuring system stability.',
		link: ''
	}
];

const architectureFeatures = [
	{
		icon: control,
		title: 'Control and Data Plane Architecture.',
		description: 'Achieve high availability and fault tolerance by splitting the ingestion and delivery pipeline (data plane) from the configuration layer (control plane).',
		link: ''
	},
	{
		icon: read,
		title: 'Read and Write Replicas.',
		description:
			'Leverage PostgreSQL read replicas to speed up read queries for the dashboard and other functions while writing only events, event deliveries and delivery attempts to the primary database.',
		link: ''
	},
	{
		icon: multitenant,
		title: 'Multi-tenant Data Plane.',
		description: 'Isolate large customers to their data plane nodes to maintain high SLAs even at peak traffic.',
		link: ''
	},
	{
		icon: extendable,
		title: 'Extendable.',
		description: 'Extend Convoy with plugins.',
		link: ''
	},
	{
		icon: extensive,
		title: 'Extensive Test Suites.',
		description: '',
		link: ''
	}
];

const secureFeatures = [
	{
		icon: hmac,
		title: 'HMAC Signatures.',
		description: 'Verify webhook authenticity using HMAC (Hash-based Message Authentication Code), ensuring data integrity and origin validation.',
		link: ''
	},
	{
		icon: blacklisting,
		title: 'Static IPs & IP Blacklisting.',
		description: 'Ensure consistent and secure webhook delivery from designated IP addresses as well as eliminating the possibility of SSRF by blacklisting IPs.',
		link: ''
	},
	{
		icon: tls,
		title: 'Mutual TLS.',
		description: 'Implements mutual authentication and encrypted communication, meeting stringent security and compliance standards required by specific industries.',
		link: ''
	}
];

const observabilityFeatures = [
	{
		icon: prometheus,
		title: 'Prometheus Metrics.',
		description: 'Easily diagnose all webhook delivery issues, like high latencies and high queue backlogs per tenant.',
		link: ''
	},
	{
		icon: telemetry,
		title: 'Open Telemetry.',
		description: 'Diagnose performance issues in your entire cluster with OpenTelemetry on any backend you choose.',
		link: ''
	}
];

const otherFeatures = [
	{
		icon: ingest,
		title: 'Ingest webhooks from any source.',
		description: 'Convoy’s flexible architecture enables you to ingest webhooks from just any source like Amazon SQS, Apache Kafka, Google PubSub, RabbitMQ and HTTP.',
		link: ''
	},
	{
		icon: connect,
		title: 'Connect directly to your CDC Pipeline.',
		description: 'You can connect directly to your CDC to ingest payloads that don’t fit any ingestion structure, but add javascript transformations to re-shape them.',
		link: ''
	},
	{
		icon: catalogue,
		title: 'Event Catalogue.',
		description: 'Publish your supported events with a valid openapi spec to enable your users to know what events are supported and their exact structure.',
		link: ''
	},
	{
		icon: portal,
		title: 'Developer Portal.',
		description: 'Create read or read-and-write developer portal for users to view their event deliveries, configure and debug their endpoints.',
		link: ''
	},
	{
		icon: fineGrained,
		title: 'Fine-grained webhook subscriptions.',
		description: 'Go beyond the basic event-type webhooks subscriptions and subscribe to specific events with a particular payload shape.',
		link: ''
	},

	{
		icon: support,
		title: 'Support multiple ingestion mechanisms.',
		description: '',
		link: ''
	},
	{
		icon: retry,
		title: 'Bulk Retry for Failed Event Deliveries',
		description: '',
		link: ''
	},
	{
		icon: synchronous,
		title: 'Synchronous Webhooks.',
		description: '',
		link: ''
	}
];

export default function WebhookGateway() {
	return (
		<main className="flex flex-col items-center pb-60px desktop:pb-120px w-full">
			<section className="pt-100px desktop:pt-150px px-20px flex items-start desktop:items-center flex-col max-w-[1180px] w-full">
				<h1 className="desktop:text-center font-medium text-[32px] desktop:text-[40px] mb-24px desktop:max-w-[683px] m-auto">The world’s most advanced Webhooks Gateway</h1>
				<p className="desktop:text-center text-[#666] text-16 desktop:text-16 desktop:max-w-[683px] desktop:m-auto mb-24px font-medium leading-[200%]">
					Secure <span className="text-[#2780F1]">send, receive and manage millions of webhooks reliably</span> with robust support for Retries, Rate Limiting, Static
					IPs, Circuit Breaking, Rolling Secrets and more.
				</p>

				<div className="flex desktop:justify-center desktop:mt-24px mb-56px">
					<a
						target="_blank"
						href="https://cloud.getconvoy.io/signup"
						className="pl-14px pr-12px py-10px text-14 font-semibold rounded-8px h-10 bg-[#2780F1] text-white-100 flex items-center">
						<span>See a demo</span>

						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" className="ml-1 mt-[1px]">
							<path d="M9.8803 9.50052L6.16797 5.7882L7.22863 4.72754L12.0016 9.50052L7.22863 14.2734L6.16797 13.2128L9.8803 9.50052Z" fill="white" />
						</svg>
					</a>
					<a
						target="_blank"
						href="https://cloud.getconvoy.io/login"
						className="px-16px py-10px text-14 ml-16px h-[40px] font-semibold rounded-8px bg-white-100 text-[#000] flex items-center justify-center border-[#E7E7E7] border shadow-btn">
						<span>Try for free</span>

						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="block ml-1 mt-[1px]">
							<path d="M12.0039 7.06066L5.54894 13.5156L4.48828 12.455L10.9432 6H5.2539V4.5H13.5039V12.75H12.0039V7.06066Z" fill="black" />
						</svg>
					</a>
				</div>
			</section>

			<section className="w-full max-w-[1280px] mx-auto px-4 mobile:px-6 desktop:px-8 pb-24px desktop:pb-72px">
				<div className="border border-[#EBEBEB] rounded-8px overflow-hidden w-full bg-white-100">
					<div className="w-full desktop:min-h-[168px] p-5 desktop:p-40px bg-gradient-to-b from-[#fff] from-[0%] to-[#2780F1]/20 to-[134.32%] flex items-center justify-start relative overflow-hidden">
						<div className="bg-[linear-gradient(to_right,#E7E7E74D_1px,transparent_1px),linear-gradient(to_bottom,#E7E7E74D_1px,transparent_1px)] bg-[size:2.54rem_2.35rem] absolute -left-[1.5px] -top-[1px] w-full h-full"></div>

						<div className="flex flex-col w-[704px] z-10 gap-2 desktop:gap-0">
							<h3 className="text-18 desktop:text-28 leading-[140%] font-semibold">Advanced endpoint management</h3>
							<p className="text-[#666] text-14 desktop:text-16 leading-[140%] desktop:leading-[160%] font-medium">
								Enhance your webhook reliability, security, and performance with advanced endpoint controls tailored to ensure stable, secure, and efficient message
								delivery.
							</p>
						</div>
					</div>

					<FeatureGrid features={advancedFeatures} />
				</div>
			</section>

			<section className="w-full max-w-[1280px] mx-auto px-4 mobile:px-6 desktop:px-8 pb-24px desktop:pb-72px">
				<div className="border border-[#EBEBEB] rounded-8px overflow-hidden w-full bg-white-100">
					<div className="w-full desktop:min-h-[168px] p-5 desktop:p-40px bg-gradient-to-b from-[#fff] from-[0%] to-[#AE27F166]/20 to-[134.32%] flex items-center justify-start relative overflow-hidden">
						<div className="bg-[linear-gradient(to_right,#E7E7E74D_1px,transparent_1px),linear-gradient(to_bottom,#E7E7E74D_1px,transparent_1px)] bg-[size:2.54rem_2.35rem] absolute -left-[1.5px] -top-[1px] w-full h-full"></div>

						<div className="flex flex-col w-[704px] z-10 gap-2 desktop:gap-0">
							<h3 className="text-18 desktop:text-28 leading-[140%] font-semibold">Rock-solid Webhooks Logs & Filtering</h3>
							<p className="text-[#666] text-14 desktop:text-16 leading-[140%] desktop:leading-[160%] font-medium">
								Enhance your webhook reliability, security, and performance with advanced endpoint controls tailored to ensure stable, secure, and efficient message
								delivery.
							</p>
						</div>
					</div>

					<FeatureGrid features={webhookFeatures} />
				</div>
			</section>

			<section className="w-full max-w-[1280px] mx-auto px-4 mobile:px-6 desktop:px-8 pb-24px desktop:pb-72px">
				<div className="border border-[#EBEBEB] rounded-8px overflow-hidden w-full bg-white-100">
					<div className="w-full desktop:min-h-[168px] p-5 desktop:p-40px bg-gradient-to-b from-[#fff] from-[0%] to-[#27F18566]/20 to-[134.32%] flex items-center justify-start relative overflow-hidden">
						<div className="bg-[linear-gradient(to_right,#E7E7E74D_1px,transparent_1px),linear-gradient(to_bottom,#E7E7E74D_1px,transparent_1px)] bg-[size:2.54rem_2.35rem] absolute -left-[1.5px] -top-[1px] w-full h-full"></div>

						<div className="flex flex-col w-[704px] z-10 gap-2 desktop:gap-0">
							<h3 className="text-18 desktop:text-28 leading-[140%] font-semibold">Highly Reliable Architecture</h3>
							<p className="text-[#666] text-14 desktop:text-16 leading-[140%] desktop:leading-[160%] font-medium">
								Enhance your webhook reliability, security, and performance with advanced endpoint controls tailored to ensure stable, secure, and efficient message
								delivery.
							</p>
						</div>
					</div>

					<FeatureGrid features={architectureFeatures} />
				</div>
			</section>

			<section className="w-full max-w-[1280px] mx-auto px-4 mobile:px-6 desktop:px-8 pb-24px desktop:pb-72px">
				<div className="border border-[#EBEBEB] rounded-8px overflow-hidden w-full bg-white-100">
					<div className="w-full desktop:min-h-[168px] p-5 desktop:p-40px bg-gradient-to-b from-[#fff] from-[0%] to-[#F1852766]/20 to-[134.32%] flex items-center justify-start relative overflow-hidden">
						<div className="bg-[linear-gradient(to_right,#E7E7E74D_1px,transparent_1px),linear-gradient(to_bottom,#E7E7E74D_1px,transparent_1px)] bg-[size:2.54rem_2.35rem] absolute -left-[1.5px] -top-[1px] w-full h-full"></div>

						<div className="flex flex-col w-[704px] z-10 gap-2 desktop:gap-0">
							<h3 className="text-18 desktop:text-28 leading-[140%] font-semibold">Secure Webhook Delivery</h3>
							<p className="text-[#666] text-14 desktop:text-16 leading-[140%] desktop:leading-[160%] font-medium">
								Enhance your webhook reliability, security, and performance with advanced endpoint controls tailored to ensure stable, secure, and efficient message
								delivery.
							</p>
						</div>
					</div>

					<FeatureGrid features={secureFeatures} />
				</div>
			</section>

			<section className="w-full max-w-[1280px] mx-auto px-4 mobile:px-6 desktop:px-8 pb-24px desktop:pb-72px">
				<div className="border border-[#EBEBEB] rounded-8px overflow-hidden w-full bg-white-100">
					<div className="w-full desktop:min-h-[168px] p-5 desktop:p-40px bg-gradient-to-b from-[#fff] from-[0%] to-[#AEF12766]/20 to-[134.32%] flex items-center justify-start relative overflow-hidden">
						<div className="bg-[linear-gradient(to_right,#E7E7E74D_1px,transparent_1px),linear-gradient(to_bottom,#E7E7E74D_1px,transparent_1px)] bg-[size:2.54rem_2.35rem] absolute -left-[1.5px] -top-[1px] w-full h-full"></div>

						<div className="flex flex-col w-[704px] z-10 gap-2 desktop:gap-0">
							<h3 className="text-18 desktop:text-28 leading-[140%] font-semibold">Observability</h3>
							<p className="text-[#666] text-14 desktop:text-16 leading-[140%] desktop:leading-[160%] font-medium">
								Enhance your webhook reliability, security, and performance with advanced endpoint controls tailored to ensure stable, secure, and efficient message
								delivery.
							</p>
						</div>
					</div>

					<FeatureGrid features={observabilityFeatures} />
				</div>
			</section>

			<section className="w-full max-w-[1280px] mx-auto px-4 mobile:px-6 desktop:px-8 pb-24px desktop:pb-72px">
				<div className="border border-[#EBEBEB] rounded-8px overflow-hidden w-full bg-white-100">
					<div className="w-full desktop:min-h-[168px] p-5 desktop:p-40px bg-gradient-to-b from-[#fff] from-[0%] to-[#F1B52766]/20 to-[134.32%] flex items-center justify-start relative overflow-hidden">
						<div className="bg-[linear-gradient(to_right,#E7E7E74D_1px,transparent_1px),linear-gradient(to_bottom,#E7E7E74D_1px,transparent_1px)] bg-[size:2.54rem_2.35rem] absolute -left-[1.5px] -top-[1px] w-full h-full"></div>

						<div className="flex flex-col w-[704px] z-10 gap-2 desktop:gap-0">
							<h3 className="text-18 desktop:text-28 leading-[140%] font-semibold">Other Core Features</h3>
							<p className="text-[#666] text-14 desktop:text-16 leading-[140%] desktop:leading-[160%] font-medium">
								Enhance your webhook reliability, security, and performance with advanced endpoint controls tailored to ensure stable, secure, and efficient message
								delivery.
							</p>
						</div>
					</div>

					<FeatureGrid features={otherFeatures} />
				</div>
			</section>
		</main>
	);
}

type Features = {
	icon: any;
	title: string;
	description: string;
	link: string;
};

function FeatureGrid({ features }: { features: Features[] }) {
	return (
		<div className="w-full grid grid-cols-1 md-old:grid-cols-2 lg-old:grid-cols-3 px-0 py-0 desktop:p-0 divide-y-[1px] divide-x-[1px] divide-[#E7E7E74D]">
			{features.map((feature, index) => (
				<div className="bor der-r border-[#E7E7E74D] p-5 lg-old:p-10 w-full max">
					<div className="max-w- [322px] flex flex-col justify-between h-full">
						<div className="flex flex-col gap-4">
							<Image src={feature.icon} alt="play" className="cursor-pointer w-32px h-32px lg-old:w-40px lg-old:h-40px" />
							<p className="text-[#666] text-16 leading-[160%]">
								<span className="text-[#000] font-medium mr-1">{feature.title}</span>
								{feature.description}
							</p>
						</div>

						<a href={feature.link} className="flex items-center gap-1 mt-4">
							<p className="text-[#666] text-14 font-semibold">Learn more</p>
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
								<path d="M9.8764 9.00052L6.16406 5.2882L7.22473 4.22754L11.9977 9.00052L7.22473 13.7734L6.16406 12.7128L9.8764 9.00052Z" fill="#666666" />
							</svg>
						</a>
					</div>
				</div>
			))}
		</div>
	);
}
