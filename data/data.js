const data = [
  {
    pregunta: "El metabolismo se realiza con la finalidad de:",
    opciones: [
      "Obtener energía",
      "Sintetizar materia orgánica",
      "Perder energía",
    ],
    respuesta: "Obtener energía",
    dificultad: 1,
  },
  {
    pregunta:
      "Son proteínas  especiales que existen  en las células y son llamados catalizadores biológicos",
    opciones: ["Moléculas de ATP", "Enzimas", "Glucosa"],
    respuesta: "Enzimas",
    dificultad: 1,
  },
  {
    pregunta: "En el catabolismo se produce:",
    opciones: [
      "Síntesis de moléculas sencillas",
      "Descomposición de sustancias orgánicas complejas en moléculas simples",
      "Se consume energía",
    ],
    respuesta:
      "Descomposición de sustancias orgánicas complejas en moléculas simples",
    dificultad: 1,
  },
  {
    pregunta:
      "Las proteasas  son enzimas que actúan sobre los aminoácidos, mientras que la amilasas actúan sobre...",
    opciones: ["Grasas", "Almidones", "Aceites"],
    respuesta: "Almidones",
    dificultad: 1,
  },
  {
    pregunta:
      "Los cromosomas se ubican en el plano ecuatorial de la célula en la...",
    opciones: ["Profase", "Metafase", "Anafase"],
    respuesta: "Metafase",
    dificultad: 1,
  },
  {
    pregunta: "En la fase oscura de la fotosíntesis se forma la:",
    opciones: ["Glucosa", "CO2", "Oxígeno"],
    respuesta: "Glucosa",
    dificultad: 1,
  },
  {
    pregunta:
      "Vitamina indispensable para el normal funcionamiento del sistema nervioso y músculos.",
    opciones: ["A", "B", "E"],
    respuesta: "B",
    dificultad: 1,
  },
  {
    pregunta:
      "Es la parte del sistema digestivo  donde se absorben los nutrientes de los alimentos.",
    opciones: ["Boca", "Intestino delgado", "Estómago"],
    respuesta: "Intestino delgado",
    dificultad: 1,
  },
  {
    pregunta: "Pez es a branquias como insecto es a...",
    opciones: ["Tráqueas", "Piel", "Nefridios"],
    respuesta: "Tráqueas",
    dificultad: 1,
  },
  {
    pregunta:
      "Son células sanguíneas   que contienen hemoglobina, transportan el oxígeno y recogen el CO2 de las  células.",
    opciones: ["Leucocitos", "Eritrocitos", "Plaquetas"],
    respuesta: "Eritrocitos",
    dificultad: 1,
  },
  {
    pregunta: "-Los bioelementos  primarios escritos simbólicamente  son:",
    opciones: ["CHON", "CHONPS", "CHO"],
    respuesta: "CHONPS",
    dificultad: 2,
  },
  {
    pregunta: "Oligoelemento que forma parte de la hemoglobina en la sangre.",
    opciones: ["Zinc", "Cobre", "Hierro"],
    respuesta: "Hierro",
    dificultad: 2,
  },
  {
    pregunta: "Uno de los siguientes carbohidratos es un polisacárido.",
    opciones: ["Glucosa", "Sacarosa", "Almidón"],
    respuesta: "Almidón",
    dificultad: 2,
  },
  {
    pregunta: "Los aminoácidos se unen mediante enlaces.",
    opciones: ["Iónicos", "Peptídicos", "Covalentes"],
    respuesta: "Peptídicos",
    dificultad: 2,
  },
  {
    pregunta:
      "Es la  Proteína presente en los pelos, uñas y cuernos de los animales.",
    opciones: ["Queratina", "Elastina", "Colágeno"],
    respuesta: "Queratina",
    dificultad: 2,
  },
  {
    pregunta: "La meningitis es una enfermedad grave que afecta al sistema.",
    opciones: ["Reproductor", "Nervioso", "Endocrino"],
    respuesta: "Nervioso",
    dificultad: 2,
  },
  {
    pregunta: "La diabetes es una enfermedad de tipo",
    opciones: ["Endocrina", "Circulatoria", "Nerviosa"],
    respuesta: "Endocrina",
    dificultad: 2,
  },
  {
    pregunta: "Hormona que regula el azúcar en la sangre.",
    opciones: ["Tiroxina", "Insulina", "Glucagón"],
    respuesta: "Insulina",
    dificultad: 2,
  },
  {
    pregunta: "Desarrolló los principios fundamentales de la genética.",
    opciones: ["Robert Hoocke", "Gregor Mendel", "Watson y Crick"],
    respuesta: "Gregor Mendel",
    dificultad: 2,
  },
  {
    pregunta:
      "Es el conjunto de reacciones bioquímicas que tienen lugar en el interior  de la célula.",
    opciones: ["Anabolismo", "Catalismo", "Metabolismo"],
    respuesta: "Metabolismo",
    dificultad: 2,
  },
  {
    pregunta:
      "Parte del sistema reproductor masculino, en donde se producen hormonas y espermatozoides.",
    opciones: ["Pene", "Testículos", "Escroto"],
    respuesta: "Testículos",
    dificultad: 3,
  },
  {
    pregunta:
      "Es una secuencia ordenada de nucleótidos  en la molécula de ADN  y que contiene la información necesaria para la síntesis de proteínas",
    opciones: ["Código genético", "Gen", "Alelo dominante"],
    respuesta: "Código genético",
    dificultad: 3,
  },
  {
    pregunta:
      "Es el conjunto de  genes que un individuo posee para un carácter.",
    opciones: ["Gen", "Fenotipo", "Genotipo"],
    respuesta: "Genotipo",
    dificultad: 3,
  },
  {
    pregunta:
      "El conjunto de cromosomas  humanos ordenados de acuerdo a su forma y tamaño, toma el nombre de:",
    opciones: ["Fenotipo", "Cariotipo", "Genotipo"],
    respuesta: "Cariotipo",
    dificultad: 3,
  },
  {
    pregunta: "Las bases nitrogenadas del ARN son:",
    opciones: [
      "Adenina ,guanina, citosina y timina",
      "Adenina,guanina.citosina y uracilo",
      "Adenina,timina, citosina y uracilo",
    ],
    respuesta: "Adenina,guanina.citosina y uracilo",
    dificultad: 3,
  },
  {
    pregunta:
      "El elemento más idóneo para constituir los”esqueletos estructurales” de la materia viva es el:",
    opciones: ["Calcio", "Sodio", "Carbono"],
    respuesta: "Calcio",
    dificultad: 3,
  },
  {
    pregunta:
      "¿Cuál de los siguientes elementos químicos NO es un bioelemento?",
    opciones: ["Helio", "Cobalto", "Zinc"],
    respuesta: "Helio",
    dificultad: 3,
  },
  {
    pregunta:
      "Las moléculas menores que componen una biomolécula reciben el nombre de:",
    opciones: ["Monomoléculas", "Polímeros", "Monómeros"],
    respuesta: "Monómeros",
    dificultad: 3,
  },
  {
    pregunta: "Es la biomolécula más abundante en los seres vivos.",
    opciones: ["Agua", "Glucosa", "Lípidos"],
    respuesta: "Agua",
    dificultad: 3,
  },
  {
    pregunta:
      "Es la biomolécula que contiene la información genética de cada ser vivo.",
    opciones: ["Proteínas", "Carbohidratos", "ADN"],
    respuesta: "ADN",
    dificultad: 3,
  },
  {
    pregunta: "Son un conjunto de membranas que protegen al sistema nervios",
    opciones: ["Tejidos", "Neuronas", "Meninges"],
    respuesta: "Meninges",
    dificultad: 4,
  },
  {
    pregunta: "Los órganos que forman  el encéfalo son:",
    opciones: ["Cerebro", "Bulbo Raquídeo", "Todas las anteriores"],
    respuesta: "Todas las anteriores",
    dificultad: 4,
  },
  {
    pregunta:
      "Regula el funcionamiento del corazón y de los músculos respiratorios, además de los movimientos de la masticación, la tos, el estornudo, el vómito…",
    opciones: ["Cerebro", "Bulbo Raquídeo", "Cerebelo"],
    respuesta: "Bulbo Raquídeo",
    dificultad: 4,
  },
  {
    pregunta: "Coordina los movimientos y postura del cuerpo",
    opciones: ["Cerebro", "Bulbo Raquídeo", "Cerebelo"],
    respuesta: "Cerebelo",
    dificultad: 4,
  },
  {
    pregunta: "Es una hormona que estimula la producción de leche materna",
    opciones: ["Oxitocina", "Tiroxina", "Prolactina"],
    respuesta: "Prolactina",
    dificultad: 4,
  },
  {
    pregunta: "Tiene una función endocrina",
    opciones: ["Hipótalamo", "Amígdala cerebral", "Sistema límbico"],
    respuesta: "Hipótalamo",
    dificultad: 4,
  },
  {
    pregunta: "La sacarosa es un disacárido formado por:",
    opciones: [
      "Glucosa más fructuosa",
      "Glucosa más glucosa",
      "Glucosa más maltosa",
    ],
    respuesta: "Glucosa más fructuosa",
    dificultad: 4,
  },
  {
    pregunta:
      "Si comparamos el tejido que  forma los músculos en  los animales con el tejido de  los vegetales sería el tejido:",
    opciones: ["Meristemático", "Epidérmico", "Parénquima"],
    respuesta: "Parénquima",
    dificultad: 4,
  },
  {
    pregunta:
      "Los nutrientes presentes en los alimentos, que nos proporcionan aminoácidos son los siguientes:",
    opciones: [
      "Carbohídratos y proteínas",
      "Carbohídratos y lípidos",
      "Proteínas",
    ],
    respuesta: "Proteínas",
    dificultad: 4,
  },
  {
    pregunta:
      "Son las  variantes que determinan un carácter, Generalmente uno es dominante (A) y otro es recesivo(a).",
    opciones: ["Genotipo", "Alelos", "Generación filial"],
    respuesta: "Alelos",
    dificultad: 4,
  },
];

export default data;
