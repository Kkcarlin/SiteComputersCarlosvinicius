document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const formNotification = document.getElementById('formNotification');

  if (!contactForm || !formNotification) {
    console.error('Formulário ou elemento de notificação não encontrados.');
    return;
  }

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    
    formNotification.style.display = 'none';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subscribe = document.getElementById('subscribe').checked;

    
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      formNotification.className = 'error'; 
      formNotification.textContent = 'Por favor, preencha todos os campos.';
      formNotification.style.display = 'block';
      return;
    }

    
    let outputMessage = `Obrigado, ${name}! Seu formulário foi enviado com sucesso.`;
    if (subscribe) {
      outputMessage += ' Você foi inscrito na nossa newsletter.';
    }

    formNotification.className = 'success'; 
    formNotification.textContent = outputMessage;
    formNotification.style.display = 'block';

    
  });

  contactForm.addEventListener('reset', function () {
    
    formNotification.style.display = 'none';
  });
});
