/*
	IISSI
	photo_detail.js.  Controlador de photo_detail.html
	Mayo/2026
*/


"use strict ";
import { photoRenderer } from "/js/renderers/photos.js";
import { photosAPI_auto } from "/js/api/_photos.js ";
import { messageRenderer } from "/js/renderers/messages.js ";
import { sessionManager } from "/js/utils/session.js";

// Captura el parámetro photoId de la URL que figura en el link de cada foto
const urlParams = new URLSearchParams(window.location.search); // Objeto query de la ventana
const photoId = urlParams.get('photoId'); // Extrae el parámetro

async function main () {
	if ( photoId === null ) {// Check that we have an ID before doing anything else
		messageRenderer.showErrorAsAlert ("Please , provide a photoId ");
		return;
	}
	await loadPhotoDetails (); // Carga la foto en el formulario
}
async function loadPhotoDetails () {
	try {
		let photoDetails = document.querySelector("#photo-details");
		let photo = await photosAPI_auto.getById ( photoId ); // Llamada Ajax asíncrona. Se espera, haciéndola síncrona
		// let photo = await photoswithusersAPI_auto.getByPhotoId ( photoId );
		photoDetails.appendChild (photoRenderer.asDetails ( photo )); // Añade la renderización asDetail
	} catch ( err) {
		messageRenderer.showErrorAsAlert (" Error loading photo "+ err.response.data.message );
	}
}

document.addEventListener ("DOMContentLoaded", main ); // Manejador de eventos. Cuando se carga totalmente