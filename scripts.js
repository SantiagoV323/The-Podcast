document.addEventListener("DOMContentLoaded", function() {
    const btnMostrarConsejos = document.createElement("button");
    btnMostrarConsejos.innerText = "Mostrar Consejos Adicionales";
    btnMostrarConsejos.style.display = "block";
    btnMostrarConsejos.style.margin = "20px 0";

    const listaConsejos = document.createElement("ul");
    listaConsejos.style.display = "none"; // Estará oculta inicialmente

    const consejos = [
        "Aprovecha las redes sociales para promocionar tu podcast.",
        "Colabora con otros podcasters para aumentar tu audiencia.",
        "Realiza encuestas para entender mejor a tu audiencia y adaptar tu contenido.",
        "Mantén una frecuencia constante en la publicación de episodios.",
        "Siempre busca feedback y mejora constantemente."
    ];

    consejos.forEach(consejo => {
        const listItem = document.createElement("li");
        listItem.innerText = consejo;
        listaConsejos.appendChild(listItem);
    });

    document.querySelector("main").appendChild(btnMostrarConsejos);
    document.querySelector("main").appendChild(listaConsejos);

    btnMostrarConsejos.addEventListener("click", function() {
        if (listaConsejos.style.display === "none") {
            listaConsejos.style.display = "block";
            btnMostrarConsejos.innerText = "Ocultar Consejos Adicionales";
        } else {
            listaConsejos.style.display = "none";
            btnMostrarConsejos.innerText = "Mostrar Consejos Adicionales";
        }
    });
});
