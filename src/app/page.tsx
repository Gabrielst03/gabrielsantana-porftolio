'use client';

import { Tech } from '@/components/Techs'

import { BsWhatsapp } from 'react-icons/bs'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { Slide, } from "react-awesome-reveal";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col px-10 lg:px-56">
      <div className='absolute z-99 w-[450px] h-[450px] md:ml-[550px] bg-sky-500 rounded-full filter blur-[260px]'>
      </div>

      <header className='flex justify-between py-10'>
        <div className=""></div>

        <a href="https://wa.me/5571991032401" target='_blank' className="flex items-center hover:bg-emerald-500 cursor-pointer hover:scale-105 transition-colors gap-2 px-6 py-2 rounded-lg border font-medium text-lg border-emerald-500"><BsWhatsapp /> Fale Comigo </a>

      </header>

      <div className="flex flex-col py-48">
        <div className="flex gap-48 w-full">
          <Slide duration={2000}>
            <div className="flex flex-col gap-2">

              <p className='text-sky-400 text-lg'>Seja Bem-vindo(a).</p>

              <h1 className='abosulote z-99 text-4xl font-bold text-white'>Me chamo Gabriel, sou um Desenvolvedor
                <br></br> Full-Stack Jr.
              </h1>


              <p className='text-gray-400 font-medium'>
                Tenho 20 anos, sou apaixonado por Front-end, utilizo a Stack MERN <br></br>para desenvolver meus projetos, sou estudante de Engenharia de Software e motivado a aprender.
              </p>



              <button className='flex items-center gap-4 justify-center w-80 mt-8 font-semibold px-3 py-4 rounded-lg text-black bg-gradient-to-l from-sky-400 to-teal-400 hover:from-sky-300 hover:to-teal-300 duration-300  '>
                <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className='text-black '>
                  <path d="M12.48 10.16C13.376 10.16 14.096 9.44 14.096 8.544C14.096 7.648 13.376 6.928 12.48 6.928C11.584 6.928 10.864 7.648 10.864 8.544C10.864 9.44 11.584 10.16 12.48 10.16Z" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.728 13.68C15.728 11.952 14.272 10.704 12.48 10.704C10.688 10.704 9.23201 11.952 9.23201 13.68V14.496C9.23201 14.64 9.29601 14.784 9.39201 14.88C9.48801 14.976 9.63201 15.04 9.77601 15.04H15.184C15.328 15.04 15.472 14.976 15.568 14.88C15.664 14.784 15.728 14.64 15.728 14.496V13.68ZM9.20001 18.4C9.20001 18.0817 9.32644 17.7765 9.55148 17.5515C9.77653 17.3264 10.0818 17.2 10.4 17.2H21.6C21.9183 17.2 22.2235 17.3264 22.4485 17.5515C22.6736 17.7765 22.8 18.0817 22.8 18.4C22.8 18.7183 22.6736 19.0235 22.4485 19.2485C22.2235 19.4736 21.9183 19.6 21.6 19.6H10.4C10.0818 19.6 9.77653 19.4736 9.55148 19.2485C9.32644 19.0235 9.20001 18.7183 9.20001 18.4ZM9.20001 23.2C9.20001 22.8817 9.32644 22.5765 9.55148 22.3515C9.77653 22.1264 10.0818 22 10.4 22H21.6C21.9183 22 22.2235 22.1264 22.4485 22.3515C22.6736 22.5765 22.8 22.8817 22.8 23.2C22.8 23.5183 22.6736 23.8235 22.4485 24.0485C22.2235 24.2736 21.9183 24.4 21.6 24.4H10.4C10.0818 24.4 9.77653 24.2736 9.55148 24.0485C9.32644 23.8235 9.20001 23.5183 9.20001 23.2Z" fill="black" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C4 2.2368 5.4368 0.800003 7.2 0.800003H17.904C18.8032 0.800003 19.6512 1.1808 20.248 1.8096L20.2576 1.8208L27.1568 9.344C27.7312 9.9568 28 10.7584 28 11.52V28C28 29.7632 26.5632 31.2 24.8 31.2H7.2C5.4368 31.2 4 29.7632 4 28V4ZM17.9024 4H7.2V28H24.8V11.5072L17.9264 4.0112L17.9216 4.0096C17.9158 4.00537 17.9093 4.00213 17.9024 4Z" fill="black" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.904 0.800003C18.3284 0.800003 18.7353 0.968574 19.0354 1.26863C19.3354 1.56869 19.504 1.97566 19.504 2.4V9.92H26.4C26.6101 9.92 26.8182 9.96139 27.0123 10.0418C27.2064 10.1222 27.3828 10.2401 27.5314 10.3886C27.68 10.5372 27.7978 10.7136 27.8782 10.9077C27.9586 11.1018 28 11.3099 28 11.52C28 11.7301 27.9586 11.9382 27.8782 12.1323C27.7978 12.3264 27.68 12.5028 27.5314 12.6514C27.3828 12.7999 27.2064 12.9178 27.0123 12.9982C26.8182 13.0786 26.6101 13.12 26.4 13.12H17.904C17.4797 13.12 17.0727 12.9514 16.7726 12.6514C16.4726 12.3513 16.304 11.9443 16.304 11.52V2.4C16.304 1.97566 16.4726 1.56869 16.7726 1.26863C17.0727 0.968574 17.4797 0.800003 17.904 0.800003Z" fill="black" />
                </svg>

                Meu Currículo
              </button>
            </div>
          </Slide>

          <Slide duration={2000} direction='up'>
            <img src="./main.png" className='hidden lg:flex -mt-20 animate-floating' alt="" />
          </Slide>

        </div>

        <section className="flex flex-col py-56 gap-3 w-full">
          <h1 className='text-3xl font-bold mb-4'>Um pouco sobre mim</h1>

          <div className="flex flex-col gap-4 w-full">
            <p className='text-gray-400 font-medium'>
              Olá a todos! Meu nome é Gabriel, sou natural de Cruz das Almas-BA e fui criado em São Felipe-BA, um lugar maravilhoso, mas sempre tive uma mente inquieta e curiosa, buscando expandir meus horizontes e alcançar áreas maiores e mais diversas.
            </p>
            <p className='text-gray-400 font-medium'>
              Atualmente, estou estudando Engenharia de Software na Estácio, um curso que me permite unir minha paixão pela tecnologia com meu desejo de criar soluções inovadoras para problemas do mundo real.          </p>
            <p className='text-gray-400 font-medium'>
              Desde cedo, tenho interesse em programação e desenvolvimento de software, e comecei a estudar programação aos 14 anos. Sou especialmente apaixonado pelo Front-End, mas também tenho habilidades para desenvolver aplicações Full-Stack usando a Stack MERN (Mongo, Express, React e Node).          </p>
            <p className='text-gray-400 font-medium'>
              Com minha formação técnica em Manutenção e Suporte em Informática e minha atual graduação em Engenharia de Software, sinto-me pronto para enfrentar os desafios e oportunidades que a tecnologia e o mercado de trabalho têm a oferecer. Estou animado para compartilhar meus conhecimentos e trabalhar em projetos que possam fazer a diferença no mundo!          </p>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h1 className='text-2xl md:text-3xl font-bold mb-4'>Tecnologias que domino e que tenho habilidades<span className='text-sky-500'>.</span></h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-center">
            <Tech
              title='HTML5'
              imageUrl='/html.png'
            />

            <Tech
              title='React.js'
              imageUrl='/react.png'
            />

            <Tech
              title='CSS3'
              imageUrl='/css.png'
            />

            <Tech
              title='Node.js'
              imageUrl='/nodejs.png'
            />

            <Tech
              title='Javascript'
              imageUrl='/js.png'
            />

            <Tech
              title='TailwindCss'
              imageUrl='/tailwind.png'
            />



          </div>

        </section>

        <section className="flex flex-col gap-3 py-64">
          <h1 className='text-3xl font-bold mb-4'>Projetos Pessoais<span className='text-sky-500'>.</span></h1>



          <div className="flex items-center gap-4">
            <a href="https://github.com/gabrielst03" target='_blank' className='flex items-center text-lg font-bold gap-3 px-6 py-3 border border-white rounded-lg hover:bg-white/10'>
              <AiFillGithub size={32} />
              Ver GitHub
            </a>

            <a href="https://www.linkedin.com/in/gabrielst03?_l=pt_BR" target='_blank' className='flex items-center text-lg font-bold gap-3 px-6 py-3 border border-white rounded-lg hover:bg-white/10'>
              <AiFillLinkedin size={32} />
              Ver LinkedIn
            </a>
          </div>

          <Carousel>
         <div>
            <img src="https://user-images.githubusercontent.com/79764014/232274457-a3b792f8-e4ce-4e3e-a626-e2c48c3c6ed0.png" className='w-full h-full overflow-hidden' alt="" />
            <p className='flex items-center justify-start mt-4 text-lg'>Spotify Clone</p>
            <p className='flex items-center justify-start text-gray-500'>Next.js, Typescript e TailwindCss</p>
         </div>

         <div>
            <img src="https://user-images.githubusercontent.com/79764014/212448936-77e82106-4a14-4a2f-895f-29225ffa1a5c.png" className='w-full h-full overflow-hidden' alt="" />
            <p className='flex items-center justify-start mt-4 text-lg'>QRCode Responsive Page Challenge</p>
            <p className='flex items-center justify-start text-gray-500'>HTML5 e CSS3</p>
         </div>

         <div>
            <img src="./gbfinder.png" className='w-full h-full overflow-hidden' alt="" />
            <p className='flex items-center justify-start mt-4 text-lg'>GitHub Finder</p>
            <p className='flex items-center justify-start text-gray-500'>React.js (Vite-App), TailwindCss, Consumo da API do Github.</p>
         </div>

         <div>
            <img src="./dropmeta.png" className='w-full h-full overflow-hidden' alt="" />
            <p className='flex items-center justify-start mt-4 text-lg'>Lading Page para Plataforma de Cursos</p>
            <p className='flex items-center justify-start text-gray-500'>Next.js, Typescript e TailwindCss aplicando o Mobile-First</p>
         </div>

         <div>
            <img src="./clima.png" className='w-full h-full overflow-hidden' alt="" />
            <p className='flex items-center justify-start mt-4 text-lg'>Aplicativo de Clima</p>
            <p className='flex items-center justify-start text-gray-500'>React Native, Styled Components e API REST</p>
         </div>

         <div>
            <img src="./picpay.png" className='w-full h-full overflow-hidden' alt="" />
            <p className='flex items-center justify-start mt-4 text-lg'>Aplicativo Bancário (PicPay Clone)</p>
            <p className='flex items-center justify-start text-gray-500'>React Native e Styled Components</p>
         </div>
        

          </Carousel>


      
      


        </section>

      </div>




    </main>
    
    <footer className='flex items-center justify-center gap-56 border-t py-12 border-y-zinc-800 w-full h-full -mt-56'>
      <div className='flex flex-col items-center'>
        <img src="/logo.png" alt="" className='w-44' />
        <div className="flex items-center justify-center gap-1 mt-3">
          <a href="https://www.instagram.com/gbsaantana/" target='_blank'>
            <AiFillInstagram size={32}/>
          </a>

          <a href="https://www.linkedin.com/in/gabrielst03/" target='_blank'>
            <AiFillLinkedin size={32}/>
          </a>

          <a href="https://github.com/Gabrielst03/" target='_blank'>
            <AiFillGithub size={32}/>
          </a>
        </div>
      </div>

      <div className='flex flex-col'>
        <h1 className='text-lg'>Contatos</h1>
        <p className='text-sm text-gray-500'>santanag311@gmail.com</p>
        <p className='text-sm text-gray-500'>+55 (71) 9 9103-2401</p>
        <p className='text-sm text-gray-500'>Salvador, BA, Brasil</p>

      </div>

    </footer>

    </>
  )
}
