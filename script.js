
// Lien fictif à remplacer par le lien direct OneDrive
const montantUrl = "https://1drv.ms/u/c/f888cb11218954ae/Ef0DH8cXtHhLlZ2lk1NYMPsB8HAe1gtUA3vD_gWyE-0xjg";
const donateursUrl = "https://1drv.ms/u/c/f888cb11218954ae/EfDsvpYqjLRFn2aofX0nECkBpy1auHfGRfRwnKLdpK3_MQ";
const projetsUrl = "https://1drv.ms/u/c/f888cb11218954ae/EXF829e24zhLh2rlGm0ii7ABiZH24wyu9kHGQfuD_8WfTg";

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("montantTotal")) {
    fetch(montantUrl)
      .then(res => res.json())
      .then(data => {
        document.getElementById("montantTotal").textContent = data.total_recolte;
      });

    fetch(donateursUrl)
      .then(res => res.json())
      .then(data => {
        const list = document.getElementById("donateursList");
        data.forEach(d => {
          const li = document.createElement("li");
          li.textContent = `👤 ${d.nom} — 💵 ${d.montant} FCFA`;
          list.appendChild(li);
        });
      });
  }

  if (document.getElementById("projetsFini")) {
    fetch(projetsUrl)
      .then(res => res.json())
      .then(data => {
        data.forEach(projet => {
          const li = document.createElement("li");
          li.textContent = `${projet.titre} — ${projet.montant} FCFA`;
          if (projet.etat === "fini") document.getElementById("projetsFini").appendChild(li);
          if (projet.etat === "en cours") document.getElementById("projetsCours").appendChild(li);
          if (projet.etat === "à venir") document.getElementById("projetsAvenir").appendChild(li);
        });
      });
  }
});
