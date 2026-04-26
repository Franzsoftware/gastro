
import sharp from "sharp";
import fs from "fs"; 

const carpeta = "./src/images/detalls";

const mides = [600, 800, 1200];

const arxius = fs.readdirSync(carpeta);

async function optimitzacio() {
    for (const arxiu of arxius) {
        if(arxiu.endsWith(".jpg") || arxiu.endsWith(".png")) {
            
            const nom = arxiu.split(".")[0];

            for (const mida of mides) {
                await sharp(`${carpeta}/${arxiu}`)
                    .resize(mida)
                    .toFormat("webp")
                    .toFile(`${carpeta}/${nom}-${mida}.webp`);

                await sharp(`${carpeta}/${arxiu}`) 
                    .resize(mida)
                    .toFormat("avif")
                    .toFile(`${carpeta}/${nom}-${mida}.avif`);
            }
            console.log("Fet:", arxiu);
        }
    }
}

optimitzacio();