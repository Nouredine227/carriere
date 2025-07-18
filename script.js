
// Lien fictif à remplacer par le lien direct OneDrive
const montantUrl = "https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL3UvYy9mODg4Y2IxMTIxODk1NGFlL0VmMERIOGNYdEhoTGxaMmxrMU5ZTVBzQjhIQWUxZ3RVQTN2RF9nV3lFLTB4amc&cid=F888CB11218954AE&id=F888CB11218954AE%21sc71f03fdb4174b78959da593535830fb&parId=F888CB11218954AE%21s4e8a541b36b94a41b3d8fdbcdc07b3da&o=OneUp";
const donateursUrl = "donateurs.json";
const projetsUrl = "projets.json";

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
