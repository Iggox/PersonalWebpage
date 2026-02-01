function toggleMenu(){
	/* uso de un sistema propio de js donde apuntamos a un elemento en nuestra página para usarlo */
	/* tomamos los elementos que vayamos a usar */
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".menu-icono");
	 /* cuando hagamos click en los elementos se añadirá o eliminará la clase open en el elemento. la clase open da estilo */
	menu.classList.toggle("open");
	icon.classList.toggle("open");
}