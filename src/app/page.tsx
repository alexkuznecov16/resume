import '@/styles/home.css';
import Link from 'next/link';

export default function HomePage() {
	return (
		<main className='home'>
			{/* Background Effects */}
			<div className='background-glow glow-1'></div>
			<div className='background-glow glow-2'></div>

			{/* Header */}
			<header className='header'>
				<div className='logo'>Aleksandrs.</div>

				<nav className='nav'>
					<a href='#about'>About</a>
					<a href='#skills'>Skills</a>
					<a href='#projects'>Projects</a>
					<a href='#experience'>Experience</a>
					<a href='#contact'>Contact</a>
				</nav>

				<div className='resume'>
					<a className='resume-btn' href='/kuznecovs_cv.pdf' target='_blank' rel='noopener noreferrer'>
						View CV
					</a>

					<a className='resume-btn secondary' href='/kuznecovs_cv.pdf' download>
						Download CV
					</a>
				</div>
			</header>

			{/* Hero */}
			<section className='hero'>
				<div className='status-badge'>
					<div className='status-dot'></div>
					Open for opportunities
				</div>

				<p className='hero-subtitle'>Frontend Developer / Software Engineer</p>

				<h1 className='hero-title'>
					Building modern
					<br />
					web experiences
					<br />
					with React & Next.js.
				</h1>

				<p className='hero-description'>19-year-old frontend developer from Latvia focused on building responsive, scalable and visually polished web applications using modern technologies.</p>

				<div className='hero-tech'>
					<span>React</span>
					<span>Next.js</span>
					<span>TypeScript</span>
					<span>Java</span>
				</div>

				<div className='hero-buttons'>
					<a href='#projects' className='primary-btn'>
						View Projects
					</a>

					<a href='#contact' className='secondary-btn'>
						Contact Me
					</a>
				</div>

				<div className='hero-socials'>
					<Link href='https://t.me/kznws111' target='_blank'>
						Telegram
					</Link>

					<Link href='https://github.com/alexkuznecov16' target='_blank'>
						GitHub
					</Link>

					<Link href='https://www.linkedin.com/in/alexander-kuznecov/' target='_blank'>
						LinkedIn
					</Link>

					<a href='mailto:alexander.kuznecov16@gmail.com'>Email</a>
				</div>
			</section>

			{/* About */}
			<section className='section' id='about'>
				<div className='section-header'>
					<p className='section-label'>About</p>
					<h2>Who I Am</h2>
				</div>

				<div className='about-grid'>
					<div className='about-card'>
						<p>I’m Alexander Kuznecov — a frontend developer and computer systems student from Latvia. Passionate about building modern interfaces, solving problems, and creating fast and responsive web applications.</p>

						<p>I enjoy combining clean UI/UX design with scalable frontend architecture using React, Next.js and TypeScript.</p>
					</div>

					<div className='stats-grid'>
						<div className='stat-card'>
							<h3>6+</h3>
							<p>Projects</p>
						</div>

						<div className='stat-card'>
							<h3>B2</h3>
							<p>English</p>
						</div>

						<div className='stat-card'>
							<h3>React</h3>
							<p>Main Stack</p>
						</div>

						<div className='stat-card'>
							<h3>2023</h3>
							<p>Started Career</p>
						</div>
					</div>
				</div>
			</section>

			{/* Skills */}
			<section className='section' id='skills'>
				<div className='section-header'>
					<p className='section-label'>Skills</p>
					<h2>Technologies & Tools</h2>
				</div>

				<div className='skills-wrapper'>
					<div className='skill-category'>
						<h3>Frontend</h3>

						<div className='skills-grid'>
							<div className='skill-card'>React.js</div>
							<div className='skill-card'>Next.js</div>
							<div className='skill-card'>TypeScript</div>
							<div className='skill-card'>JavaScript</div>
							<div className='skill-card'>SCSS</div>
							<div className='skill-card'>Redux</div>
						</div>
					</div>

					<div className='skill-category'>
						<h3>Backend & Tools</h3>

						<div className='skills-grid'>
							<div className='skill-card'>Java</div>
							<div className='skill-card'>Node.js</div>
							<div className='skill-card'>Express.js</div>
							<div className='skill-card'>Supabase</div>
							<div className='skill-card'>PostgreSQL</div>
							<div className='skill-card'>Jest</div>
							<div className='skill-card'>Cypress</div>
						</div>
					</div>
				</div>
			</section>

			{/* Projects */}
			<section className='section' id='projects'>
				<div className='section-header'>
					<p className='section-label'>Projects</p>
					<h2>Selected Work</h2>
				</div>

				<div className='projects-grid'>
					{/* NEW PROJECT */}
					<div className='project-card'>
						<div className='project-content'>
							<h3>HR Management System</h3>

							<p>Web-based HR system for managing employees and departments. Built with Java Spring Boot backend and Next.js frontend. Implements REST API architecture with in-memory data storage, CRUD operations, and role-based data management logic.</p>

							<div className='project-tags'>
								<span>Java</span>
								<span>Spring Boot</span>
								<span>Next.js</span>
								<span>REST API</span>
							</div>

							<div className='project-links'>
								<Link href='https://github.com/alexkuznecov16/HR-Management-System' target='_blank'>
									GitHub
								</Link>
							</div>
						</div>
					</div>

					<div className='project-card'>
						<div className='project-content'>
							<h3>GetDone</h3>

							<p>Modern task management app with authentication, task CRUD operations, responsive design and Supabase integration.</p>

							<div className='project-tags'>
								<span>React</span>
								<span>Supabase</span>
								<span>Postgres</span>
							</div>

							<div className='project-links'>
								<Link href='https://www.getdone.online' target='_blank'>
									Live Demo
								</Link>
							</div>
						</div>
					</div>

					<div className='project-card'>
						<div className='project-content'>
							<h3>FC Spartak Jurmala</h3>

							<p>Football club website clone with dynamic data, player profiles and scalable content management system.</p>

							<div className='project-tags'>
								<span>Next.js</span>
								<span>JSON</span>
								<span>Responsive UI</span>
							</div>

							<div className='project-links'>
								<Link href='https://football-club-six.vercel.app/' target='_blank'>
									Live Demo
								</Link>
							</div>
						</div>
					</div>

					<div className='project-card'>
						<div className='project-content'>
							<h3>Flight Ticket Filtering</h3>

							<p>Flight search and filtering interface with advanced sorting logic, optimized performance and adaptive UI structure.</p>

							<div className='project-tags'>
								<span>React</span>
								<span>Filtering</span>
								<span>UX Optimization</span>
							</div>

							<div className='project-links'>
								<Link href='https://aviasales-jet.vercel.app/' target='_blank'>
									Live Demo
								</Link>
							</div>
						</div>
					</div>

					<div className='project-card'>
						<div className='project-content'>
							<h3>Room Booking Platform</h3>

							<p>Room search and booking interface with dynamic filters, caching mechanisms and improved loading performance.</p>

							<div className='project-tags'>
								<span>Next.js</span>
								<span>API</span>
								<span>Performance</span>
							</div>

							<div className='project-links'>
								<Link href='https://hotel-desktop.vercel.app/' target='_blank'>
									Live Demo
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Experience */}
			<section className='section' id='experience'>
				<div className='section-header'>
					<p className='section-label'>Experience</p>
					<h2>Work & Activities</h2>
				</div>

				<div className='experience-grid'>
					<div className='experience-card'>
						<h3>Porto Marine (Jurmala)</h3>

						<span>Assistant Worker / Restaurant Staff • Summer 2025</span>

						<p>Worked in a fast-paced hospitality environment performing multiple roles including kitchen assistance, waiter duties, bar support, cleaning, and warehouse logistics.</p>

						<p>Handled physical tasks such as transporting goods (up to 10 kg), maintaining workplace cleanliness, and supporting daily restaurant operations. Developed strong teamwork skills and improved English communication through interaction with international customers.</p>
					</div>

					<div className='experience-card'>
						<h3>Spartaks Jurmala & Latvian Youth National Football Team</h3>

						<span>Volunteer Match Assistant (Ball Boy Coordinator) • 2016 — 2022</span>

						<p>Worked in a structured sports environment during official football matches, supporting match operations and coordination of ball boys. Responsible for organizing volunteers, assigning roles, and ensuring smooth communication between staff and management during games.</p>

						<p>Regularly communicated with players, coaches, and foreign guests in English during events. Assisted in maintaining match flow under time pressure and strict organization rules. Additionally contributed to fan engagement activities and managed coordination tasks for junior volunteers.</p>
					</div>

					<div className='experience-card'>
						<h3>Liveball (Online Platform)</h3>

						<span>Telegram Community Administrator • 2022 — 2024</span>

						<p>Managed and moderated active Telegram communities with thousands of users. Responsible for enforcing rules, handling user behavior, and maintaining a safe and organized discussion environment.</p>

						<p>Performed conflict resolution, assisted users with platform-related questions, and contributed to overall community development. Gained strong experience in online communication, moderation systems, and decision-making under fast-paced conditions.</p>
					</div>
				</div>
			</section>

			{/* Languages */}
			<section className='section'>
				<div className='section-header'>
					<p className='section-label'>Languages</p>
					<h2>Communication</h2>
				</div>

				<div className='languages-grid'>
					<div className='language-card'>
						<h3>🇬🇧 English</h3>
						<p>B2</p>
					</div>

					<div className='language-card'>
						<h3>🇱🇻 Latvian</h3>
						<p>B1</p>
					</div>

					<div className='language-card'>
						<h3>🇷🇺 Russian</h3>
						<p>Native</p>
					</div>

					<div className='language-card'>
						<h3>🇩🇪 German</h3>
						<p>A2</p>
					</div>
				</div>
			</section>

			{/* Lifestyle */}
			<section className='section'>
				<div className='section-header'>
					<p className='section-label'>Lifestyle</p>
					<h2>Discipline & Consistency</h2>
				</div>

				<div className='about-grid'>
					<div className='about-card'>
						<p>Alongside development, I actively focus on physical training and maintaining a disciplined daily routine. I train regularly and use sport as a way to improve focus, endurance, and mental resilience.</p>

						<p>I also create and share content related to my progress and lifestyle on social platforms, which helps me stay consistent, build discipline, and develop communication and media skills.</p>
					</div>

					<div className='stats-grid'>
						<div className='stat-card'>
							<h3>Daily</h3>
							<p>Training</p>
						</div>

						<div className='stat-card'>
							<h3>Content</h3>
							<p>Creator</p>
						</div>

						<div className='stat-card'>
							<h3>Discipline</h3>
							<p>Routine</p>
						</div>

						<div className='stat-card'>
							<h3>Focus</h3>
							<p>Mindset</p>
						</div>
					</div>
				</div>

				<div className='hero-socials' style={{marginTop: '20px'}}>
					<Link href='https://www.tiktok.com/@kznws_' target='_blank'>
						TikTok
					</Link>

					<Link href='https://www.youtube.com/@sanyaperfecto' target='_blank'>
						YouTube
					</Link>
				</div>
			</section>

			{/* Contact */}
			<section className='section' id='contact'>
				<div className='contact-card'>
					<h2>Let’s Build Something Together</h2>

					<p>Open for collaboration, internships and frontend opportunities.</p>

					<div className='contact-links'>
						<a href='mailto:alexander.kuznecov16@gmail.com'>Email</a>

						<Link href='https://github.com/alexkuznecov16' target='_blank'>
							GitHub
						</Link>

						<Link href='https://t.me/kznws111' target='_blank'>
							Telegram
						</Link>

						<Link href='https://www.linkedin.com/in/alexander-kuznecov/' target='_blank'>
							LinkedIn
						</Link>
					</div>
				</div>
			</section>

			<footer className='footer'>
				<p>© 2026 Alexander Kuznecov</p>
			</footer>
		</main>
	);
}
