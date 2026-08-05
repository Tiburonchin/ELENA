document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos
    const btnNo = document.getElementById('btn-no');
    const btnYes = document.getElementById('btn-yes');
    const tooltipNo = document.getElementById('tooltip-no');
    const hint = document.querySelector('.hint');
    
    const step1 = document.querySelector('.step-1');
    const step1_5 = document.querySelector('.step-1-5');
    const step2 = document.querySelector('.step-2');
    const step3 = document.querySelector('.step-3');
    const stepMovie = document.querySelector('.step-movie');
    const step4 = document.querySelector('.step-4');

    const btnNext1 = document.getElementById('btn-next-1');
    const btnNext2 = document.getElementById('btn-next-2');
    const btnNextMovie = document.getElementById('btn-next-movie');
    const btnNext3 = document.getElementById('btn-next-3');

    const foodItems = document.querySelectorAll('.food-item');
    const movieItems = document.querySelectorAll('.movie-item');
    const customMovieInput = document.getElementById('custom-movie');
    const dateInput = document.getElementById('date-input');
    const timeInput = document.getElementById('time-input');
    
    const stickers = document.querySelectorAll('.sticker');

    // Datos
    let selectedFoods = [];
    let selectedMovie = "";
    
    // Configurar fecha mínima
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;

    // Animación de inicio de la tarjeta
    gsap.from(".card", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.5)"
    });
    
    // Mostrar primeros stickers
    gsap.to([".sticker-1", ".sticker-5"], {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.2,
        ease: "back.out(2)"
    });

    // Paso 1: El botón "No" huye del cursor
    let hoverCount = 0;
    
    function moveBtnNo() {
        hoverCount++;
        
        if (hoverCount === 1) {
            // Mover los botones al body para evitar que el 'overflow: hidden' de la tarjeta los esconda
            const rectNo = btnNo.getBoundingClientRect();
            const rectYes = btnYes.getBoundingClientRect();
            
            // Extraer y fijar el NO
            document.body.appendChild(btnNo);
            btnNo.style.position = 'fixed';
            btnNo.style.left = rectNo.left + 'px';
            btnNo.style.top = rectNo.top + 'px';
            btnNo.style.zIndex = '9999';
            gsap.set(btnNo, { x: 0, y: 0, margin: 0 });
            
            // Extraer y fijar el SI
            document.body.appendChild(btnYes);
            btnYes.style.position = 'fixed';
            btnYes.style.left = rectYes.left + 'px';
            btnYes.style.top = rectYes.top + 'px';
            btnYes.style.width = rectYes.width + 'px';
            btnYes.style.zIndex = '10000';
            gsap.set(btnYes, { margin: 0 });
            
            // Extraer y fijar el tooltip
            const rectTooltip = tooltipNo.getBoundingClientRect();
            document.body.appendChild(tooltipNo);
            tooltipNo.style.position = 'fixed';
            tooltipNo.style.left = rectTooltip.left + 'px';
            tooltipNo.style.top = rectTooltip.top + 'px';
            tooltipNo.style.zIndex = '10005';
            
            gsap.to(tooltipNo, { opacity: 1, y: -10, duration: 0.3 });
        }
        
        // Límites de toda la ventana
        const maxX = window.innerWidth - btnNo.offsetWidth - 20;
        const maxY = window.innerHeight - btnNo.offsetHeight - 20;
        
        // Generar posiciones aleatorias en toda la pantalla
        const randomX = Math.max(20, Math.floor(Math.random() * maxX));
        const randomY = Math.max(20, Math.floor(Math.random() * maxY));

        gsap.to(btnNo, {
            left: randomX,
            top: randomY,
            duration: 0.3,
            ease: "power2.out"
        });

        // Hace crecer el botón Sí progresivamente
        gsap.to(btnYes, {
            scale: 1 + (hoverCount * 0.4),
            duration: 0.3,
            ease: "power2.out"
        });

        if (hoverCount === 3) {
            gsap.to(hint, { opacity: 1, duration: 0.3 });
        }
    }

    btnNo.addEventListener('mouseenter', moveBtnNo);
    btnNo.addEventListener('click', (e) => {
        e.preventDefault();
        moveBtnNo(); // Se mueve al intentar hacer clic
    });

    // Función global para avanzar entre pantallas
    function goToStep(currentStep, nextStep, newStickers = []) {
        gsap.to(currentStep, {
            opacity: 0,
            x: -50,
            duration: 0.4,
            onComplete: () => {
                currentStep.classList.remove('active');
                nextStep.classList.add('active');
                
                // Ocultar todos los stickers actuales
                gsap.to(stickers, { opacity: 0, scale: 0.8, duration: 0.3 });
                
                // Mostrar los nuevos stickers asignados a esta vista
                if (newStickers.length > 0) {
                    gsap.to(newStickers, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        delay: 0.2,
                        stagger: 0.1,
                        ease: "back.out(2)"
                    });
                }

                // Animar entrada del nuevo step
                gsap.fromTo(nextStep, 
                    { opacity: 0, x: 50 },
                    { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
                );
            }
        });
    }

    // Navegación
    btnYes.addEventListener('click', () => {
        // Ocultar botones extraídos si el usuario hizo hover al menos una vez
        if (btnYes.parentNode === document.body) gsap.to(btnYes, { opacity: 0, duration: 0.4, onComplete: () => btnYes.remove() });
        if (btnNo.parentNode === document.body) gsap.to(btnNo, { opacity: 0, duration: 0.4, onComplete: () => btnNo.remove() });
        
        // Al decir "Sí"
        goToStep(step1, step1_5, ['.sticker-2']);
    });

    btnNext1.addEventListener('click', () => {
        // Al ir al Paso 2
        alert('espero mi salchipapa, gracias jjajajaja');
        goToStep(step1_5, step2, ['.sticker-3']);
    });

    btnNext2.addEventListener('click', () => {
        // Validar que los campos no estén vacíos
        if (!dateInput.value || !timeInput.value) {
            gsap.to(btnNext2, { x: 10, duration: 0.1, yoyo: true, repeat: 3 });
            return;
        }

        goToStep(step2, stepMovie, ['.sticker-6', '.sticker-7']);
    });

    // Lógica para Selección de Película
    movieItems.forEach(item => {
        item.addEventListener('click', () => {
            movieItems.forEach(m => m.classList.remove('selected'));
            item.classList.add('selected');
            selectedMovie = item.getAttribute('data-movie');
            customMovieInput.value = ''; // Limpiar el campo de texto
            
            gsap.fromTo(item, 
                { scale: 0.9 },
                { scale: 1, duration: 0.3, ease: "back.out(3)" }
            );
        });
    });

    customMovieInput.addEventListener('input', () => {
        if (customMovieInput.value.trim() !== '') {
            movieItems.forEach(m => m.classList.remove('selected'));
            selectedMovie = customMovieInput.value;
        }
    });

    btnNextMovie.addEventListener('click', () => {
        if (!selectedMovie || selectedMovie.trim() === '') {
             gsap.to(btnNextMovie, { x: 10, duration: 0.1, yoyo: true, repeat: 3 });
             return;
        }

        // Si eligió rellenar la caja de texto, mostramos la alerta graciosa
        if (customMovieInput.value.trim() !== '' && selectedMovie === customMovieInput.value) {
            alert('escríbelo por wasa mejor jaja');
        }

        goToStep(stepMovie, step3, ['.sticker-8', '.sticker-4']);
    });

    // Selección de comida
    foodItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('selected');
            const food = item.getAttribute('data-food');
            const icon = item.textContent.split(' ')[0]; // Extrae el emoji
            
            if (item.classList.contains('selected')) {
                // Si elige la opción oculta
                if (food === "yo jajaja") {
                    alert("es broma, pero si quieres no es broma 🫣");
                }

                selectedFoods.push({name: food, icon: icon});
                // Animación de selección
                gsap.fromTo(item, 
                    { scale: 0.9 },
                    { scale: 1, duration: 0.3, ease: "back.out(3)" }
                );
            } else {
                selectedFoods = selectedFoods.filter(f => f.name !== food);
            }
        });
    });

    // Ir a la vista final
    btnNext3.addEventListener('click', () => {
        if (selectedFoods.length === 0) {
             gsap.to(btnNext3, { x: 10, duration: 0.1, yoyo: true, repeat: 3 });
             return;
        }

        // Formatear Fecha
        const dateObj = new Date(dateInput.value + 'T' + timeInput.value);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const dateString = dateObj.toLocaleDateString('es-ES', options);
        
        // Formatear Hora
        let hours = dateObj.getHours();
        let minutes = dateObj.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const timeString = hours + ':' + minutes + ' ' + ampm;

        // Actualizar UI del paso final
        document.getElementById('final-time').textContent = timeString;
        document.getElementById('text-time').textContent = timeString;
        document.getElementById('summary-date').textContent = dateString;

        let movieDisplay = selectedMovie.startsWith('Minions') || selectedMovie.startsWith('Spider') ? selectedMovie : `🍿 ${selectedMovie}`;
        document.getElementById('summary-movie').textContent = movieDisplay;

        const summaryFoodsContainer = document.getElementById('summary-foods');
        summaryFoodsContainer.innerHTML = '';
        selectedFoods.forEach(food => {
            const tag = document.createElement('div');
            tag.className = 'tag';
            tag.innerHTML = `${food.icon} ${food.name}`;
            summaryFoodsContainer.appendChild(tag);
        });

        // Mostrar pantalla final con otros stickers para no repetir al gato 3
        goToStep(step3, step4, ['.sticker-5', '.sticker-8']);
        
        // Efecto de Confeti
        createConfetti();
    });

    function createConfetti() {
        const colors = ['#d4af37', '#1a1a24', '#f1f8f6', '#ffffff'];
        for(let i=0; i<50; i++) {
            const confetto = document.createElement('div');
            confetto.style.position = 'absolute';
            confetto.style.width = '10px';
            confetto.style.height = '10px';
            confetto.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetto.style.top = '-10px';
            confetto.style.left = Math.random() * 100 + '%';
            confetto.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetto.style.zIndex = 100;
            document.querySelector('.app-container').appendChild(confetto);

            gsap.to(confetto, {
                y: 600,
                x: (Math.random() - 0.5) * 200,
                rotation: Math.random() * 360,
                duration: Math.random() * 2 + 1,
                ease: "power1.out",
                onComplete: () => confetto.remove()
            });
        }
    }
});
