/* react utlis */
import React from 'react'

/* source */
import { CardProvider } from './source/card'
import { SentencesProvider } from './source/middleText'

/* components */
import Navbar, { LogoSmall } from './component/Navbar'
import Button from './component/Button'
import Background from './component/Background'
import Text from './component/Text'
import Logo from './component/Logo'
import CardWrapper from './component/Card'
import CardViewer from './component/CardViewer'
import Sentences from './component/Sentences'
import CardGridWrapper from './component/CardGrid'

const Social = ({ className }) => {
  return (
    <div className={'flex space-x-2 text-dark ' + className}>
      <a href='http://www.facebook.com'>
        <svg
          width='25'
          height='25'
          viewBox='0 0 25 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M25 12.5C25 5.5957 19.4043 0 12.5 0C5.5957 0 0 5.5957 0 12.5C0 19.4043 5.5957 25 12.5 25C12.5732 25 12.6465 25 12.7197 24.9951V15.2686H10.0342V12.1387H12.7197V9.83398C12.7197 7.16309 14.3506 5.70801 16.7334 5.70801C17.876 5.70801 18.8574 5.79102 19.1406 5.83008V8.62305H17.5C16.2061 8.62305 15.9521 9.23828 15.9521 10.1416V12.1338H19.0527L18.6475 15.2637H15.9521V24.5166C21.1768 23.0176 25 18.208 25 12.5V12.5Z'
            fill='#362A2A'
          />
        </svg>
      </a>
      <a href='http://www.instagram.com'>
        <svg
          width='25'
          height='25'
          viewBox='0 0 25 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M14.8926 12.5C14.8926 13.8214 13.8214 14.8926 12.5 14.8926C11.1786 14.8926 10.1074 13.8214 10.1074 12.5C10.1074 11.1786 11.1786 10.1074 12.5 10.1074C13.8214 10.1074 14.8926 11.1786 14.8926 12.5Z'
            fill='#362A2A'
          />
          <path
            d='M18.0954 8.26691C17.9804 7.95525 17.7969 7.67316 17.5585 7.4416C17.327 7.20319 17.0451 7.0197 16.7332 6.90469C16.4803 6.80646 16.1003 6.68954 15.4005 6.65768C14.6435 6.62316 14.4165 6.61572 12.5 6.61572C10.5833 6.61572 10.3564 6.62297 9.59953 6.65749C8.89972 6.68954 8.51958 6.80646 8.26686 6.90469C7.95501 7.0197 7.67291 7.20319 7.44155 7.4416C7.20313 7.67316 7.01965 7.95506 6.90444 8.26691C6.80621 8.51983 6.68929 8.89996 6.65744 9.59977C6.62292 10.3566 6.61548 10.5836 6.61548 12.5003C6.61548 14.4168 6.62292 14.6438 6.65744 15.4008C6.68929 16.1006 6.80621 16.4805 6.90444 16.7334C7.01965 17.0453 7.20294 17.3272 7.44136 17.5588C7.67291 17.7972 7.95482 17.9807 8.26667 18.0957C8.51958 18.1941 8.89972 18.311 9.59953 18.3429C10.3564 18.3774 10.5831 18.3846 12.4998 18.3846C14.4167 18.3846 14.6437 18.3774 15.4003 18.3429C16.1002 18.311 16.4803 18.1941 16.7332 18.0957C17.3592 17.8542 17.854 17.3594 18.0954 16.7334C18.1937 16.4805 18.3106 16.1006 18.3426 15.4008C18.3771 14.6438 18.3844 14.4168 18.3844 12.5003C18.3844 10.5836 18.3771 10.3566 18.3426 9.59977C18.3108 8.89996 18.1938 8.51983 18.0954 8.26691V8.26691ZM12.5 16.1858C10.4643 16.1858 8.81408 14.5358 8.81408 12.5001C8.81408 10.4644 10.4643 8.81432 12.5 8.81432C14.5356 8.81432 16.1858 10.4644 16.1858 12.5001C16.1858 14.5358 14.5356 16.1858 12.5 16.1858ZM16.3315 9.52996C15.8558 9.52996 15.4702 9.14429 15.4702 8.6686C15.4702 8.19291 15.8558 7.80724 16.3315 7.80724C16.8072 7.80724 17.1929 8.19291 17.1929 8.6686C17.1927 9.14429 16.8072 9.52996 16.3315 9.52996Z'
            fill='#362A2A'
          />
          <path
            d='M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM19.6344 15.4593C19.5997 16.2233 19.4782 16.745 19.3008 17.2016C18.928 18.1658 18.1658 18.928 17.2016 19.3008C16.7452 19.4782 16.2233 19.5995 15.4594 19.6344C14.694 19.6693 14.4495 19.6777 12.5002 19.6777C10.5507 19.6777 10.3064 19.6693 9.54075 19.6344C8.77686 19.5995 8.255 19.4782 7.79858 19.3008C7.31945 19.1206 6.88572 18.8381 6.52714 18.4729C6.16207 18.1145 5.87959 17.6805 5.69935 17.2016C5.52197 16.7452 5.40047 16.2233 5.36575 15.4594C5.33047 14.6938 5.32227 14.4493 5.32227 12.5C5.32227 10.5507 5.33047 10.3062 5.36556 9.54075C5.40028 8.77666 5.52158 8.255 5.69897 7.79839C5.87921 7.31945 6.16188 6.88553 6.52714 6.52714C6.88553 6.16188 7.31945 5.8794 7.79839 5.69916C8.255 5.52177 8.77666 5.40047 9.54075 5.36556C10.3062 5.33066 10.5507 5.32227 12.5 5.32227C14.4493 5.32227 14.6938 5.33066 15.4593 5.36575C16.2233 5.40047 16.745 5.52177 17.2016 5.69897C17.6805 5.87921 18.1145 6.16188 18.4731 6.52714C18.8381 6.88572 19.1208 7.31945 19.3008 7.79839C19.4784 8.255 19.5997 8.77666 19.6346 9.54075C19.6695 10.3062 19.6777 10.5507 19.6777 12.5C19.6777 14.4493 19.6695 14.6938 19.6344 15.4593V15.4593Z'
            fill='#362A2A'
          />
        </svg>
      </a>
      <a href='http://www.twitter.com'>
        <svg
          width='25'
          height='25'
          viewBox='0 0 25 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM18.2074 9.74617C18.2129 9.86919 18.2156 9.99279 18.2156 10.117C18.2156 13.9082 15.3297 18.28 10.0523 18.2802H10.0525H10.0523C8.43201 18.2802 6.92425 17.8053 5.65453 16.9914C5.87902 17.0179 6.10752 17.0311 6.33888 17.0311C7.68318 17.0311 8.92029 16.5726 9.90238 15.803C8.64639 15.7797 7.58743 14.9502 7.22198 13.8102C7.39689 13.8437 7.57675 13.862 7.76119 13.862C8.02307 13.862 8.27675 13.8268 8.51784 13.7609C7.20501 13.4981 6.21605 12.3379 6.21605 10.9486C6.21605 10.9356 6.21605 10.924 6.21643 10.9119C6.60305 11.1269 7.04517 11.2562 7.51591 11.2707C6.74553 10.7567 6.23913 9.87797 6.23913 8.88252C6.23913 8.35686 6.38123 7.86438 6.62766 7.44038C8.04253 9.17645 10.157 10.3182 12.5416 10.4382C12.4924 10.228 12.467 10.009 12.467 9.78394C12.467 8.20007 13.752 6.91509 15.3364 6.91509C16.1617 6.91509 16.9071 7.26395 17.4307 7.82166C18.0843 7.69272 18.6981 7.45392 19.2526 7.12528C19.038 7.79495 18.5833 8.35686 17.9909 8.7122C18.5713 8.64277 19.1244 8.48885 19.6384 8.26035C19.2545 8.83579 18.7675 9.34124 18.2074 9.74617V9.74617Z'
            fill='#362A2A'
          />
        </svg>
      </a>
    </div>
  )
}

const App = () => {
  return (
    <div id='app' className='bg-dark relative overflow-x-hidden'>
      <Background position='-translate-x-48 z-20 translate-y-80 left-0' />
      <Background position='translate-x-36 translate-y-40 right-0' />
      <header className='container mx-auto relative '>
        <Navbar />
        <Logo />
        <Text />
        <Button title={'BECOME MEMBER'} className={'mx-auto font-bold'} />
      </header>
      <main className={'container mx-auto relative my-20 w-full px-11 '}>
        <CardProvider>
          <Background position='translate-x-1/3 -translate-y-6 w-full' />
          <section
            id='cards'
            className={'grid grid-cols-2 gap-9 relative z-10'}
          >
            <CardWrapper />
            <CardViewer />
          </section>
        </CardProvider>
        <SentencesProvider>
          <Sentences />
        </SentencesProvider>
        <section className={'w-full'}>
          <div className={'text-center text-light-200'}>
            <h1 className={'font-bold text-4xl mb-2'}>FAVORITE PLAN</h1>
            <span className={'text-2xl'}>Choose Your Style</span>
            <div className={' w-1/2 mx-auto mt-6'}>
              <p className={'font-quicksand text-xl font-medium'}>
                Decide what plan you want to your life and enjoy it. Full
                support from our team. We always ready to give you the best
                interconnection experience with our services.
              </p>
            </div>
          </div>
          <CardProvider>
            <CardGridWrapper />
          </CardProvider>
          <div className={'flex text-light-200 space-x-5 mx-auto w-2/5'}>
            <div className={'text-right flex flex-col justify-between'}>
              <span className={'font-bold text-4xl font-raleway '}>
                FULL SUPPORT
              </span>
              <Button
                title={'CONTACT US'}
                icon={'arrow_right_alt'}
                className={'font-bold w-max'}
              />
            </div>
            <p className={'text-lg font-quicksand font-medium'}>
              Decide what plan you want to your life and enjoy it. Full support
              from our team. We always ready to give you the best
              interconnection experience with our services.
            </p>
          </div>
        </section>
      </main>
      <footer className={'mt-24 container mx-auto mb-10'}>
        <div className={'grid grid-cols-3 bg-light-100 rounded-full p-2'}>
          <Social className={'my-auto ml-4'} />
          <div className={'mx-auto my-auto'}>
            <LogoSmall />
          </div>
          <Button
            title={'BACK TO TOP'}
            icon={'keyboard_capslock'}
            className={'w-max ml-auto '}
            bg={'bg-dark'}
          />
        </div>
      </footer>
    </div>
  )
}

export default App
