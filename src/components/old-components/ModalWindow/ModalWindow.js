import { categories, getLangsByCategory } from '../../constants/languages.ts'
import { getProjectsByLanguages } from '../../constants/projects.ts'
import React, { useState } from "react"
import { projects } from '../../constants/projects';
export default function ModalWindow({ selectedProject, setProject, maxProject }) {
	const { eventName, year, title, summary, description, img, languages, links, index } = selectedProject;
	console.log(maxProject)
	return (
		<article className='modal-window'
			onClick={(e) => {
				if (e.target.className == 'modal-window') setProject(null)
			}}>
			{
				(index > 0) &&
				<div className='prev-project' onClick={() => setProject(index - 1)}>
					<div className='left-arrow' />
				</div>
			}
			<div className='container'>


				<header className='project-title-container'>
					<h2 className='project-title'>{title}</h2>
				</header>
				<div className='project-contents'>
					<section className='project-tags'>
						{languages.map(lang => (
							<span key={`${lang}tag`} className='tag'>
								{lang}
							</span>
						))}
					</section>
					<section className='project-description'>
						<p>{description}</p>
					</section>
				</div>
				{links &&
				<section className='links'>
					{links.map(l => (<a href={l.link}>{l.description}</a>))}
				</section>	
				}
			</div>
			{

				(index < maxProject - 1) &&
				<div className='next-project' onClick={() => setProject(index + 1)} >
					<div className='right-arrow' />
				</div>
			}
		</article>
	)
}