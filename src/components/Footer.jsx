import { footerLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
        <div className="max-screen-width">
            <div>
                <p className="font-semibold text-gray text-xs">
                    More ways to shop:{' '}
                    <span className="text-blue underlinde"> Find an Apple Store {' '}</span>
                    or {' '}
                    <span className="text-blue underlinde"> other retailer {' '}</span>
                    {' '} near you.
                </p>
                <p className="font-semibold text-gray text-xs">
                    Or call 000400-200-1004
                </p>
                <div className="bg-neutral-700 my-5 h-[1px] w-full"/>
                <div className="flex md:flex-row flex-col md:items-center justify-between">
                <p className="font-semibold text-gray text-xs">Copyright @ 2024 Apple Inc. All rights reserved.</p>
                <div className="flex">
                    {footerLinks.map((link,i) => (
                        <p key={link} className="font-semibold text-gray text-xs">
                            {link}{' '}
                            {i !== footerLinks.length - 1 && (
                                <span className="mx-2"> | </span>
                            )}
                        </p>
                    ))}
                </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer