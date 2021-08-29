#!/usr/bin/env node

const statsLinks = (array)=>{
  const totalLinks = array.map( link => link.href)
  const uniqueLinks = new Set(totalLinks)
  return `Total  : ${totalLinks.length}\nUnique : ${uniqueLinks.size}`
}
const brokenLinks =(array)=>{
    const msgLinks = array.map( link => link.message)
    const broken= msgLinks.filter( link => link.message ==='FAIL')
    return `Broken : ${broken.length}`
}

const helpMsg =`
───────────────────────────────────────────────────────────────────────────────────────────────────
─────────────────▄▄▄▄▄▄▄▄▄▄▄───────────────────────────────────────────────────────────────────────
────────────▄▄▀▀▀░░░░░░░░░░░▀▄▄───────────                                                     ────
────────▄▄▀▀░░░░░░░▄▄▄▄▄▄▄░░░░░▀▄─────────                                                     ────
──────▄▀░░░░░░░░░▄▄▄▄▄▄▄▄▄▄▄░░░░░█────────                                                     ────
────▄▀░░░░░▄▄▄▄▄▄▄░░░░░░░░░░░▄▄▄▄▄█▄▄─────            ¿ＮＥＣＥＳＩＴＡＳ  ＡＹＵＤＡ？        ────
───▄▀░▐▌░░░░░░░░░░▀▀░░░░░░░▀▀░░░░░░█──────                                                     ────
──█░░░▀░░░░░░░▄▀▀▀▄░░░░▄░░░░▄▀▀▀▄░░▐▌─────                                                     ────
─█░░░░░░▄▄▄░░▐░░▄░░▌░░░░▀▄░▐░░▄░░▌░░█─────                                                     ────
▐▌░░░░▀▀░░░░▄░▀▄▄▄▀░░░░░░░▌░▀▄▄▄▀░░░▐▌────    --validate : Obtienes el href, title, status     ────
█░░░░░░░░░░░░▀▄▄▄░░░░░░░░▐░░░░░▄▄▄▀░░█────                 y message de cada link.             ────
█░░░░▄▀░░░░░░░▄▄░░░░░░▄▀░▐░░░▄▄░░░░░░█────                                                     ────
▐▌░░▀░░░░░░░▄▀░░░▐▀░░░░░░░▀▌░░░▀▄░░░░█────       --stats : Obtienes como resultado             ────
▐▌░░░▐░░░░░▐▌░░░░░▀█░░░░░░░▌░░░░█░░░░█────                 Total (total de links) y            ────
─█░░░░░░░░░░░░░░▄░░▀▀▄▄▄▄▀▀░▀▄░░░░░░░█────                 Unique (total de links únicos).     ────  
─▐▌░░░░░░░░░░░▄▀░░░░▄▄▄▄▄▄░░░░▌░░░░░░█────                                                     ────
──█░░░░░░░░░░▐░░░░▄▀░░░░░░▀▄░░▌░░░░░▐▌────    --validate --stats : Obtienes como resultado     ────              
──▐▌░░░░░░░░░▐░░░░▀░░░▀▀░░░▀░░░░░░░░█─────                         Total, Unique y Broken     ────
───█░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▐▌─────                         (total de links fail).      ────
───▐▌░░░░░░░░░▄███████▄░░░░▄████████▄─────                                                     ────
────▀▄████████████▀█████▄▄████████▀██─────                                                     ────
───▄██▀▄░░░░░███▀▄██████▀▀██████▀▄███─────                                                     ────
───▀▀───▀▀▀▀▀▀█████████▀▀▀▀█████████▀──────────────────────────────────────────────────────────────
───────────────────────────────────────────────────────────────────────────────────────────────────
─────────────█─────█─█──█─█───█────────────────────────────────────────────────────────────────────
─────────────█─────█─█──█─▀█─█▀────────────────────────────────────────────────────────────────────                                                                 
─────────────█─▄█▄─█─█▀▀█──▀█▀─────────────────────────────────────────────────────────────────────
─────────────██▀─▀██─█──█───█──────────────────────────────────────────────────────────────────────                                                                                           
`
const errorPath =`

███╗  ██╗ █████╗     ██╗  ██╗ █████╗ ██    ██╗    ██╗     ██╗███╗  ██╗██╗  ██╗ ██████╗
████╗ ██║██╔══██╗    ██║  ██║██╔══██╗╚██╗ ██╔╝    ██║     ██║████╗ ██║██║ ██╔╝██╔════╝
██╔██╗██║██║  ██║    ███████║███████║  ████╔╝     ██║     ██║██╔██╗██║█████═╝█████╗ 
██║╚████║██║  ██║    ██╔══██║██╔══██║  ╚██╔╝      ██║     ██║██║╚████║██╔═██╗  ╚═══██╗
██║ ╚███║╚█████╔╝    ██║  ██║██║  ██║   ██║       ███████╗██║██║ ╚███║██║ ╚██╗██████╔╝
╚═╝   ══╝ ╚════╝     ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚══════╝╚═╝╚═╝  ╚══╝╚═╝  ╚═╝╚═════╝ 
                    ░░░░░░░░▄▄▄▀▀▀▀▀▀▀▀▀▄▄▄░░░░░░░░░░░░
                    ░░░░░░▄▀░░░░░░░░░░░░░░░▀▀▄▄░░░░░░░░
                    ░░░░░▄▀░░░░░░░░░░░░░░░░░░░░▀▄░░░░░░
                    ░░░░▄▀░░░░░░░░░░░░░░░░░░░░░░░█░░░░░
                    ░░░░█░░░░░░░░░░░░░░░░░░░░░░░░░█░░░░
                    ░░░▐░░░░░░░░░░░░░░░░░░░░░░░░░░░█░░░
                    ░░░█░░░░▀▀█▄▄▄░░░▄▌░░░░░░░░░░░░▐░░░
                    ░░░▌░░░░░▌░██▀█▀▀░░░▄▄▄▄▄░░░░▌░▐░░░
                    ░░░▌░░░░░▀▄▄▄▀░░░░░░▌░▀███▄▄▀░░▐░░░
                    ░░░▌░░░░░░░░░░░░░░░░░▀▄▄▄▄▀░░░▄▌░░░
                    ░░░▐░░░░▐▀░░░░░░░░░░░░░░░░░░░▄▀░░░░
                    ░░░░█░░░▌░░▄▀▀▀▄▄▄░░░░░░░░░░▄▀░░░░░
                    ░░░░░█░░▀░░░░▄▄▄▄░▀▀▌░░▌░░░█░░░░░░░
                    ░░░░░░▀▄░░░░░░░░░▀░░░▄▀░░▄▀░░░░░░░░
                    ░░░░░░░░▀▄▄▄░░░░░░░░░▄▄▀▀░░░░░░░░░░
                    ░░░░░░░░░░░▐▀▀▀▀▀▀▀▀▀░░░░░░░░░░░░░░
                    ░░░░░░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░

`
const noExists=`

          ░░░░░░░▄▄▄▄▄▄░░░░░░░░░░░░░░░░░░░
          ░░░░░▄█████████▄▄░░░░░░░░▄▄░░░░░
          ░░░░███████████████▄▄░░░░▄██▄░░░
          ░░░▄█████████████████████████░░░
          ░▄██████████████████████████▀░░░
          ░███░░░░░░░░░░░░░░░░░░░█░░░░░░░░
          ░███░███████████████████░░░░░░░░
          ░███░░▀████───████────█▀░░░░░░░░
          ░███░░░▀▄▄▄▄▄▀░▀▄▄▄▄▄▀▀▀▄░░░░░░░
          ░░██░░░░░░░░░░░░░░░░░░░░░▀▄░░░░░
          ░░▄█░░░░░▄▀█▀▀▀▄▄▄░░░░░▄▀░░▀▄░░░
          ░█░░░░░▄▀──█───█──▀█▄▄░▀▀░░░░▀▄░
          ░▀▄▄░░█────█───█───█──▀▀▄░░▄▀▀▀░
          ░░░█░██▄▄▄▄█▄▄▄█▄▄▄█▄▄▄▄▄█▄▄▀░░░
          ░░░█░█████████████▄▄░░░░░░░░░░░░
          ░░░█░█████████████████████████▄░
          ░░░█░███████████████▀▀░░░░░░░░█░
          ░░░█░██████████▀▀░░░░░░░░░░░░░█░
          ░░░█░██████▀░░░░░░░░░░░░░░░░░░█░
          ░░░█░███▀░░░░░░░░░░░░░░░░░░░░░█░
          ░░░█░█▀░░░░░░░░░░░░░░░░░░░░░░░█░
          ░░░█░░░░░░░░░░░░░░▀▄░▀▄░░░░░░░█░
          ░░░█░░░░░░░░░░░░▄▄▄▀▄▄▀░░░░░░░█░
          ░░░█░░░░░░░░░░░░░░░░░░░░░░░░░░█░
          ░░░█░░░░░░░░░░░░░░░░░░░░░░░░░░█░
          ░░░█░░░░░░░░░░░░░░░░░░░░░░░░░░█░
          
█▄ █ █▀█   █▀▀ ▀▄▀ █ █▀ ▀█▀ █▀▀   █   ▄▀█   █▀█ █ █ ▀█▀ ▄▀█
█ ▀█ █▄█   ██▄ █ █ █ ▄█  █  ██▄   █▄▄ █▀█   █▀▄ █▄█  █  █▀█
`

module.exports={
  statsLinks,
  brokenLinks,
  helpMsg,
  errorPath,
  noExists

}
