const form = document.getElementById("formLead");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const contato = document.getElementById("contato").value;
    const email = document.getElementById("email").value;

    try {
        const res = await fetch("/leads", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, contato, email })
        });

        const data = await res.text();
        msg.textContent = data;

        document.getElementById("fase1").style.display = "none";
        document.getElementById("fase3").style.display = "block";
    } catch (err) {
        msg.textContent = "Erro ao enviar lead. Tente novamente.";
        console.error(err);
    }
});
