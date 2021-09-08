import React from 'react'

export const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3  px-20 pt-10 md:justify-items-center py-5 gap-y-10  bg-gray-200 rounded-md ">
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
    )
}
