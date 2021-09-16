import React from 'react'

export const Footer = () => {
    return (
        <div className="bg-gray-200 rounded-md px-20">
            <div className="grid grid-cols-1 md:grid-cols-3   pt-10 md:justify-items-center py-5 gap-y-10   ">
                <div className="space-y-4 text-xs text-gray-800">
                    <h5 className="font-semibold text-lg">ABOUT</h5>
                    <p>How we work</p>
                    <p>News Room</p>
                    <p>Investors</p>
                    <p>Air BNB</p>
                    <p>Air Luxe</p>
                </div>
                <div className="space-y-4 text-xs text-gray-800">
                    <h5 className="font-semibold text-lg">HOST</h5>
                    <p>TK Javi</p>
                    <p>Presents</p>
                    <p>Zero to Full Stack Hero</p>
                    <p>Hundred of Students</p>
                    <p>Join Now</p>
                </div>
                <div className="space-y-4 text-xs text-gray-800">
                    <h5 className="font-semibold text-lg">Contact</h5>
                    <p>Twitter</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Line</p>
                    <p>WeChat</p>
                </div>
                
            </div>
            <div className="items-center">
                <hr></hr>
                <h6>© 2021 <span className="text-gray-700 text-lg font-semibold">TK. Co, Inc</span>.</h6>

            </div>
        </div>
        
    )
}
