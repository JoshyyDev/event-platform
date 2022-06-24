import { DiscordLogo, Lightning } from "phosphor-react";

export function Video() {
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
            </div>

            <div className="p-8 max-w-[1100px] nx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            Why Programming Is Important?
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            This is a code.org video that explains everything we should know and do. I do not own this video. I shared it just to spread the idea for non-profit. Thank you and happy coding.
                        </p>

                        <div className="flex item-center gap-4 mt-6">
                            <img
                            className="h-16 w-16 rounded-full border-2 border-blue-500"
                            src="https://github.com/JoshyyDev.png" 
                            alt="" 
                            />

                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">Josué Cortez</strong>
                                <span className="text-gray-200 text-sm block">Programador</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24} />
                            Comunidade do Discord
                        </a>

                        <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <Lightning size={24} />
                            Acesse o desafio
                        </a>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}