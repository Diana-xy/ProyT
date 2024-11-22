function mostrarDescripcion(tipo) {
    const descripcion = document.getElementById('descripcion');
    let texto = '';

    switch (tipo) {
        case 'binario':
            texto = 'Descripción: <br><br>El cifrado binario convierte cada carácter del texto '
            +'en su representación binaria, es decir, en una secuencia de 1 y 0 basada '
            +'en el código ASCII. Este método es más una representación que un cifrado, '
            +'pero puede usarse como una forma básica de ofuscación.'
            +'<br><br>Ejemplo:<br><br>&nbsp;&nbsp;Texto: A &nbsp;&nbsp;→&nbsp;&nbsp; Binario: 01000001';
            break;
        case 'invertido':
            texto = 'Descripción: <br><br>El cifrado invertido es uno de los métodos más simples '
            +'de ofuscación de texto. Consiste en invertir el orden de los caracteres de una palabra, '
            +'frase o texto completo para crear el "cifrado". Aunque no es un cifrado seguro, '
            +'puede usarse como un ejemplo básico de manipulación de texto en proyectos. '
            +'<br><br>Ejemplo:<br><br>&nbsp;&nbsp Texto: Hola Mundo <br><br>&nbsp;&nbsp; Cifrado: odnuM aloH';
            break;
        case 'cesar':
            texto = 'Descripción: <br><br>Este es uno de los cifrados más antiguos, en el cual cada '
            +'letra del texto se desplaza un número fijo de posiciones en el alfabeto. '
            +'Por ejemplo, con un desplazamiento de 3, A se convierte en D. <br><br>Ejemplo:'
            +'<br><br>&nbsp;&nbsp;Texto: ABC <br><br>&nbsp;&nbsp;Cifrado (desplazamiento 3): DEF';
            break;
        case 'xor':
            texto = 'Descripción: <br><br>Este cifrado usa la operación lógica XOR para ofuscar datos. '
            +'Combina cada carácter del texto con una clave binaria mediante XOR. Es simple pero '
            +'efectivo si la clave es aleatoria y del mismo tamaño que el texto. '
            +'<br><br>Ejemplo:<br><br>&nbsp;&nbsp;Texto: A <br><br>&nbsp;&nbsp;Binario: 01000001 <br><br>&nbsp;&nbsp;Clave: 00101101 <br><br>&nbsp;&nbsp;Cifrado: 01101100';
            break;
        case 'base64':
            texto = 'Descripción: <br><br>Base64 no es realmente un cifrado, sino un método de '
            +'codificación que convierte datos en una representación en texto. Es ampliamente '
            +'utilizado para transmitir datos binarios como cadenas ASCII, por ejemplo, '
            +'en correos electrónicos o imágenes en formato textual. '
            +'<br><br>Ejemplo:<br><br>&nbsp;&nbsp;Texto: Hola <br><br>&nbsp;&nbsp;Base64: SG9sYQ==';
            break;
        case 'vigenere':
            texto = 'Descripción: <br><br>Usa varias sustituciones alfabéticas basadas en una clave. '
            +'Cada letra del texto se desplaza según la posición correspondiente de la clave '
            +'repetida. <br><br>Ejemplo:<br><br>&nbsp;&nbsp;Texto: HOLA <br><br>&nbsp;&nbsp; Clave: CLAVE <br><br>&nbsp;&nbsp;Cifrado: JQZC';
            break;
        case 'sha-256':
            texto = 'Descripción: <br><br>SHA-256 es una función de hash criptográfico diseñada '
            +'para convertir datos en un resumen único de longitud fija (256 bits). '
            +'Es unidireccional, lo que significa que no puede descifrarse para obtener '
            +'los datos originales. Es ampliamente utilizado en seguridad informática, '
            +'como en blockchain y firmas digitales. '
            +'<br><br>Ejemplo:<br><br>&nbsp;&nbsp;Texto: Hola <br><br>&nbsp;&nbsp;SHA-256: 872e4bdc3f03d74f0b530a59dc41<br>f9c6f0c1c20e6d6ab3c82abef3969<br>c6d2b04';
            break;
        case 'aes':
            texto = 'Descripción: <br><br>AES es un estándar de cifrado simétrico que se usa para '
            +'proteger datos. Es muy seguro y se basa en una clave que debe mantenerse secreta. '
            +'AES puede trabajar con longitudes de clave de 128, 192, o 256 bits y se utiliza en '
            +'aplicaciones como el cifrado de discos y comunicaciones seguras. '
            +'<br><br>Ejemplo:<br><br>&nbsp;&nbsp;Texto: Hola Mundo <br><br>&nbsp;&nbsp;Clave: clave-secreta <br><br>&nbsp;&nbsp;AES (128 bits): 9f741fdb5d8845bdb48a94394e84<br>f8a3';
            break;
        case 'morse':
            texto = 'Descripción: <br><br>Morse es un sistema de codificación que traduce letras, '
            +'números y algunos caracteres especiales en combinaciones de puntos (.) y rayas (-). '
            +'Fue diseñado para ser transmitido a través de señales acústicas, visuales o eléctricas. '
            +'Aunque no es un cifrado en términos modernos, se puede usar como una forma básica de ofuscación. '
            +'<br><br>Ejemplo:<br><br>&nbsp;&nbsp;Texto: SOS <br><br>&nbsp;&nbsp;Morse: ... --- ...';
            break;
        default:
            texto = 'Selecciona un tipo de cifrado para ver su descripción.';
    }

    descripcion.innerHTML = texto;
    descripcion.style.display = 'block';
}

const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----', ' ': '/'
};

const reverseMorseCode = Object.fromEntries(
    Object.entries(morseCode).map(([char, code]) => [code, char])
);