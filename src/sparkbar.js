import React from 'react';

const Charbar = ({ real_value, height, latest = false }) => {

    const value = parseFloat(real_value) * (real_value.match(/[B]/g) ? 1000 : 1) / 1000 * height * 2;
    // console.log((real_value.match(/[B]/g) ? 1000 : 1))
    // const value= 10;
    return (
        <div className={`absolute mb-[${height}px] right-0 bottom-0`}>
            <div className='relative w-fit'>
                <svg height="30" width="61">
                    <text x="0" y="15" fill="">{real_value}</text>
                </svg>
                <svg width="61" height={value} viewBox={"0 0 61 " + value} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="61" height={value} fill="url(#paint0_radial_415_5632)" />
                    <rect x="0.5" y="0.5" width="60" height={value} stroke="#EAEAEA" strokeOpacity="0.5" />
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
            </div>
        </div>
    )
}

function GoogleChart(props) {
    const spacing = 80;
    return (
        <div>
            <div className='p-10'>
                <table className='w-[600px]'>
                    <tbody>
                        <tr>
                            <td className='relative w-[150px] align-bottom'><p className='absolute w-full text-right pr-4 -mt-4'>$2.5B</p></td>
                            <td className={`w-full border-b h-[${spacing}px]`} colSpan={5}></td>
                            <td className={`w-full min-w-[50px] border-b`}></td>
                        </tr>
                        <tr>
                            <td className='relative px-8'></td>
                            <td className='relative text-right'><Charbar real_value={"667m"} height={spacing} /><label className='pr-3'>2019</label></td>
                            <td className='relative text-right'><Charbar real_value={"896m"} height={spacing} /><label className='pr-3'>2020</label></td>
                            <td className='relative text-right'><Charbar real_value={"1.6B"} height={spacing} /><label className='pr-3'>2021</label></td>
                            <td className='relative text-right'><Charbar real_value={"1.9B"} height={spacing} latest={true} /><label className='pr-3'>2022</label></td>
                            <td className={`relative h-[${spacing}px]`}></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <div className='p-10 block sm:hidden'>
                <table className='w-full'>
                    <tbody>
                        <tr>
                            <td className='w-4 h-[80px]'></td>
                            <td className={`h-full border-l w-[${spacing}px]`}><label>$0B</label></td>
                            <td className={`h-full border-l w-[${spacing}px]`}><label>$0B</label></td>
                            <td className={`h-full border-l w-[${spacing}px]`}><label>$0B</label></td>
                            <td className={`h-full border-l w-[${spacing}px]`}><label>$0B</label></td>
                            <td className={`h-full border-l w-[${spacing}px]`}><label>$0B</label></td>
                            <td className={`h-full border-l w-[${spacing}px]`}><label>$0B</label></td>
                            <td className='w-4'></td>
                        </tr>
                        <tr>
                            <td className='w-4 h-[80px]'></td>
                            <td className={`h-full border-l w-[${spacing}px]`} rowSpan={5}></td>
                            <td className={`h-full border-l w-[${spacing}px]`} rowSpan={5}></td>
                            <td className={`h-full border-l w-[${spacing}px]`} rowSpan={5}></td>
                            <td className={`h-full border-l w-[${spacing}px]`} rowSpan={5}></td>
                            <td className={`h-full border-l w-[${spacing}px]`} rowSpan={5}></td>
                            <td className={`h-full border-l w-[${spacing}px]`} rowSpan={5}></td>
                            <td className='w-4'></td>
                        </tr>
                    </tbody>
                </table>
            </div> */}
        </div>
    );
}

export default GoogleChart;