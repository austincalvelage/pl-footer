import type { NextPage } from 'next';
import Link from 'next/link';

const Footer: NextPage = () => {
  return (
    <footer className="container space-y-8">
      <div className="grid grid-cols-12 gap-6 h-full w-full inset-0 pt-10">
        <div className="bg-white h-6 w-6 rounded-full col-start-1" />
        <ul className="space-y-1 col-start-3 col-end-5 text-sm">
          <li className="text-secondary">Company</li>
          <li className="text-primary">
            <Link href="#">About</Link>
          </li>
          <li className="text-primary">
            <Link href="#">Blog</Link>
          </li>
          <li className="text-primary">
            <Link href="#">Careers</Link>
          </li>
        </ul>
        <ul className="space-y-1 col-start-5 col-end-7 text-sm">
          <li className="text-secondary">Product</li>
          <li className="text-primary">
            <Link href="#">Features</Link>
          </li>
          <li className="text-primary">
            <Link href="#">Principles</Link>
          </li>
          <li className="text-primary">
            <Link href="#">Case studies</Link>
          </li>
          <li className="text-primary">
            <Link href="#">Enterprise</Link>
          </li>
          <li className="text-primary">
            <Link href="#">Pricing</Link>
          </li>
          <li className="text-primary">
            <Link href="#">Changelog</Link>
          </li>
        </ul>
        <ul className="space-y-1 col-start-7 col-end-9 text-sm">
          <li className="text-secondary">Open Source</li>
          <li className="text-primary">
            <Link href="#">Vitess</Link>
          </li>
          <li className="text-primary">
            <Link href="#">Vitess Community</Link>
          </li>
          <li className="text-primary">
            <Link href="#">Creator Fund</Link>
          </li>
          <li className="text-primary">
            <Link href="#">Github</Link>
          </li>
        </ul>
        <ul className="space-y-1 text-primary col-start-9 col-end-11 text-sm">
          <li className="text-secondary">Resources</li>
          <li className="text-primary">
            <Link href="#">Docs</Link>
          </li>
          <li className="text-primary">
            <Link href="#">Support</Link>
          </li>
          <li className="text-primary">
            <Link href="#">Status</Link>
          </li>
          <li className="text-primary">
            <Link href="#">Contact</Link>
          </li>
          <li className="text-primary">
            <Link href="#">Privacy</Link>
          </li>
          <li className="text-primary">
            <Link href="#">Terms</Link>
          </li>
        </ul>
        <ul className="space-y-1 text-primary col-start-11 col-end-13 text-sm">
          <li className="text-secondary">Talk to us</li>
          <li className="text-primary">
            <a href="tel:+14082141997">Call +1 408 214 1997 </a>
          </li>
          <li className="text-primary">
            <Link href="#">Contact Sales</Link>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-12 gap-6 pb-3">
        <p className="text-secondary text-xs col-start-1 col-span-3">
          &copy; 2022 PlanetScale, Inc. All rights reserverd.
        </p>
        <ul className="flex gap-2 col-start-10 col-span-full">
          <li className="h-3 w-3 bg-white rounded-sm"></li>
          <li className="h-3 w-3 bg-white rounded-sm"></li>
          <li className="h-3 w-3 bg-white rounded-sm"></li>
          <li className="h-3 w-3 bg-white rounded-sm"></li>
          <li className="h-3 w-3 bg-white rounded-sm"></li>
          <li className="h-3 w-3 bg-white rounded-sm"></li>
          <li className="h-3 w-3 bg-white rounded-sm"></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
