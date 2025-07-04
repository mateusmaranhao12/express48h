//redirecionar pra whatsapp
function getWhatsApp() {
    window.open('https://wa.link/v86wxi')
}

//contador
function animateCounter(counterElement) {
    const target = +counterElement.getAttribute('data-target')
    let count = 0
    const speed = target <= 20 ? 800 : 80 // velocidade dinâmica

    const updateCounter = () => {
        if (count < target) {
            count += Math.ceil(target / speed)
            if (count > target) count = target
            counterElement.textContent = `+${count}`
            requestAnimationFrame(updateCounter)
        } else {
            counterElement.textContent = `+${target}`
        }
    }

    updateCounter()
}

// Detecta quando o elemento entra na tela
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target
            animateCounter(counter)
            observer.unobserve(counter) // evita contagem múltipla
        }
    })
}, {
    threshold: 0.6 // inicia quando 60% do elemento estiver visível
})

// Aplica o observer a todos os contadores
document.querySelectorAll('.counter').forEach(counter => {
    observer.observe(counter)
})

//exibir respostas das perguntas frequentes
function toggleFaq(element) {
    const answer = element.querySelector('.faq-answer')
    const icon = element.querySelector('i')

    const isVisible = answer.style.display === 'block'

    document.querySelectorAll('.faq-answer').forEach(el => el.style.display = 'none')
    document.querySelectorAll('.faq-item i').forEach(el => el.classList.replace('fa-chevron-up', 'fa-chevron-down'))

    if (!isVisible) {
        answer.style.display = 'block'
        icon.classList.replace('fa-chevron-down', 'fa-chevron-up')
    }
}