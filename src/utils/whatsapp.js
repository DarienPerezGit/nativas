// TU NÚMERO DE WHATSAPP (Formato internacional)
// 549 (Argentina móvil) + código de área sin 0 + número sin 15
export const PHONE_NUMBER = "5493482206280";

/**
 * Genera un link de WhatsApp con un mensaje pre-cargado
 * @param {string} message - El mensaje a enviar
 * @returns {string} URL de WhatsApp
 */
export const createWhatsAppLink = (message) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
};
