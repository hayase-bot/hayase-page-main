import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { MdAddTask, MdAutoStories } from "react-icons/md";

function Main() {
  return (
    <div className='px-8 py-12 md:py-0 md:px-0'>
      {/* 본문 */}
      <div className="mx-auto w-full container py-8 xl:py-32 space-y-12 md:space-y-0 flex flex-col xl:flex-row items-center">
        <div className='flex flex-col w-full space-y-6 animate__animated animate__fadeIn animate__fast'>
          <div className="flex flex-col space-y-2 md:space-y-4 w-full justify-center overflow-y-hidden leading-normal tracking-normal">
            <h1 className="select-none font-bold text-3xl lg:text-4xl xl:text-5xl text-white opacity-80">
              It just works.
            </h1>
            <p className="select-none leading-normal font-semibold text-gray-500 text-base md:text-xl md:text-left">
              다른 말이 필요 있나요?<br />서버의 상태를 디스코드 채널에 실시간으로 갱신합니다.
            </p>
          </div>

          <div className="flex flex-col space-y-2 w-2/3 md:w-full md:p-0 md:block md:space-y-0 md:space-x-2">
            {/* <Button leftIcon={<MdAddTask />} paddingX='48px' paddingY='28px' size='lg' colorScheme='purple'> */}
            <Button
              as='a'
              href='/invite'
              leftIcon={<MdAddTask />}
              paddingX={{ base: '12px', md: '24px', lg: '36px' }}
              paddingY={{ base: '7px', md: '14px', lg: '21px' }}
              size={{ base: 'lg' }}
              colorScheme='purple'
            >
              서버에 초대하기
            </Button>
            {/* <Button leftIcon={<MdAutoStories />} paddingX='48px' paddingY='28px' size='lg' colorScheme='gray'> */}
            <Button
              as='a'
              href='/quickstart'
              // onClick={() => alert('준비중입니다.')}
              leftIcon={<MdAutoStories />}
              paddingX={{ base: '12px', md: '24px', lg: '36px' }}
              paddingY={{ base: '7px', md: '14px', lg: '21px' }}
              size={{ base: 'lg' }}
              colorScheme='gray'
            >
              가이드 읽어보기
            </Button>
          </div>
        </div>

        <div className="w-full py-4 overflow-hidden">
          {/* <img className="mx-auto w-full transform transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" src="/assets/images/discord0.png" alt="app" /> */}
          <Image className='animate__animated animate__fadeIn' src="/assets/images/static/main_banner.webp" alt="main_banner" width={1200} height={1200} priority />
        </div>
      </div>

    </div>
  )
}

export default Main;