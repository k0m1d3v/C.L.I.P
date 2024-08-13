document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('command-input');
    const output = document.getElementById('output');
    const watermark = document.getElementById('watermark');
    const asciiArt = `
                                __
                        /\\    .-" /
                        /  ; .'  .' 
                    :   :/  .'   
                        \\  ;-.'     
        .--""""--..__/     \`.    
        .'           .'    \`o  \\   
        /                    \`   ;  
    :                  \      :  
    .-;        -.         \`.__.-'  
    :  ;          \     ,   ;       
    '._:           ;   :   (        
        \\/  .__    ;    \\   \`-.     
        ;     "-,/_..--"\`-..__)    
        '""--.._:
    `

    // Focus the input field when the page is clicked
    document.addEventListener('click', () => {
        input.focus();
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = input.value.trim();
            handleCommand(command);
            input.value = '';
        }
    });

    function handleCommand(command) {
        let response = '';

        switch (command.toLowerCase()) {
            case 'about':
                response = 'Hello! I\'m K0-M1, a passionate developer and IT student, In the future I would love to work in the cybersecurity field. I am currently learning web development and programming languages such as Python and Java. I am also interested in learning about artificial intelligence and machine learning.';
                break;
            case 'projects':
                response = 'To see my projects, visit my GitHub profile at: https://github.com/k0m1d3v';
                break;
            case 'contact':
                response = 'You can find my contact information on the footer of this page. Feel free to reach out to me!';
                break;
            case 'clear':
                output.innerHTML = '';
                return;
            case 'help':
                response = `Available commands:\n
                - about: \t Learn more about me
                - projects: \t View my projects
                - contact: \t Get in touch with me
                - clear: \t Clear the terminal screen
                - help: \t Display this help message
                - easter: \t Find the easter egg`;
            break;
            case 'easter':
                response = 'Down the rabbit hole 🐇';
                watermark.innerHTML = `<pre>${asciiArt}</pre>`;
                watermark.style.fontSize = '22px';
                watermark.style.position = 'absolute';
                watermark.style.bottom = '-350px';
                watermark.style.right = '-300px';
                break;
            default:
                response = `Command not recognized: ${command}`;
        }

        // Clear the output before displaying the new command and response
        output.innerHTML = '';

        const commandOutput = document.createElement('div');
        commandOutput.classList.add('fade-in');
        output.appendChild(commandOutput);

        // Simulate typing effect
        typeText(commandOutput, `> ${command}\n${response}`, true);
    }

    function typeText(element, text, isHTML = false, speed = 15) {
        let index = 0;
        function type() {
            if (index < text.length) {
                if (isHTML) {
                    element.innerHTML += text.charAt(index);
                } else {
                    element.textContent += text.charAt(index);
                }
                index++;
                setTimeout(type, speed);
            }
        }
        type();
    }
});