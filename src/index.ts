/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05	
	const nome1 = 'Ariane Silva';
	const idade1 = 28;
	const peso1 = 60;
	const altura1 = 1.60;
	const dev1 = true;
	let IMC1 = peso1 / (altura1 * altura1);
	
	const nome2 = 'Henrique OLiveira';
	const idade2 = 35;
	const peso2 = 85;
	const altura2 = 1.80;
	const dev2 = false;
	let IMC2 = peso2 / (altura2 * altura2);
	
	const nome3 = 'Emille Pereira';
	const idade3 = 25;
	const peso3 = 75;
	const altura3 = 1.70;
	const dev3 = false;
	let IMC3 = peso3 / (altura3 * altura3);
	
	const nome4 = 'Karina Alves';
	const idade4 = 27;
	const peso4 = 70;
	const altura4 = 1.70;
	const dev4 = false;
    let IMC4  = peso4 / (altura4 * altura4);
	
	const somaDasIdades = idade1 + idade2 + idade3 + idade4;
	console.log('Soma das idades dos Ubuntus:', somaDasIdades);

    console.log(`${nome1}, ${nome2}, ${nome3}, ${nome4}.`);

	console.log(`IMC ${IMC1} da ${nome1}.`);
    console.log(`IMC ${IMC2} do ${nome2}.`);
    console.log(`IMC ${IMC3} da ${nome3}.`);
    console.log(`IMC ${IMC4} da ${nome4}.`);

    const mediaIMC = (IMC1 + IMC2 + IMC3 + IMC4) / 4;
    console.log('Média do IMC de todos os Ubuntus:', mediaIMC);
	
	const devs = [dev1, dev2, dev3, dev4];
	const totalDevs = devs.filter(dev => dev).length;
	console.log('Total de Ubuntos que são devs:', totalDevs);
	
	const UbuntusSilva = [nome1, nome2, nome3, nome4];
	const UbuntusComSilva = UbuntusSilva.filter(nome => nome.includes('Silva'));
	console.log('Ubuntus com sobrenome Silva:', UbuntusComSilva);
	});
