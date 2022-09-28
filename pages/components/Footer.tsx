import type { NextPage } from 'next'


const Footer: NextPage = () => {
    return (
        <footer className='container space-y-8'>
            <div className='grid grid-cols-12 gap-6 h-full w-full inset-0 pt-10'>
            <div className='bg-white h-6 w-6 rounded-full col-start-1' />
                <ul className='space-y-1 col-start-3 col-end-5 text-sm'>
                    <li className='text-secondary'>Company</li>
                    <li className='text-primary'>About</li>
                    <li className='text-primary'>Blog</li>
                    <li className='text-primary'>Careers</li> 
                </ul>
                <ul className='space-y-1 col-start-5 col-end-7 text-sm'>
                    <li className='text-secondary'>Product</li>
                    <li className='text-primary'>Features</li>
                    <li className='text-primary'>Principles</li>
                    <li className='text-primary'>Case studies</li>
                    <li className='text-primary'>Enterprise</li>
                    <li className='text-primary'>Pricing</li>
                    <li className='text-primary'>Changelog</li>
                </ul>
                <ul className='space-y-1 col-start-7 col-end-9 text-sm'>
                    <li className='text-secondary'>Open Source</li>
                    <li className='text-primary'>Vitess</li>
                    <li className='text-primary'>Vitess Community</li>
                    <li className='text-primary'>Creator Fund</li>
                    <li className='text-primary'>Github</li>
                </ul>
                <ul className='space-y-1 text-primary col-start-9 col-end-11 text-sm'>
                    <li className='text-secondary'>Resources</li>
                    <li className='text-primary'>Docs</li>
                    <li className='text-primary'>Support</li>
                    <li className='text-primary'>Status</li>
                    <li className='text-primary'>Contact</li>
                    <li className='text-primary'>Privacy</li>
                    <li className='text-primary'>Terms</li>
                </ul>
                <ul className='space-y-1 text-primary col-start-11 col-end-13 text-sm'>
                    <li className='text-secondary'>Talk to us</li>
                    <li className='text-primary'>Call +1 408 214 1997</li>
                    <li className='text-primary'>Contact Sales</li>
                </ul>
            </div>
            <div className='grid grid-cols-12 gap-6 pb-3'>
                <p className='text-secondary text-xs col-start-1 col-span-3'>&copy; 2022 PlanetScale, Inc. All rights reserverd.</p>
                <ul className='flex gap-2 col-start-10 col-span-full'>
                    <li className='h-3 w-3 bg-white rounded-sm'></li>
                    <li className='h-3 w-3 bg-white rounded-sm'></li>
                    <li className='h-3 w-3 bg-white rounded-sm'></li>
                    <li className='h-3 w-3 bg-white rounded-sm'></li>
                    <li className='h-3 w-3 bg-white rounded-sm'></li>
                    <li className='h-3 w-3 bg-white rounded-sm'></li>
                    <li className='h-3 w-3 bg-white rounded-sm'></li>
                </ul>
            </div>
        </footer>
  )
}

export default Footer
