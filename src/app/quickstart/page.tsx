import Image from "next/image";

function Quickstart() {
  return (
    <div className='container mx-auto flex flex-col space-y-4 py-12 select-none text-white max-w-[768px]'>
      <h1 className='text-4xl font-bold'>빠른 시작 가이드</h1>
      <div className='flex flex-col space-y-24'>
        <div className='flex space-x-8 items-center'>
          <Image
            className='rounded-lg'
            src='/assets/images/dynamic/1_channel_reg.gif'
            alt='channel_reg'
            width={400}
            height={383}
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8WA8AAgcBQhiUs9EAAAAASUVORK5CYII='
            placeholder='blur'
          />
          <div className='space-y-2'>
            <h2 className='text-4xl font-bold'>채널 등록하기</h2>
            <div className="rounded-md bg-gray-500/30 px-40 py-[1px]"></div>
            <p className='text-gray-400 text-lg font-bold leading-5'>
              <span className='text-white'>/채널설정</span> 명령어로 봇이 서버 정보를 갱신할 채널을 지정해 줘야 해요, 이 때 권한 설정에 유의하여 주세요.
            </p>
          </div>
        </div>

        <div className='flex space-x-8 items-center'>
          <div className='space-y-2'>
            <h2 className='text-4xl font-bold'>서버 등록하기</h2>
            <div className="rounded-md bg-gray-500/30 px-40 py-[1px]"></div>
            <p className='text-gray-400 text-lg font-bold leading-5'>
              <span className='text-white'>/서버등록</span> 명령어로 실시간 현황을 보고 싶은 서버를 등록 해 주세요, 변동사항이 없으면 서버 정보는 1분마다 갱신돼요.
            </p>
          </div>
          <Image
            className='rounded-lg'
            src='/assets/images/dynamic/2_server_reg.gif'
            alt='server_reg'
            width={400}
            height={340}
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8WA8AAgcBQhiUs9EAAAAASUVORK5CYII='
            placeholder='blur'
          />
        </div>

        <div className='flex space-x-8 items-center'>
          <Image
            className='rounded-lg'
            src='/assets/images/dynamic/3_server_del.gif'
            alt='server_del'
            width={400}
            height={383}
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8WA8AAgcBQhiUs9EAAAAASUVORK5CYII='
            placeholder='blur'
          />
          <div className='space-y-2'>
            <h2 className='text-4xl font-bold'>서버 삭제하기 (선택)</h2>
            <div className="rounded-md bg-gray-500/30 px-40 py-[1px]"></div>
            <p className='text-gray-400 text-lg font-bold leading-5'>
              <span className='text-white'>/서버삭제</span> 명령어로 등록된 서버를 삭제할 수도 있어요, 하야세 봇은 서버를 서버 정보 하단의 영어와 숫자 조합으로 된 문자열로 구분해요.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Quickstart;