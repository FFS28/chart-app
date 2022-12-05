import React from 'react';

const Charbar = ({ real_value, height, year, latest = false }) => {

    const value = parseFloat(real_value) * (real_value.match(/[B]/g) ? 1000 : 1) / 1000 * height * 2;
    
    return (
        <div className={`absolute sm:mb-[${height}px] sm:right-0 sm:bottom-0 right-0 bottom-0`}>
            <div className='relative w-fit sm:rotate-0 rotate-90 origin-bottom-right'>
                <svg className='sm:rotate-0 -rotate-90' height="30" width="61" >
                    <text x="20" y="15" fill="">{real_value}</text>
                </svg>
                <svg width="61" height={value} viewBox={"0 0 61 " + value} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="61" height={value} fill="url(#paint0_radial_415_5632)" />
                    <rect x="0.5" y="0.5" width="60" height={value} stroke="#EAEAEA" strokeOpacity="0.5" />
                    <rect x="59.439" y={value} width="30.439" height={value * 0.1} transform={`rotate(-180 59.439 ${value})`} fill="#F3F3F3" fill-opacity="0.3"/>
                    <rect x="59.439" y={value * 0.8} width="30.439" height={value * 0.05} transform={`rotate(-180 59.439 ${value * 0.8})`} fill="#F3F3F3" fill-opacity="0.3"/>
                    <rect x="59.439" y={value * 0.6} width="30.439" height={value * 0.05} transform={`rotate(-180 59.439 ${value * 0.6})`} fill="#F3F3F3" fill-opacity="0.3"/>
                    <rect x="59.439" y={value * 0.4} width="30.439" height={value * 0.012} transform={`rotate(-180 59.439 ${value * 0.4})`} fill="#F3F3F3" fill-opacity="0.3"/>
                    <rect x="59.439" y={value * 0.2} width="30.439" height={value * 0.15} transform={`rotate(-180 59.439 ${value * 0.2})`} fill="#F3F3F3" fill-opacity="0.3"/>
                    <rect x="59.439" y={value * 0} width="30.439" height={value * 0.2} transform={`rotate(-180 59.439 ${value * 0})`} fill="#F3F3F3" fill-opacity="0.3"/>
                    <defs>
                        <radialGradient id="paint0_radial_415_5632" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(29.9993 -202) rotate(90) scale(275.37 13338.2)">
                            <stop stopColor="#4A36B3" />
                            <stop offset="0.978871" stopColor="#BB58A0" />
                        </radialGradient>
                    </defs>
                </svg>
                {latest && <label className='absolute flex -right-52 top-8'><svg className='mr-4' width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.9625 18.75L60 18.75L60 11.25L14.9625 11.25L14.9625 -3.9373e-06L1.31134e-06 15L14.9625 30L14.9625 18.75Z" fill="url(#paint0_radial_415_5710)" />
                    <path d="M14.9625 18.25L14.4625 18.25L14.4625 18.75L14.4625 28.7907L0.706224 15L14.4625 1.20924L14.4625 11.25L14.4625 11.75L14.9625 11.75L59.5 11.75L59.5 18.25L14.9625 18.25Z" stroke="#EAEAEA" strokeOpacity="0.5" />
                    <defs>
                        <radialGradient id="paint0_radial_415_5710" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 14.6667) rotate(180) scale(60 925.926)">
                            <stop stopColor="#4A36B3" />
                            <stop offset="1" stopColor="#BB58A0" />
                        </radialGradient>
                    </defs>
                </svg>So far this year</label>}
                <svg className='absolute -rotate-90 bottom-0 left-[61px] sm:rotate-0 sm:-bottom-[30px] sm:left-0' height="30" width="61" >
                    <text x="20" y="15" fill="">{year}</text>
                </svg>
            </div>
        </div>
    )
}

function GoogleChart(props) {
    const spacing = 80;
    return (
        <div>
            <div className='p-10 hidden sm:block'>
                <table className='w-[600px]'>
                    <tbody>
                        <tr>
                            <td className='relative w-[150px] align-bottom'><p className='absolute w-full text-right pr-4 -mt-4'>$2.5B</p></td>
                            <td className={`w-full border-b h-[${spacing}px]`} colSpan={5}></td>
                            <td className={`w-full min-w-[50px] border-b`}></td>
                        </tr>
                        <tr>
                            <td className='relative w-[150px] align-bottom'><p className='absolute w-full text-right pr-4 -mt-4'>$2B</p></td>
                            <td className={`w-full border-t border-b h-[${spacing}px]`} colSpan={5}></td>
                            <td className={`w-full min-w-[50px] border-b`}></td>
                        </tr>
                        <tr>
                            <td className='relative w-[150px] align-bottom'><p className='absolute w-full text-right pr-4 -mt-4'>$1.5B</p></td>
                            <td className={`w-full border-t border-b h-[${spacing}px]`} colSpan={5}></td>
                            <td className={`w-full min-w-[50px] border-b`}></td>
                        </tr>
                        <tr>
                            <td className='relative w-[150px] align-bottom'><p className='absolute w-full text-right pr-4 -mt-4'>$1B</p></td>
                            <td className={`w-full border-t border-b h-[${spacing}px]`} colSpan={5}></td>
                            <td className={`w-full min-w-[50px] border-b`}></td>
                        </tr>
                        <tr>
                            <td className='relative w-[150px] align-bottom'><p className='absolute w-full text-right pr-4 -mt-4'>$0.5B</p></td>
                            <td className={`w-full border-t border-b h-[${spacing}px]`} colSpan={5}></td>
                            <td className={`w-full min-w-[50px] border-b`}></td>
                        </tr>
                        <tr>
                            <td className='relative w-[150px] align-bottom'><p className='absolute w-full text-right pr-4 -mt-4'>$0</p></td>
                            <td className={`w-full border-t border-b h-[${spacing}px]`} colSpan={5}></td>
                            <td className={`w-full min-w-[50px] border-b`}></td>
                        </tr>
                        <tr>
                            <td className='relative px-8'></td>
                            <td className='relative text-right'><Charbar real_value={"667m"} height={spacing} year={2019} /></td>
                            <td className='relative text-right'><Charbar real_value={"896m"} height={spacing} year={2020} /></td>
                            <td className='relative text-right'><Charbar real_value={"1.6B"} height={spacing} year={2021} /></td>
                            <td className='relative text-right'><Charbar real_value={"1.9B"} height={spacing} year={2022} latest={true} /></td>
                            <td className={`relative h-[${spacing}px]`}></td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='p-10 block sm:hidden'>
                <table className='w-[500px]'>
                    <tbody>
                        <tr>
                            <td className='w-[10px] h-[40px]'></td>
                            <td className={`w-[${spacing}px]`}><label className='-ml-16 text-left'>$0B</label></td>
                            <td className={`w-[${spacing}px]`}><label className='-ml-16 text-left'>$0.5B</label></td>
                            <td className={`w-[${spacing}px]`}><label className='-ml-16 text-left'>$1B</label></td>
                            <td className={`w-[${spacing}px]`}><label className='-ml-16 text-left'>$1.5B</label></td>
                            <td className={`w-[${spacing}px]`}><label className='-ml-16 text-left'>$2B</label></td>
                            <td className={`w-[${spacing}px]`}><label className='-ml-16 text-left'>$2.5B</label></td>
                            <td className='w-[10px]'></td>
                        </tr>
                        <tr>
                            <td className='h-[122px] relative'>
                                <Charbar real_value={"668m"} height={spacing} year={2019} />
                            </td>
                            <td className={`w-[${spacing}px] border-l`} rowSpan={5}></td>
                            <td className={`border-l`} rowSpan={5}></td>
                            <td className={`border-l`} rowSpan={5}></td>
                            <td className={`border-l`} rowSpan={5}></td>
                            <td className={`border-l`} rowSpan={5}></td>
                            <td className={`border-l`} rowSpan={5}></td>
                            <td className=''></td>
                        </tr>
                        <tr>
                            <td className='h-[122px] relative'>
                                <Charbar real_value={"887m"} height={spacing} year={2020} />
                            </td>
                            <td className=''></td>
                        </tr>
                        <tr>
                            <td className='h-[122px] relative'>
                                <Charbar real_value={"1.6B"} height={spacing} year={2021} />
                            </td>
                            <td className=''></td>
                        </tr>
                        <tr>
                            <td className='h-[122px] relative'>
                                <Charbar real_value={"1.9B"} height={spacing} year={2022} />
                            </td>
                            <td className=''></td>
                        </tr>
                        <tr>
                            <td className='h-[80px] relative'>
                            </td>
                            <td className=''></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GoogleChart;