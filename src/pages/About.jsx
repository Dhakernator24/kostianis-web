import React, { useEffect, useState } from 'react';
import chris_image from '../assets/chris_profile.jpeg'

function About() {

    return (
        <div className='px-10 md:px-20 lg:px-32 pt-[80px] xl:px-48 pb-32 w-screen max-w-screen h-fit bg-black flex flex-col justify-start items-start min-h-[100vh] '>
            <div className='flex flex-col mt-[50px] justify-start items-start gap-3 lg:w-1/2'>
                <h1 className='font-zenKaku text-white text-4xl w-full font-semibold'>Our Story</h1>
                <p className='font-zenKaku text-white h-fit w-full'> Kostianis Productions is a recently founded video production company backed by the expertise of founder and Emmy Award Winning Director of Photography,
                    Chris Kostianis. As a new company, we are bringing Chris’s above-and-beyond mindset to the level of a full service production and post-production company. By constantly questioning, “what’s impossible that we can achieve through our work?,” Kostianis Productions is a company dedicated to making our clients’ visions into extraordinary visual realities.
                </p>
            </div>
            <div className='mt-4 h-1 w-[200px] lg:w-1/2 bg-logo' />
            <div className='flex md:flex-row flex-col gap-5 md:gap-0 w-full mt-16'>
                <div className='flex justify-start lg:justify-center items-center md:w-[40%] w-full'>
                    <img src={chris_image} className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full' alt="" />
                </div>

                <div className='flex flex-col justify-start items-start gap-3 md:w-[60%] w-full'>
                    <h1 className='font-zenKaku text-white text-4xl font-semibold'>About Chris</h1>
                    <p className='font-zenKaku text-white'>
                        With over 30 years of experience, Chris Kostianis, the founder of Kostianis Productions, brings a keen eye for detail and a passion for captivating visuals.
                        With a diverse background spanning narratives, documentaries, commercials, television shows, and promotional videos, Chris offers a fresh and polished perspective to projects.
                    </p>
                    <p className='font-zenKaku text-white'>
                        He has collaborated with numerous notable clients throughout his career, including ESPN, Showtime, ABC, Nickelodeon, CBS, VH1, the New York Mets,the NHL, MSG Network, and BET, among others. The results-driven approach that he brings to each project is client-oriented, as his objective is to help you achieve your goals. Whether delivering a refined look, eye-catching visuals, or evoking energy, Chris and his dynamic lighting and camera movements translate concepts into powerful visual narratives.
                    </p>
                </div>
            </div>


        </div>
    );

}

export default About;