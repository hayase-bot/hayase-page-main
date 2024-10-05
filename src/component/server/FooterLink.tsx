const Links = [
    {
        title: '이용약관 및 정책',
        links: [
            {
                label: '서비스 이용 약관',
                href: '/terms'
            },
            {
                label: '개인정보 처리 방침',
                href: '/privacy'
            },
            {
                label: '환불 정책',
                href: '/refund'
            }
        ]
    },
    {
        title: '지원 및 커뮤니티',
        links: [
            {
                label: '공식 디스코드',
                href: 'https://discord.gg/MwU25zdRFG'
            },
            {
                label: '개발자 이메일',
                href: 'mailto:blackwaterbread@gmail.com'
            }
        ]
    }
]

export interface FooterLinksProps {
    className?: string,
    area: Array<{
        title: string,
        links: Array<{
            label: string,
            href: string
        }>
    }>
}

const style = {
    title: 'select-none text-white opacity-35 font-bold',
    link: 'md:mt-1 md:ml-3 text-white opacity-90 font-bold'
}

export default function FooterLinks() {
    const areas = Links.map(x => (
        <div>
            <p className={style.title}>
                {x.title}
            </p>
            <div>
                {x.links.map(v => {
                    return (
                        <a rel="noreferrer" href={v.href}>
                            <p className={style.link}>{v.label}</p>
                        </a>
                    )
                })}
            </div>
        </div>
    ));

    return (
        <div className='flex flex-row w-full justify-evenly md:justify-start md:space-x-24 md:pl-32 mt-2'>
            {areas}
        </div>
    );
}