import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DownloadMac from '../components/DownloadMac';
import DonwloadWin from '../components/DonwloadWin';
// import Faq from '../components/Faq';
import Image from 'next/image';
import Link from 'next/link';
const activeuser = [
  { cont: '15M', name: 'Active Users' },
  { cont: '75%', name: 'Committed Users' },
  { cont: '12+', name: 'Years Experience' },
  { cont: '12M', name: 'Total  Downloads' }
];
export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <Faq /> */}
      <main>
        {/* Banner Section Start Here */}
        <section className='relative banner-sec'>
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="mt-12 flex flex-col items-center relative">
              <div className='mb-7'>
                <Image
                  src="/images/banner-icon.svg"
                  alt="shot icon"
                  width={55} height={55}
                />
              </div>
              <h1 className="z-10 font-bold text-6xl text-black text-center">Gmail Client for <br/> Mac/Desktop</h1>
              <p className="z-10 text-base text-black font-medium text-center mt-7 mb-7">
                Fast & Quick access of Gmail, with native UI & feature, <br/>directly from the Desktop
              </p>
              <div className='z-10 flex justify-center mb-7'>
                <Link href="/">
                  <a className="banner-btns px-8 py-2 font-medium rounded-full text-white bg-orange hover:bg-white hover:text-orange border-2 border-orange duration-300">
                    <span className='flex items-center'>
                      <svg className='apple-svg me-px-2' width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6384 9.23763C11.6384 7.06834 13.4443 6.01865 13.5138 5.94872C12.4719 4.47915 10.9438 4.26921 10.3881 4.1992C9.06846 4.05927 7.7487 4.96903 7.12357 4.96903C6.42902 4.96903 5.38713 4.1992 4.27575 4.1992C2.81717 4.1992 1.49741 5.03896 0.733378 6.36859C-0.794685 9.0277 0.316621 12.9465 1.77527 15.1158C2.5393 16.1655 3.37282 17.3552 4.48413 17.2852C5.5955 17.2152 6.01226 16.5854 7.33195 16.5854C8.6517 16.5854 8.99898 17.2852 10.1798 17.2852C11.3606 17.2852 12.1246 16.2355 12.8192 15.1858C13.6527 13.9962 14 12.8066 14 12.7366C13.9305 12.6666 11.6384 11.8269 11.6384 9.23763Z" fill="white"/>
                        <path d="M9.48368 2.79913C10.0393 2.02938 10.4561 1.04969 10.3866 0C9.55309 0.0700043 8.44178 0.559812 7.88613 1.32956C7.33048 1.95938 6.84424 3.00907 6.98314 3.98876C7.88613 4.05876 8.85854 3.49895 9.48368 2.79913Z" fill="white"/>
                      </svg>
                      Download Now For Mac
                    </span>
                  </a>
                </Link>
              </div>
              <div className='download-btn z-10 flex flex-wrap md:items-center justify-center sm:gap-x-2 gap-y-2 md:mb-16 mb-8'>
                <button>
                    <DownloadMac  />
                </button>
                <button>
                    <DonwloadWin />
                </button>
              </div>
              <div className='absolute top-40 z-0'>
                <Image class="object-cover overflow-auto" width={870} height={870} src="/images/banner-shadow.png" />
              </div>
              <div>
                <Image class="object-cover" width={1000} height={575} src="/images/desktop-preview.svg" />
              </div>
            </div>
          </div>
        </section>
        {/* Banner Section End Here */}
        {/* Active Users Start Here */}
        <section className='active-user-sec py-16 bg-orange'>
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className='flex flex-wrap'>
              {activeuser.map(({ cont, name }) => (
                <div class="user-active border border-white border-t-0 border-l-2 border-r-0 border-b-0 padding-l-12 pl-8">   
                    <h2 className='text-white font-bold text-6xl'>
                      {cont}
                      <span className='block font-medium text-lg'>{name}</span>
                    </h2>
                </div>
              ))}
              </div>
          </div>
        </section>
        {/* Active Users End Here */}
        {/* Productivity Start Here */}
        <section className='productivity-sec pt-28 pb-20'>
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-5xl text-black text-center">Welcome to GSpeedy, where productivity <br/> meets simplicity.</h2>
              <p className="text-base text-black font-medium text-center mt-7 mb-7">
                A comprehensive solution for organizing and prioritizing your tasks, to <br/> help you boost your productivity and achieve your goals with ease.
              </p> 
            </div>
          </div>
          <div className='sprints-container mt-16 mb-20'>
            <div className='sprints-row flex flex-wrap items-center'>
              <div className='sprints-left sprints-col'>
                <div className='max-w-md'>
                  <h6 className='text-xs font-bold text-orange mb-3'>Active sprints</h6>
                  <h3 className="font-bold text-5xl leading-tight text-black">Stay Agile <br/> Active Sprints</h3>
                  <p className="text-base text-black font-medium mt-5 mb-12">
                    Dive into the heart of productivity with our Active Sprints feature. Embrace the agile approach to project management by breaking your tasks into manageable chunks
                  </p>
                  <Link href="/test">
                    <a className="px-12 py-3 bg-black hover:bg-white hover:text-black border-2 border-black text-white rounded-full font-medium text-sm duration-300">
                      <span>Get Started</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className='sprints-right sprints-col'>
                <figure>
                  <Image width={1158} height={745} src="/images/active-sprints.png" />
                </figure>
              </div>
            </div>
          </div>
          <div className='access-login-container'>
            <div className='sprints-row flex flex-wrap items-center'>
              <div className='sprints-right sprints-col'>
                <figure>
                  <Image width={1158} height={745} src="/images/access-login.png" />
                </figure>
              </div>
              <div className='effortless-left sprints-col'>
                <div className='max-w-md'>
                  <h6 className='text-xs font-bold text-orange mb-3'>Active sprints</h6>
                  <h3 className="font-bold text-5xl leading-tight text-black">Effortless Access <br/> with Easy Login</h3>
                  <p className="text-base text-black font-medium mt-5 mb-12">
                    We understand the importance of a seamless login experience, which is why we've streamlined the process for you. With Easy Login, you can forget the frustration of forgotten passwords and time-consuming authentication steps.
                  </p>
                  <Link href="/">
                    <a className="px-12 py-3 bg-black hover:bg-white hover:text-black border-2 border-black text-white rounded-full font-medium text-sm duration-300">
                      <span>Get Started</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Productivity End Here */}
        <section className='py-16 bg-orange'>
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="fadadr">
              <div class="grid grid-cols-2 place-items-center gap-32">
                <div class="...">
                  <h6 className='text-xs font-bold text-white mb-3'>Private & Secure</h6>
                  <h3 className="font-bold text-5xl leading-tight text-white">Built for security and <br/> scalable solutions</h3>
                  <p className="text-base text-white font-medium mt-5 mb-12">
                    It is important to tell the users that app is private & secure and does not access any data of their emails.
                  </p>
                  <Link href="/">
                    <a className="px-12 py-3 bg-white hover:bg-white hover:text-black border-orange border-2 border-black text-orange rounded-full font-medium text-sm duration-300">
                      <span>Get Started</span>
                    </a>
                  </Link>
                </div>
                <div class="security">
                  <figure>
                    <Image width={568} height={522} src="/images/security.png" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Experience Start Here */}
        <section className='experience-sec pt-28 pb-20'>
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="flex flex-col items-center">
              <h6 className='text-xs font-bold text-orange mb-3'>How it looks & works</h6>
              <h2 className="font-bold text-5xl leading-tight text-black text-center">Experience the power of <br/> our app today</h2>
              <p className="text-base text-black font-medium mt-7 mb-10 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Suspendisse varius enim in eros elementum tristique.
              </p> 
              <div className='download-btn flex items-center gap-x-2'>
                <button>
                      <DownloadMac  />
                  </button>
                  <button>
                      <DonwloadWin />
                  </button>
              </div>
            </div>
          </div>
        </section>
        <section className='app-images-sec pb-28'>
          <figure>
              <img width={'100%'} height={'100%'} src="/images/apps.png" />
          </figure>
        </section>
        <section className='faq-sec'>
          <div className='container mx-auto'>
            <div className='max-w-8xl bg-orange rounded-3xl py-28'>
              <div className="max-w-7xl mx-auto px-8 lg:px-12">
                <div className="flex flex-col items-center">
                  <h2 className="font-bold text-5xl text-white leading-tight text-center">Frequently asked questions</h2>
                  <p className="text-base text-white font-medium text-center mt-7 mb-7">
                    Lorem ipsum dolor sit amet,  consectetur adipisicing elit. Laborum obcaecati dignissimos <br /> quae quo ad  iste ipsum officiis deleniti asperiores sit.
                  </p> 
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='features-GSpeedy-sec py-28'>
          <div className='container mx-auto'>
            <div className='max-w-8xl'>
              <div className="max-w-8xl mx-auto px-8 lg:px-12">
                <div className="flex flex-col items-center">
                  <h6 className='text-xs font-bold text-orange mb-3'>Features</h6>
                  <h2 className="font-bold text-5xl leading-tight text-black text-center">Elevate Your Features with GSpeedy</h2>
                  <p className="text-base text-black font-medium text-center mt-7 mb-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />  Suspendisse varius enim in eros elementum tristique.
                  </p> 
                </div>
                <figure>
                  <img width={'100%'} height={'100%'} src="/images/features-GSpeedy.png" />
                </figure>
                
              </div>
            </div>
          </div>
        </section>
        {/* Faq Section */}
        <section className='faq-sec bg-orange py-28'>
          <div className='max-w-7xl mx-auto'>
            <div className="max-w-7xl mx-auto px-8 lg:px-12">
              <div className="flex flex-col items-center">
                <h2 className="font-bold text-5xl text-white leading-tight text-center">Testimonials</h2>
                <p className="text-base text-white font-medium text-center mt-7 mb-7">
                Lorem ipsum dolor sit amet,  consectetur adipisicing elit. Laborum obcaecati dignissimos quae<br /> quo ad  iste ipsum officiis deleniti asperiores sit.
                </p> 
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-8 lg:px-12">
              <div class="md:flex">
              <div class="md:w-1/3 px-4">
                <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-2xl p-7 flex flex-col justify-between leading-normal">
                  <div class="mb-8">
                  <Image width={84} height={15} src="/images/rating.png" />
                    <div class="text-orange font-bold text-xl mb-4 mt-6">Excellent service & support!!</div>
                    <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nam id  facilis, provident doloremque placeat eveniet molestias laboriosam.  Optio, esse.</p>
                  </div>
                  <div class="flex items-center">
                    <img class="w-15 h-15 rounded-full mr-4" src="/images/user-img1.png" alt="Avatar of Jonathan Reinink" />
                    <div class="text-sm">
                      <p class="text-black font-bold text-sm leading-none">Jonathan Reinink</p>
                      <p class="text-black font-medium text-sm leading-none">CEO</p>
                    </div>
                  </div>
                </div>
                </div>
              <div class="md:w-1/3 px-4">
                <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-2xl p-7 flex flex-col justify-between leading-normal">
                  <div class="mb-8">
                  <Image width={84} height={15} src="/images/rating.png" />
                    <div class="text-orange font-bold text-xl mb-4 mt-6">Nice work! Keep it up</div>
                    <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nam id  facilis, provident doloremque placeat eveniet molestias laboriosam.  Optio, esse.</p>
                  </div>
                  <div class="flex items-center">
                    <img class="w-15 h-15 rounded-full mr-4" src="/images/user-img2.png" alt="Avatar of Jonathan Reinink" />
                    <div class="text-sm">
                      <p class="text-black font-bold text-sm leading-none">Jonathan Reinink</p>
                      <p class="text-black font-medium text-sm leading-none">CEO</p>
                    </div>
                  </div>
                </div>
                </div>
              <div class="md:w-1/3 px-4">
                <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-2xl p-7 flex flex-col justify-between leading-normal">
                  <div class="mb-8">
                    <Image width={84} height={15} src="/images/rating.png" />
                    <div class="text-orange font-bold text-xl mb-4 mt-6">Great support!!</div>
                    <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nam id  facilis, provident doloremque placeat eveniet molestias laboriosam.  Optio, esse.</p>
                  </div>
                  <div class="flex items-center">
                    <img class="w-15 h-15 rounded-full mr-4" src="/images/user-img3.png" alt="Avatar of Jonathan Reinink" />
                    <div class="text-sm">
                      <p class="text-black font-bold text-sm leading-none">Junaid Hasan</p>
                      <p class="text-black font-medium text-sm leading-none">CEO</p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Faq Section */}
        {/* Footer  */}
        <Footer />
      </main>
    </div>
  );
}
