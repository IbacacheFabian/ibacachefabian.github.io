/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: 'https://raw.githubusercontent.com/IbacacheFabian/ibacachefabian.github.io/8ef16b08fa7cc2f34bc243733549df1926c54fae/public/img/Captura%20de%20Pantalla%202025-08-02%20a%20la(s)%2004.27.21.png',
		title: 'Green Win',
		skills: ['CSS', 'Bootstrap'],
		descripcion:
			'Aplicación que promueve el reciclaje y los hábitos sostenibles mediante un sistema de incentivos.',
		demoURL: 'https://greenwinlab.my.canva.site/',
		repoURL: '',
		anim: 'fade-right',
		averageBrightness: 0.1,
	},
	{
		imgSrc: 'https://raw.githubusercontent.com/IbacacheFabian/ibacachefabian.github.io/refs/heads/main/public/img/Captura%20de%20Pantalla%202025-08-02%20a%20la(s)%2005.23.26.png',
		title: 'Viaje Smart',
		skills: ['JavaScript', 'Bootstrap'],
		descripcion:
			' Aplicación móvil diseñada con metodologías ágiles, que comprende la respuesta a usuarios que requieren resolver la necesidad de trasladarse por lugares más expeditos y así mejorar su calidad de vida.',
		demoURL: 'https://www.canva.com/design/DAGqZdpxZC4/SkHTspXLEI13poFreTz39w/edit?utm_content=DAGqZdpxZC4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: 'https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/35d8ca6ac2bdfd0e466436c14d3c3f101cf0c11f',
		title: 'Trekking APP',
		skills: ['React', 'CSS'],
		descripcion:
			'Desarrollo en fase de Design Thinking, pendiente MVP.',
		demoURL: 'https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/35d8ca6ac2bdfd0e466436c14d3c3f101cf0c11f',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://raw.githubusercontent.com/IbacacheFabian/ibacachefabian.github.io/refs/heads/main/public/img/Captura%20de%20Pantalla%202025-08-02%20a%20la(s)%2005.50.30.png',
		title: 'Photography',
		skills: ['React', 'CSS'],
		descripcion:
			'Galería de imagenes en sesiones en vivo de fotografía deportiva',
		demoURL: 'https://www.flickr.com/photos/mastercaiser/',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://raw.githubusercontent.com/IbacacheFabian/ibacachefabian.github.io/refs/heads/main/public/img/Captura%20de%20Pantalla%202025-08-02%20a%20la(s)%2005.49.46.png',
		title: '3D design',
		skills: ['React', 'CSS'],
		descripcion:
			'Visita mi perfil como diseñador de piezas 3D para imprimir.',
		demoURL: 'https://cults3d.com/@fmunozibacache',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://raw.githubusercontent.com/IbacacheFabian/ibacachefabian.github.io/refs/heads/main/public/img/Captura%20de%20Pantalla%202025-08-02%20a%20la(s)%2005.35.14.png',
		title: 'Implementación Jira',
		skills: ['Sass', 'Astro'],
		descripcion:
			'Video Tutorial realizado en Bootcamp Product Owner como implementar Jira al sistema de trabajo.',
		demoURL: 'https://www.linkedin.com/posts/fabian-ibacache_jira-activity-7344191180810715136-nz97?utm_source=share&utm_medium=member_desktop&rcm=ACoAABaSx-MBHuJdWA5eNZyt-PcSDJD3IqQ1Jl0',
		repoURL: '',
		anim: 'fade-right',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
