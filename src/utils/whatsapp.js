// TU NÚMERO DE WHATSAPP (Reemplázalo con el tuyo real en formato internacional)
// Ejemplo: 5493482123456 (54 Argentina, 9 móvil, código de área sin 0, número sin 15)
export const PHONE_NUMBER = "5491112345678";

/**
 * Genera un link de WhatsApp con un mensaje pre-cargado
 * @param {string} message - El mensaje a enviar
 * @returns {string} URL de WhatsApp
 */
export const createWhatsAppLink = (message) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
};
