import Particles from "react-tsparticles"

export default function ParticleBackground(){

return(

<Particles

options={{

background:{color:"transparent"},

particles:{
number:{value:60},
size:{value:2},
move:{speed:0.5},
opacity:{value:0.4},
links:{
enable:true,
distance:120,
opacity:0.3
}
}

}}

/>

)

}