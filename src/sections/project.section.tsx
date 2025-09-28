import { SectionTitle } from '../components/section-title.component';
import { netflixclone } from '../images/netflix-clone.png';
import { portfolio } from '../images/portfolio.png';
import { weatherdashboard } from '../images/weather-dashboard.png';
import { taskmanager } from '../images/task-manager.png';

const timeline = [
	
	{
		title: 'WEATHER-DASHBOARD-WEBAPP',
		item: [
			{
				title: 'Full Stack Project',
				
				place: <div className="liveUrl"><a href="https://weather-dashboardapp.netlify.app/" target="_blank" rel="noopener noreferrer">WEATHER-DASHBOARD</a></div>,
				liveUrl: 'https://weather-dashboardapp.netlify.app/',
				Period: '2025 - September',
				description: (
					<ul>
						<li>
							A weather dashboard app transforms raw meteorological data into clear, real-time insights—helping users make informed decisions with an intuitive interface, reliable APIs, and a seamless user experience.
						</li>
					</ul>
				),
				image: weatherdashboard,
			},
			
		],
		
	},
	
	{
		title: 'TASK-MANAGER-APP',
		item: [
			{
				title: 'Full Stack Project',
				place: <div className="liveUrl"><a href="https://task-management-app-master-6yt.vercel.app/" target="_blank" rel="noopener noreferrer">TASK-MANAGER-APP</a></div>,
				liveUrl: 'https://task-management-app-master-6yt.vercel.app/',
				Period: '2025 - August',
				description: (
					<ul>
						<li>
							A task manager app is more than a to-do list—it’s a productivity companion that organizes priorities, tracks progress, and simplifies workflow through clean design and smart functionality.
						</li>
					</ul>
				),
				image: taskmanager,
			},
		],
	},
	{
		title: 'PORTFOLIO',
		item: [
			{
				title: 'Frontend Development',
				place: <div className="liveUrl"><a href="https://shubhanshukesug.netlify.app/" target="_blank" rel="noopener noreferrer">PORTFOLIO</a></div>,
				liveUrl: 'https://shubhanshukesug.netlify.app/',
				Period: '2025 - January',
				description: (
					<ul>
						<li>A portfolio is not just a collection of projects—it’s a digital identity that reflects creativity, technical expertise, and the ability to craft engaging user experiences</li>
					</ul>
				),
				image: portfolio,
			},

		],
	},
	{
		title: 'NETFLIX CLONE',
		item: [
			{
				title: 'FrontEnd Development',
				
				place: <div className="liveUrl"><a href="https://wonderful-sherbet-4f148d.netlify.app/" target="_blank" rel="noopener noreferrer">NETFLIX-CLONE</a></div>,
				liveUrl: 'https://wonderful-sherbet-4f148d.netlify.app/',
				Period: '2023 - November',
				description: (
					<ul>
						<li>
							A Netflix clone is a web or mobile application built to mimic the core functionality and design of Netflix, the popular streaming platform.
						</li>
					</ul>
				),
				image: "netflixclone",
			},
		],
	},
];

export const ProjectSection = () => {
	return (
		<section className="project-section container" id="projects">
			<SectionTitle title="Projects" subTitle="Done" />
			<div>
				<div className="intro">
					<p style={{ marginTop: '20px' }}>
						👋 A full stack developer is not just a coder, but an architect who bridges the gap between ideas and execution—crafting seamless experiences from database to user interface.
					</p>
				</div>
				{timeline.map(({ item, title }, idx) => (
					<div className="timeline" key={idx}>
						<h1>{title}</h1>
						{item.map(({ title, description, Period, image, liveUrl }, idx) => (
							<div className="timeline-list" key={idx}>
								<div className="timeline-item">
									<p className="designation">{title}</p>
									<p className="place"> {Period}</p>
									{image && (
										<div className="image-container">
											<img src={image} alt={title} />
											{liveUrl && (
												<a
													href={liveUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="live-btn"
												>
													🔗 Live Demo
												</a>
											)}
										</div>
									)}
								</div>
								<div className="timeline-description">{description}</div>
							</div>
						))}
					</div>
				))}
			</div>
		</section>
	);
};



