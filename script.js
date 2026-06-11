document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Controle do Menu Mobile (Básico)
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // Alterna a exibição do menu caso esteja no celular
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = '#1b4332';
                navLinks.style.padding = '20px';
            }
        });
    }

    // 2. Interceptação e Validação do Formulário de Contato
    const formContato = document.getElementById('form-contato');
    const feedbackForm = document.getElementById('feedback-form');

    if (formContato) {
        formContato.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede a página de recarregar

            // Captura os dados inseridos pelo usuário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;

            // Simulação de envio bem-sucedido
            if (nome && email) {
                feedbackForm.textContent = `Obrigado, ${nome}! Seus dados foram enviados. Logo entraremos em contato via ${email}.`;
                feedbackForm.classList.remove('hidden');
                
                // Limpa os campos do formulário
                formContato.reset();

                // Esconde a mensagem de sucesso após 5 segundos
                setTimeout(() => {
                    feedbackForm.classList.add('hidden');
                }, 5000);
            }
        });
    }
});