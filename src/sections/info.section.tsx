import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

import { FloatingButton } from '../components/floating-button';
import { GlowLink } from '../components/glow-box-link';
import { TextHover } from '../components/text-hover.component';

export const InfoSection = () => {
	return (
		<div className='hero-section'>
			<FloatingButton
				label='About Me'
				className='first'
				href='/#about-me'
			/>
			<p>Hi, I am</p>
			<TextHover
				text='Shubhanshu Tiwari'
				className='name'
			/>
			<p>Full Stack Developer</p>
			<FloatingButton
				label='Tech'
				className='sec'
				href='/#tech-stack'
			/>
			<FloatingButton
				label='Projects'
				className='third'
				href='/#projects'
			/>
			
			{/* <div className='top-bar'></div> */}
			{/* <div className='left-bar'></div> */}

			<div className='blur'></div>
			<div className='bottom-bar'>
				<GlowLink
					href='https://github.com/shubhanshut31'
					color='rgba(255, 255, 255, 0.4)'
					icon={<FaGithub color='rgba(255, 255, 255,0.9)' />}
					aria-label='github'
				/>
				<GlowLink
					href='https://www.linkedin.com/in/shubhanshut31/'
					color='rgb(0, 160, 220, 0.6)'
					icon={<FaLinkedinIn color='rgb(0, 160, 220)' />}
					aria-label='linkedin'
				/>
				<GlowLink
					href='mailto:shubhant31@gmail.com'
					icon={<IoMailOutline color='rgb(18, 122, 209)' />}
					color=' rgb(18, 122, 209,0.7)'
					aria-label='mail'
				/>
			</div>
		</div>
	);
};
