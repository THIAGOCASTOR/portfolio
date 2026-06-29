//=========================================================================
// EFEITO DE GLOW EM BAIXO DO MOUSE NOS CARDS DO PORTFOLIO
//=========================================================================

const cards = document.querySelectorAll('.gridportcard');

cards.forEach(card => {
    const glow = card.querySelector('.mouse-glow');

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();

        glow.style.left = `${e.clientX - rect.left}px`;
        glow.style.top = `${e.clientY - rect.top}px`;
    });

    card.addEventListener('mouseenter', () => {
        glow.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
    });
});

//=========================================================================
// REVELAR CONFORME SCROLL DO MOUSE
//=========================================================================

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show"); // remove se sair da tela
        }
    });
}, {
    threshold: 0.2
});

reveals.forEach(item => observer.observe(item));

//=========================================================================
// ABRIR MEU CURRICULO
//=========================================================================

function curriculoDownload() {
    window.open("../docs/Currículo Thiago Castor p- tech.pdf", "_blank");
}

//=========================================================================
// pop-up de erro ou sucesso
//=========================================================================

const container = document.getElementById("toast-container");

function toast(titulo, mensagem, tipo = "info") {

    const cores = {
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b"
    };

    const div = document.createElement("div");
    div.className = "toast";

    div.style.borderLeft = `10px solid ${cores[tipo]}`;

    div.innerHTML = `
        <h4>${titulo}</h4>
        <p>${mensagem}</p>
    `;

    container.appendChild(div);

    setTimeout(() => div.classList.add("show"), 10);

    setTimeout(() => {
        div.classList.remove("show");
        div.classList.add("hide");

        setTimeout(() => div.remove(), 400);
    }, 3000);
}

//=========================================================================
// VALIDAÇÃO DO FORMULÁRIO DE CONTATO
//=========================================================================

function confirmDados() {
    const valorEmail = document.querySelector(".email");
    const valorTitleEmail = document.querySelector(".CTitle");
    const valorMensage = document.querySelector(".mensage");

    const email = valorEmail.value.trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailValido.test(email)) {
        toast("ERRO!", "Digite um e-mail válido!", "error");
        return;
    }

    if (!valorTitleEmail.value.trim()) {
        toast("Erro!", "Preencha o campo nome!", "warning");
        return;
    }

    if (!valorMensage.value.trim()) {
        toast("Está quase lá...", "Escreva sua mensagem!", "warning");
        return;
    }

    toast("Sucesso ✓", "E-mail enviado com sucesso!", "success");

    valorEmail.value = "";
    valorTitleEmail.value = "";
    valorMensage.value = "";
}

//=========================================================================
// TEMA CLARO E TEMA ESCURO
//=========================================================================

const checkboxTema = document.getElementById("checkboxTema");
const body = document.querySelector(".body")
const navLi = document.querySelectorAll(".navLi")
const h1SobreMim = document.querySelector(".sobreMim")
const downButton = document.querySelector(".buttonSobreMim")
const buttonEnviarEmail = document.querySelector(".cssbuttons-io")
const textPort = document.querySelector(".textPort")
const card = document.querySelectorAll(".card")
const cardH1 = document.querySelectorAll(".cardH1")
const idiomas = document.querySelector(".idiomas")
const textFormacao = document.querySelector(".textFormacao")

checkboxTema.addEventListener("change", () => {
    body.classList.toggle("bodyTemaClaroAtivo");
    navLi.forEach(item => {
        item.classList.toggle("navLiAHoverTemaClaro");
    });
    h1SobreMim.classList.toggle("sobreMimTemaClaro");
    downButton.classList.toggle("buttonSobreMimTemaClaro")
    buttonEnviarEmail.classList.toggle("cssbuttons-ioTemaClaro")
    textPort.classList.toggle("textPortTemaClaro")
    card.forEach(item => {
        item.classList.toggle("cardTemaClaro")
    });
    cardH1.forEach(item => {
        item.classList.toggle("cardH1TemaClaro")
    })
    idiomas.classList.toggle("idiomasTemaClaro")
    textFormacao.classList.toggle("textFormacaoTemaClaro")
});
