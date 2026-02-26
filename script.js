document.addEventListener('DOMContentLoaded', () => {
    const restaurantData = {
        headline: "BellaVista: Sapori di Positano sul Mar Mediterraneo",
        subtitle: "Cucina gourmet con vista mozzafiato",
        backgroundImage: "url('https://example.com/immagine-panoramica.jpg')",
        description: "Situato a Positano, BellaVista Ristorante offre un'esperienza culinaria indimenticabile...",
        location: "Via Pasitea 242, Positano",
        gpsCoordinates: "40.6415° N, 14.4883° E",
        menuTitle: "Scopri il nostro Menù Degustazione",
        menuOffer: [
            {
                name: "Viaggio nel Mediterraneo",
                price: "€65",
                courses: [
                    "Antipasto: Tartare di tonno del Tirreno",
                    "Primo: Scialatielli ai frutti di mare",
                    "Secondo: Branzino al forno con verdure locali",
                    "Dessert: Delizia al limone di Sorrento"
                ]
            }
        ],
        gallery: [
            "https://example.com/immagine1.jpg",
            "https://example.com/immagine2.jpg",
            "https://example.com/immagine3.jpg"
        ],
        reservationCTA: "Prenota il tuo tavolo",
        reservationLink: "https://example.com/prenotazioni",
        contactTitle: "Contattaci",
        phone: "+39 123 456 7890",
        email: "info@bellavistaristorante.com",
        mapsLink: "https://www.google.com/maps/place/Via+Pasitea+242,+Positano",
        footerText: "Seguici sui nostri canali social"
    };

    function populateTemplate(data) {
        document.getElementById('headline').textContent = data.headline;
        document.getElementById('subtitle').textContent = data.subtitle;
        document.querySelector('.landing-header').style.backgroundImage = data.backgroundImage;
        
        document.getElementById('description').textContent = data.description;
        document.getElementById('location').textContent = data.location;
        document.getElementById('gps-coordinates').textContent = data.gpsCoordinates;
        
        document.getElementById('menu-title').textContent = data.menuTitle;
        const menuOfferContainer = document.getElementById('menu-offer');
        data.menuOffer.forEach(offer => {
            const offerElement = document.createElement('div');
            offerElement.innerHTML = `
                <h4>${offer.name} - ${offer.price}</h4>
                <ul>${offer.courses.map(course => `<li>${course}</li>`).join('')}</ul>
            `;
            menuOfferContainer.appendChild(offerElement);
        });

        const galleryContainer = document.querySelector('.gallery-container');
        data.gallery.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = "Galleria ristorante";
            galleryContainer.appendChild(img);
        });

        const reservationLink = document.getElementById('reservation-link');
        reservationLink.textContent = data.reservationCTA;
        reservationLink.href = data.reservationLink;

        document.getElementById('contact-title').textContent = data.contactTitle;
        document.getElementById('phone').textContent = data.phone;
        document.getElementById('email').textContent = data.email;
        document.getElementById('maps-link').href = data.mapsLink;

        document.getElementById('footer-text').textContent = data.footerText;
    }

    populateTemplate(restaurantData);
});