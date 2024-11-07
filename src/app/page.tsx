import { Gift } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {

  const giftsItems = [
    {
      image:"/img/cansada.png",
      href:"https://www.icebrg.com.br/bateria",
      title:"Exausta"
    },
    {
      image:"/img/cinefila.png",
      href:"https://moonpix.com.br/paul-mescal-7mcbo",
      title:"Amante da sétima arte"
    },
    {
      image:"/img/aventureira.png",
      href:"https://a.co/d/30Dl82d",
      title:"Aventureira"
    },
    {
      image: "/img/marujo.png",
      href:"https://funniest.com.br/produtos/camiseta-lana-del-rey-mariners-apartment-complex/",
      title:"Desbravadoura dos sete mares"
    },
    {
      image: "/img/lagoa.png",
      href:"https://a.co/d/1dooKde",
      title:"Grande fã de grandes corpos de água"
    },
    {
      image: "/img/tatuada.png",
      href:"https://riotdesign.com.br/brinco-stud-andorinhas-old-school-prateado-660",
      title:"Tatuada, descolada, old school"
    }
  ]

  return (
    <>
      <header className="w-full h-14 bg-[#9b5de5] p-5">
       <Gift className="text-white"/>
      </header>

      <main className="w-full h-full bg-[#F15BB5] text-white pb-11">
      <section className="flex flex-col items-center pt-9">
        <div className="px-6 text-center">
          <h1 className="font-bold text-3xl">
            Que sorte a sua em me ter (rs) como sua amiga secreta!
          </h1>
          <h3 className="my-6">Um presente para cada Tatiana. Clique na foto e descubra:</h3>
        </div>
      
        <Carousel className="w-[200px] md:w-[400px] lg:w-[600px]">
        <CarouselContent >
        {giftsItems.map((item, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="pt-6">
              <a href={item.href} target="_blank" >
                <Image src={item.image} alt="" width={600} height={600}/>
              </a>
              
              </CardContent>
              <CardFooter className="w-full flex justify-center text-xl"><p>{item.title}</p></CardFooter>
            </Card>
          </CarouselItem>
        )) }
        </CarouselContent>
        <CarouselNext className="bg-transparent"/>
        <CarouselPrevious className="bg-transparent"/>
        </Carousel>
      </section>

      </main>
    
      
    </>
  );
}
