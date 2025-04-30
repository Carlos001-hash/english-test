"use client"

import { Text, Bubble } from "./textFit";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";


export const EngText = ({ text }: { text: Text }) => {
    const [spawText, setSpawText] = useState(Math.floor(Math.random() *4) +1);
    const [num, setNum] = useState(0);
    
    const handleSpaw = () =>{
        if(num <= text.one.length -1 ) {; setNum(num +1)}
        setSpawText(Math.floor(Math.random() *4) +1)

    }
    return (
        <div className="w-full h-screen ">
          <header className="w-full h-12 flex justify-end items-center "> <button className="text-xl font-semibold pb-2 w-9 h-9 rounded-full border border-blue-300 bg-gray-50/60 hover:bg-white   mr-3">. . .</button></header>
          <main className="w-full h-auto">
            <section className="w-full h-auto py-8">
                <div className="w-full h-auto flex items-center justify-center">
                    <div><p></p></div>
                  <div className="w-[356px] h-auto bg-gray-50 border-2 border-white rounded-lg p-2 text-center ">
                    {num == 0 ? (
                        <p className={text.style[1]}>{text.text[0]}</p>
                    ):(
                        <p className={text.style[0]}>{text.text[0]}</p>
                    )}
                    {num == 1 ? (
                        <p className={text.style[1]}>{text.text[1]}</p>
                    ):(
                        <p className={text.style[0]}>{text.text[1]}</p>
                    )}
                    {num == 2 ? (
                        <p className={text.style[1]}>{text.text[2]}</p>
                    ):(
                        <p className={text.style[0]}>{text.text[2]}</p>
                    )}
                    {num == 3 ? (
                        <p className={text.style[1]}>{text.text[3]}</p>
                    ):(
                        <p className={text.style[0]}>{text.text[3]}</p>
                    )}
                    {num == 4 ? (
                        <p className={text.style[1]}>{text.text[4]}</p>
                    ):(
                        <p className={text.style[0]}>{text.text[4]}</p>
                    )}
                    
                  </div>
                </div>
            </section>
            <section className="w-full h-auto py-8">
              <div className="flex flex-col">
                <div className="w-full h-auto flex flex-col items-center justify-center gap-3">
                    {spawText == 1 ? (
                        <button onClick={handleSpaw}><p className="flex w-76 h-auto p-2 bg-gray-50/95  hover:bg-white border border-white font-semibold text-[16px] text-black rounded-xl shadow-2xl">{text.one[num]}</p></button>
                    ):(
                        <button ><p className=" flex w-76 h-auto p-2 bg-gray-50/95  hover:bg-white border border-white font-semibold text-[16px] text-black rounded-xl shadow-2xl">{text.two[num]}</p></button>
                    )}
                    {spawText == 2 ? (
                        <button onClick={handleSpaw}><p className="flex w-76 h-auto p-2 bg-gray-50/95  hover:bg-white border border-white font-semibold text-[16px] text-black rounded-xl shadow-2xl">{text.one[num]}</p></button>
                    ):(
                        <button ><p className="flex w-76 h-auto p-2 bg-gray-50/95  hover:bg-white border border-white font-semibold text-[16px] text-black rounded-xl shadow-2xl">{text.three[num]}</p></button>
                    )}
                    {spawText == 3 ? (
                        <button onClick={handleSpaw}><p className="flex w-76 h-auto p-2 bg-gray-50/95  hover:bg-white border border-white font-semibold text-[16px] text-black rounded-xl shadow-2xl">{text.one[num]}</p></button>
                    ):(
                        <button ><p className="flex w-76 h-auto p-2 bg-gray-50/95  hover:bg-white border border-white font-semibold text-[16px] text-black rounded-xl shadow-2xl">{text.four[num]}</p></button>
                    )}
                    {spawText == 4 ? (
                        <button onClick={handleSpaw}><p className="flex w-76 h-auto p-2 bg-gray-50/95  hover:bg-white border border-white font-semibold text-[16px] text-black rounded-xl shadow-2xl">{text.one[num]}</p></button>
                    ):(
                        <button ><p className="flex w-76 h-auto p-2 bg-gray-50/95  hover:bg-white border border-white font-semibold text-[16px] text-black rounded-xl shadow-2xl">{text.five[num]}</p></button>
                    )}
                </div>
              </div>
            </section>
          </main>
        </div>
        
    )
    
}

let y: number = 0;

export const ShowBubble = ({ bubble }: { bubble: Bubble }) =>  {
    const [numBub, setNumBub] = useState(Math.floor(Math.random() * bubble.one.length))
    const [dica, setDica] = useState(false)
    const [left, setLeft] = useState(Math.floor(Math.random() * 50))
    const [bottom, setBottom] = useState(Math.floor(Math.random() * 50))
  const [divVisivel, setDivVisivel] = useState(false);
  const refDiv = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState('')
  const [contador, setContador] = useState(0)
  const [closeBubble, setCloseBubble] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
   const tatu: string[] = [];
  const handleSubmit = () => {
    if (inputValue.toLowerCase() === bubble.two[numBub]) {
        setContador(contador + 1)
        y = y +1
        setCloseBubble(true)
        tatu.push(`${bubble.one[numBub]}` + ": " + `${bubble.two[numBub]}`)
        console.log(y)
    }else {
        y = y -1
        console.log(y)
    }
  }

  useEffect(() => {
    const handleClickFora = (event: MouseEvent) => {
      if (refDiv.current && !refDiv.current.contains(event.target as Node)) {
        setDivVisivel(false);
      }
    };

    document.addEventListener('mousedown', handleClickFora);

    return () => {
      document.removeEventListener('mousedown', handleClickFora);
    };
  }, []);

    return (
        <div>
            {closeBubble || (
            <div
            style={{display: `${closeBubble}`}} className="">
                {divVisivel ? (
                    <div style={{left: `${left}vw`, bottom: `${bottom}vh`, boxShadow: 'inset 0px 0px 5px rgba(0, 0, 0, 0.5)' }} className="absolute w-60 h-auto flex flex-col p-2 bg-blue-200/40 rounded-lg  left-7 bottom-9"
                >
                    <div className="flex w-full h-12 bg-gray-100 items-center justify-center font-semibold border-2 border-white rounded-lg">
                    <p>{bubble.one[numBub]}</p>
                    </div>
                    <div className="flex w-full h-12 flex-row-reverse justify-center items-center">
                    <button className="min-w-9 h-9 border border-green-200 rounded-full bg-gray-100 hover:bg-gray-50 mr-2"
                        onClick={() => {setDica(!dica); setNumBub(numBub)}}>?</button>
                    <div className="w-full flex flex-row-reverse justify-baseline items-center pr-3">
                        {dica && <p className="text-shadow font-semibold">{bubble.two[numBub]}</p>}
                    </div>
                    </div>
                    <div className="flex w-full h-12 p-1">
                    <div className="w-full h-full flex flex-row p-1 bg-gray-100 border border-white rounded-full">
                        <input onChange={handleInputChange} type="text" className="w-full border-1 border-gray-200 rounded-tl-2xl rounded-bl-2xl pl-2" placeholder="Digite aqui..." />
                        <button onClick={handleSubmit} className="w-20 shadow-inner ml- rounded-tr-2xl rounded-br-2xl drop-shadow-md bg-gray-200 border border-white">Enviar</button>
                    </div>
                    </div>
                </div>
                ):(
                    
                    <motion.button 
                    animate={{ x: [0, 40, 0], y: [40, 0, 40]}}
                    transition={{  duration: `${Math.random() *10 +7}`, repeat: Infinity, ease: "easeInOut" }}
                    style={{left: `${left}vw`, top: `${bottom}vh`, boxShadow: 'inset 0px 0px 10px rgba(0, 0, 0, 0.5)'}} 
                    onClick={() => {setLeft(left); setBottom(bottom); setDivVisivel(true)}} 
                    className="absolute w-20 h-20 bg-blue-200/40 rounded-full"></motion.button>
                   
               )}
            </div>
        )}
        </div>
        
        
    )
}

export const bubble: Bubble[] = [
    {
        id: 1,
        one: ["possui", "uma", "economia", "diversificada", "com", "destaque",  "exportação", "de", "e", "minerais", "A", "produção",    "de", "laranja", "e", "outros", "lidera", "o",  "setor",  "enquanto", "petróleo", "e",   "potássio",   "são",  "os", "principais", "mineral", "produtos",  "o",  "estado", "exporta", "artesanato",  "produtos", "alimentícios",  "é", "uma", "empresa", "brasileira", "de", "aeronáutica", "reconhecida", "globalmente", "por", "sua", "fabricação",   "inovadora", "de", "aviões",   "Fundada", "em",  "a",  "empresa",  "localizada", "em", "A",   "é", "especializada", "em", "aviação", "comercial",   "militar",  "e",   "executiva", "liderando", "avanços",    "setor",   "aeroespacial"],
        two: ["has",     "a",  "economy",  "diversified",    "with", "highlight", "export",   "of",  "and", "mineral", "The", "production", "of", "orange", "and", "other", "leads", "the", "sector", "while",     "oil",   "and",   "potassium", "are", "the",   "main",     "mineral",   "products", "the", "state", "exports", "handicraft", "products",   "food",         "is", "a",  "company", "Brazilian", "of", "aerospace",   "recognized",    "globally",   "for", "its", "manufacturing", "innovative", "of", "aircraft", "Founded", "in", "the", "company", "located",    "in", "The", "is", "specialized",  "in", "aviation", "commercial", "military", "and", "executive", "leading", "advancements", "sector", "aerospace", ],
    },{
        id: 2,
        one: ["possui", "uma", "economia", "diversificada", "com", "destaque",  "exportação", "de", "e", "minerais", "A", "produção",    "de", "laranja", "e", "outros", "lidera", "o",  "setor",  "enquanto", "petróleo", "e",   "potássio",   "são",  "os", "principais", "minerais", "produtos",  "o",  "estado", "exporta", "artesanato",  "produtos", "alimentícios",  "é", "uma", "empresa", "brasileira", "de", "aeronáutica", "reconhecida", "globalmente", "por", "sua", "fabricação",   "inovadora", "de", "aviões",   "Fundada", "em",  "a",  "empresa",  "localizada", "em",  "A",   "é", "especializada", "em", "aviação", "comercial",   "militar",  "e",   "executiva", "liderando", "avanços",    "setor",   "aeroespacial"],
        two: ["has",     "a",  "economy",  "diversified",    "with", "highlight", "export",   "of",  "and", "mineral", "The", "production", "of", "orange", "and", "other", "leads", "the", "sector", "while",     "oil",   "and",   "potassium", "are", "the",   "main",     "mineral",   "products", "the", "state", "exports", "handicraft", "products",   "food",         "is", "a",  "company", "Brazilian", "of", "aerospace",   "recognized",    "globally",   "for", "its", "manufacturing", "innovative", "of", "aircraft", "Founded", "in", "the", "company", "located",  "in", "The", "is", "specialized",  "in", "aviation", "commercial", "military", "and", "executive", "leading", "advancements", "sector", "aerospace", ],
    },
]

export const textId: Text[] = [
    {
        id: 1,
        text: ["Sergipe possui uma economia diversificada,", "com destaque para a exportação de produtos agrícolas e minerais.", "A produção de laranja e outros cítricos lidera o setor agrícola,", "enquanto o petróleo e potássio são os principais produtos minerais.", "Além disso, o estado exporta artesanato e produtos alimentícios."],
        one: ["Sergipe has a diversified economy,", "with a focus on the export of agricultural and mineral products.", "The production of oranges and other citrus fruits leads the agricultural sector,", "while oil and potassium are the main mineral products.", "Additionally, the state exports handicrafts and food products."],
        two: ["Sergipe has a varied economy,", "with prominence in the export of farming and mineral goods.", "The cultivation of oranges and other citrus fruits dominates the agricultural industry,", "while petroleum and potassium are key mineral resources.", "Furthermore, the state exports artisanal items and edible goods."],
        three: ["Sergipe has a broad economy,", "excelling in the export of agricultural and extracted materials.", "The orange and citrus production spearheads the farming sector,", "while oil and potash stand out in the mineral segment.", "Moreover, the state exports crafts and consumable products."],
        four: ["Sergipe has an evolving economy,", "specializing in the export of agricultural and raw materials.", "The growth of oranges and other citruses drives the farming industry,", "while crude oil and potassium are prominent mineral exports.", "In addition, the state exports handmade items and foodstuffs."],
        five: ["Sergipe has a dynamic economy,", "focusing on the export of agricultural and mineral resources.", "The cultivation of oranges and other citruses drives the farming sector,", "while petroleum and potassium lead the mineral segment.", "Additionally, the state exports artisanal crafts and foodstuffs."],
        style: ["text-[16] font-semibold", "text-blue-500 font-semibold"]
    },
    {
        id: 2,
        text: ["A Embraer é uma empresa brasileira de aeronáutica,", "reconhecida globalmente por sua fabricação inovadora de aviões.", "Fundada em 1969, a empresa está localizada em São José dos Campos.", "A Embraer é especializada em aviação comercial, militar e executiva,", "liderando avanços no setor aeroespacial."],
        one: ["Embraer is a Brazilian aerospace company,", "recognized globally for its innovative aircraft manufacturing.", "Founded in 1969, the company is based in São José dos Campos.", "Embraer specializes in commercial, military, and executive aviation,", "pioneering advancements in the aerospace sector."],
        two: ["Embraer is a Brazilian aerospace corporation,", "celebrated globally for its groundbreaking aircraft engineering.", "Established in 1969, the firm is headquartered in São José dos Campos.", "Embraer focuses on commercial, defense, and executive aviation,", "leading developments in the aeronautical industry."],
        three: ["Embraer is a Brazilian aerospace enterprise,", "renowned worldwide for its cutting-edge airplane production.", "Created in 1969, its base is in São José dos Campos.", "Embraer targets commercial, military, and private aviation,", "transforming the aerospace field."],
        four: ["Embraer is a Brazilian aerospace manufacturer,", "admired internationally for its exceptional aircraft design.", "Founded in 1969, the company operates in São José dos Campos.", "Embraer produces commercial, military, and business jets,", "revolutionizing the aviation sector."],
        five: ["Embraer represents Brazil's aerospace innovation,", "leading in the production of advanced aircraft globally.", "Founded in 1969, it specializes in commercial aviation,", "while also advancing military and executive jet design.", "It contributes significantly to the aeronautical industry."],
        style: [" text-[16] font-semibold", " text-blue-500 font-semibold "]
    },
    {
        id: 3,
        text: ["A arte da conversação é uma habilidade valiosa,", "permitindo conexões significativas e trocas de ideias.", "Saber ouvir é tão importante quanto saber falar,", "pois demonstra respeito e empatia pelo outro.", "Conversas são pontes que aproximam pessoas, culturas e ideias."],
        one: ["The art of conversation is a valuable skill,", "allowing meaningful connections and idea exchanges.", "Knowing how to listen is just as important as knowing how to speak,", "as it shows respect and empathy for others.", "Conversations are bridges that bring people, cultures, and ideas closer."],
        two: ["The art of dialogue is a valuable skill,", "enabling meaningful connections and idea exchanges.", "Knowing how to hear is just as important as knowing how to speak,", "as it shows consideration and empathy for others.", "Conversations are pathways that bring people, cultures, and ideas closer."],
        three: ["The art of conversation is a significant ability,", "allowing impactful connections and idea exchanges.", "Learning how to listen is just as important as learning how to speak,", "as it demonstrates respect and empathy for others.", "Conversations are channels that bring people, traditions, and ideas closer."],
        four: ["The art of conversation is an essential talent,", "allowing meaningful relations and idea exchanges.", "Knowing how to comprehend is just as important as knowing how to speak,", "as it shows respect and understanding for others.", "Conversations are bonds that bring individuals, cultures, and ideas closer."],
        five: ["The art of interaction is a valuable ability,", "fostering meaningful connections and idea exchanges.", "Knowing how to listen is essential to communication,", "as it displays understanding and empathy for others.", "Dialogues are bridges between people, cultures, and ideas."],
        style: [" text-[16] font-semibold", " text-blue-500 font-semibold "]
    },
    {
        id: 4,
        text: ["O Brasil é o maior país da América do Sul,", "reconhecido por sua diversidade cultural e belezas naturais.", "Com uma área de 8,5 milhões de km², é o quinto maior país do mundo.", "O Brasil abriga a Floresta Amazônica, conhecida como o pulmão do planeta,", "além de ser famoso por festas como o Carnaval e sua paixão pelo futebol."],
        one: ["Brazil is the largest country in South America,", "recognized for its cultural diversity and natural beauties.", "With an area of 8.5 million km², it is the fifth largest country in the world.", "Brazil is home to the Amazon Rainforest, known as the planet's lungs,", "and is famous for celebrations like Carnival and its passion for soccer."],
        two: ["Brazil is the biggest nation in South America,", "celebrated for its rich culture and stunning landscapes.", "Covering 8.5 million square kilometers, it ranks as the world's fifth largest country.", "Brazil hosts the Amazon Rainforest, considered the lungs of the Earth,", "and is renowned for festivities like Carnival and its love for football."],
        three: ["Brazil is a vast country in South America,", "renowned for its vibrant culture and breathtaking nature.", "Spanning 8.5 million km², it stands as the fifth largest country on the planet.", "Brazil shelters the Amazon Rainforest, often called Earth's lungs,", "and gains recognition for events like Carnival and its passion for soccer."],
        four: ["Brazil is South America's largest nation,", "admired for its diverse traditions and incredible natural scenery.", "With an area of 8.5 million km², it holds the title of the fifth largest country worldwide.", "Brazil contains the Amazon Rainforest, hailed as the lungs of the planet,", "and is well-known for festivities such as Carnival and its love of football."],
        five: ["Brazil is South America's most significant nation,", "appreciated for its vibrant traditions and natural scenery.", "With 8.5 million km² of area, it is the world's fifth largest country,", "Brazil is home to the Amazon Rainforest, Earth's lungs,", "and it shines for its Carnival celebrations and soccer culture."],
        style: [" text-[16] font-semibold", " text-blue-500 font-semibold "]
    },
    {
        id: 5,
        text: ["A TV Globo é uma das maiores emissoras de televisão do Brasil,", "reconhecida por sua programação diversificada e produção de qualidade.", "Fundada em 1965, sua sede está localizada no Rio de Janeiro.", "A emissora é famosa por suas novelas, jornalismo de credibilidade e eventos esportivos,", "e continua sendo referência na televisão brasileira."],
        one: ["TV Globo is one of the largest television networks in Brazil,", "renowned for its diverse programming and high-quality production.", "Founded in 1965, it is headquartered in Rio de Janeiro.", "The network is famous for its soap operas, credible journalism, and sports coverage,", "remaining a benchmark in Brazilian television."],
        two: ["Globo Television is among the biggest broadcasters in Brazil,", "celebrated for its varied content and excellent productions.", "Established in 1965, its main offices are in Rio de Janeiro.", "The station stands out for its telenovelas, trustworthy news, and sports programming,", "serving as a standard in Brazilian media."],
        three: ["TV Globo ranks as a leading Brazilian television channel,", "noted for its wide-ranging shows and premium production quality.", "Founded in 1965, its base is in Rio de Janeiro.", "The broadcaster excels in soap operas, reliable news, and sports entertainment,", "setting the pace for television in Brazil."],
        four: ["Globo is a top-tier TV network in Brazil,", "admired for its engaging programming and exceptional production value.", "Since 1965, its operations have been centered in Rio de Janeiro.", "Known for its novelas, credible news reporting, and sports broadcasts,", "it stands as a hallmark of Brazilian television."],
        five: ["TV Globo is a premier television network in Brazil,", "acknowledged for its compelling programming and production excellence.", "Founded in 1965, it operates from Rio de Janeiro.", "The network is famed for its series, credible news, and sports content,", "remaining influential in Brazilian television."],
        style: [" text-[16] font-semibold", " text-blue-500 font-semibold "]
    },
    {
        id: 6,
        text: ["A Bossa Nova é um gênero musical brasileiro,", "surgido na década de 1950 e influenciado pelo samba e jazz.", "Caracteriza-se por sua melodia suave e ritmos complexos,", "sendo imortalizada por artistas como João Gilberto e Tom Jobim.", "Canções como 'Garota de Ipanema' são mundialmente famosas."],
        one: ["Bossa Nova is a Brazilian musical genre,", "emerging in the 1950s and influenced by samba and jazz.", "It is characterized by its soft melody and complex rhythms,", "immortalized by artists such as João Gilberto and Tom Jobim.", "Songs like 'The Girl from Ipanema' are globally famous."],
        two: ["Bossa Nova is a Brazilian music style,", "originating in the 1950s and shaped by samba and blues.", "It is known for its smooth harmony and intricate tunes,", "celebrated by musicians like João Gilberto and Vinicius de Moraes.", "Hits such as 'The Girl from Rio' are widely acclaimed."],
        three: ["Bossa Nova is a Brazilian sound,", "developed in the 1950s and impacted by samba and bebop.", "It features gentle vocals and sophisticated chords,", "honored by figures like Antonio Carlos Jobim and Vinicius de Moraes.", "Pieces like 'The Lady from Ipanema' are internationally loved."],
        four: ["Bossa Nova is a Brazilian musical movement,", "created in the 1950s with influences from samba and soul.", "It showcases relaxing rhythms and layered harmonies,", "pioneered by legends such as João Gilberto and Baden Powell.", "Tracks like 'The Girl in Copacabana' are globally cherished."],
        five: ["Bossa Nova is a Brazilian musical tradition,", "emerging in the 1950s and influenced by samba and bebop.", "Its gentle melodies and complex rhythms are admired worldwide,", "immortalized by artists like João Gilberto and Antonio Carlos Jobim.", "Songs such as 'Garota de Ipanema' gained international fame."],
        style: ["text-[16] font-semibold", "text-blue-500 font-semibold"]
    },
    {
        id: 7,
        text: ["Poço Redondo é um município localizado no sertão de Sergipe,", "conhecido por sua rica cultura e história ligada ao cangaço.", "É uma das maiores cidades em extensão territorial do estado,", "sendo marcada por paisagens de caatinga e pelo Rio São Francisco.", "O município também é famoso pela história de Lampião e Maria Bonita."],
        one: ["Poço Redondo is a municipality located in the hinterlands of Sergipe,", "known for its rich culture and history connected to cangaço.", "It is one of the largest cities in territorial extension in the state,", "marked by caatinga landscapes and the São Francisco River.", "The municipality is also famous for the story of Lampião and Maria Bonita."],
        two: ["Poço Redondo is a town situated in the countryside of Sergipe,", "renowned for its cultural richness and ties to the cangaço era.", "It ranks among the biggest cities in land area within the state,", "featuring caatinga scenery and the São Francisco River.", "The town is well-known for the tales of Lampião and Maria Bonita."],
        three: ["Poço Redondo is a city based in the rural region of Sergipe,", "celebrated for its vibrant culture and links to the cangaço movement.", "It stands out as one of the largest municipalities by area in Sergipe,", "characterized by caatinga vistas and the São Francisco River.", "The city is recognized for the legend of Lampião and Maria Bonita."],
        four: ["Poço Redondo is a location in the arid zone of Sergipe,", "highlighted for its deep cultural roots and cangaço heritage.", "It is noted as one of the widest municipalities in the state,", "defined by its caatinga terrain and proximity to the São Francisco River.", "The area is famous for the historical figures Lampião and Maria Bonita."],
        five: ["Poço Redondo is a territory situated in the hinterlands of Sergipe,", "renowned for its cultural wealth and connection to cangaço.", "It ranks as one of the largest municipalities by area in Sergipe,", "highlighted by caatinga scenery and the São Francisco River.", "The town is celebrated for the legends of Lampião and Maria Bonita."],
        style: ["text-[16] font-semibold", "text-blue-500 font-semibold"]
    },
    {
        id: 8,
        text: ["A Inteligência Artificial (IA) é uma área da ciência da computação,", "focada no desenvolvimento de sistemas capazes de realizar tarefas que normalmente requerem inteligência humana.", "Essas tarefas incluem aprendizado, reconhecimento de padrões, tomada de decisões e processamento de linguagem natural.", "A IA está presente em várias áreas, como saúde, finanças, transporte e entretenimento.", "Seu impacto no futuro promete transformar a forma como vivemos e trabalhamos."],
        one: ["Artificial Intelligence (AI) is a field of computer science,", "focused on creating systems capable of performing tasks that typically require human intelligence.", "These tasks include learning, pattern recognition, decision-making, and natural language processing.", "AI is present in various sectors, such as healthcare, finance, transportation, and entertainment.", "Its future impact promises to reshape how we live and work."],
        two: ["Artificial Intelligence (AI) is a branch of computing,", "dedicated to developing technologies that mimic human cognitive functions.", "Applications range from learning algorithms to natural language interpretation and autonomous decision-making.", "AI is applied across industries like medicine, banking, logistics, and digital media.", "It is set to revolutionize human activities in unprecedented ways."],
        three: ["Artificial Intelligence (AI) represents a segment of computer science,", "designed to enable machines to perform functions associated with human reasoning.", "This includes skills like adapting to new information, understanding speech, and making complex choices.", "Industries including healthcare, commerce, mobility, and gaming rely on AI advancements.", "Its continuous evolution indicates profound changes ahead in global lifestyles."],
        four: ["Artificial Intelligence (AI) is a domain in technology,", "aimed at designing intelligent systems that simulate human thought processes.", "These capabilities extend to learning, analyzing patterns, conversational interfaces, and strategic reasoning.", "AI spans fields such as diagnostics, financial analysis, autonomous vehicles, and interactive entertainment.", "The innovation in AI is expected to redefine societal progress extensively."],
        five: ["Artificial Intelligence (AI) is a discipline in computing,", "focused on developing algorithms to mimic human cognitive abilities.", "Skills include pattern recognition, decision-making, and learning.", "AI is revolutionizing industries like healthcare and transportation,", "bringing profound changes to the global digital landscape."],
        style: ["text-[16] font-semibold", "text-blue-500 font-semibold"]
    },
    {
        id: 9,
        text: ["O Brasil exporta café para países asiáticos,", "com destaque para Japão, China e Coreia do Sul.", "Esses mercados valorizam grãos arábica de alta qualidade,", "importando volumes significativos de café brasileiro.", "A demanda cresce com a cultura de cafeterias."],
        one: ["Brazil exports coffee to Asian countries,", "especially Japan, China, and South Korea.", "These markets value high-quality arabica beans,", "importing significant volumes of Brazilian coffee.", "Demand grows with café culture."],
        two: ["Brazilian coffee is exported to Asia,", "notably to Japan, China, and South Korea.", "Arabica beans are appreciated for their quality,", "with large amounts imported from Brazil.", "Café culture is driving demand growth."],
        three: ["Coffee from Brazil reaches Asian markets,", "such as Japan, China, and South Korea,", "valued for its premium arabica beans,", "imported significantly in these regions.", "Growing coffee trends boost interest."],
        four: ["Brazil supplies coffee to Asian countries,", "including Japan, China, and South Korea,", "prized for high-quality arabica beans,", "with strong imports from Brazilian farms.", "Café culture expands coffee demand."],
        five: ["Brazil exports arabica coffee to Asian markets,", "including Japan, China, and South Korea.", "These nations value high-grade arabica beans,", "importing substantial volumes of Brazilian coffee.", "Coffee culture enhances demand growth."],
        style: ["text-[16] font-semibold", "text-blue-500 font-semibold"]
    },
    {
        id: 10,
        text: ["O Laboratório Nacional de Luz Síncrotron (LNLS) está localizado em Campinas, São Paulo,", "sendo parte do Centro Nacional de Pesquisa em Energia e Materiais (CNPEM).", "O LNLS é responsável pelo Sirius, um avançado acelerador de partículas.", "Ele utiliza luz síncrotron para estudos em escalas nanométricas,", "contribuindo para pesquisas em saúde, energia, agricultura e materiais."],
        one: ["The National Synchrotron Light Laboratory (LNLS) is located in Campinas, São Paulo,", "and is part of the National Center for Research in Energy and Materials (CNPEM).", "The LNLS operates Sirius, a cutting-edge particle accelerator.", "It uses synchrotron light for studies at nanometric scales,", "contributing to research in health, energy, agriculture, and materials."],
        two: ["The LNLS, Brazil's National Synchrotron Light Laboratory, is situated in Campinas,", "integrating the National Center for Research in Energy and Materials (CNPEM).", "Sirius, its particle accelerator, enables innovative scientific discoveries.", "Through synchrotron light, it explores matter at microscopic levels,", "supporting advancements in various scientific domains, including health and energy."],
        three: ["Brazil's LNLS, the National Synchrotron Light Laboratory, resides in Campinas,", "as a key member of the National Research Center in Energy and Materials (CNPEM).", "Its Sirius accelerator employs synchrotron radiation to study matter deeply,", "opening avenues for breakthroughs in sectors like agriculture and materials.", "This infrastructure elevates Brazil's global standing in scientific research."],
        four: ["The LNLS, Brazil's premier synchrotron light lab, is based in Campinas,", "contributing to CNPEM's national research framework.", "Its Sirius synchrotron is at the forefront of particle physics and materials science.", "By using high-intensity radiation, it promotes advances in agriculture, energy, and health.", "The LNLS exemplifies Brazil's commitment to innovation and scientific progress."],
        five: ["The LNLS, Brazil's advanced synchrotron lab, is located in Campinas,", "affiliated with the National Center for Research in Energy and Materials (CNPEM).", "Its Sirius accelerator pioneers cutting-edge scientific exploration,", "utilizing synchrotron radiation to advance materials and health research,", "and solidifying Brazil's reputation in global science."],
        style: ["text-[16] font-semibold", "text-blue-500 font-semibold"]
    }
]
