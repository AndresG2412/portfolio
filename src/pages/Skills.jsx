import html from "../imgs/html.png"
import js from "../imgs/js.png"
import css from "../imgs/css.png"
import react from "../imgs/react.png"
import tailwind from "../imgs/tailwind.jpg"
import python from "../imgs/python.png"

import vue from "../imgs/vue.png"
import laravel from "../imgs/laravel.png"
import java from "../imgs/java.png"
import git from "../imgs/git.png"
import mysql from "../imgs/mysql.png"
import php from "../imgs/php.png"

import Skill from "../components/Skill"

export default function Skills() {
    return(
        <>
            <div className="h-screen mt-24 md:mt-0 grid md:flex md:flex-col justify-center">
                <div className="mt-32 md:mt-0 md:mb-32">
                    <h1 className="text-center text-white text-2xl md:text-4xl">Programación y Herramientas Principales</h1>
                    <div className="md:flex md:justify-center mt-10 grid grid-cols-3 justify-items-center">

                        <Skill img={html} nombre="HTML"></Skill>
                        <Skill img={css} nombre="CSS"></Skill>
                        <Skill img={js} nombre="JavaScript"></Skill>
                        <Skill img={react} nombre="React"></Skill>
                        <Skill img={tailwind} nombre="Tailwind"></Skill>
                        <Skill img={python} nombre="Python"></Skill>

                    </div>
                </div>

                <div className="">
                    <h1 className="text-center text-white text-2xl md:text-4xl">Otras Herramientas en Uso</h1>
                    <div className="md:flex md:justify-center mt-10 grid grid-cols-3 justify-items-center">

                        <Skill img={mysql} nombre="MySQL"></Skill>
                        <Skill img={laravel} nombre="Laravel"></Skill>
                        <Skill img={php} nombre="PHP"></Skill>
                        <Skill img={java} nombre="Java"></Skill>
                        <Skill img={git} nombre="GitHub"></Skill>
                        <Skill img={vue} nombre="Vue"></Skill>

                    </div>
                </div>
            </div>
        </>
    );
}