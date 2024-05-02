import * as React from "react"
import { useGitaStore } from "@/state/useGitaStore";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from "../ui/dropdown-menu";


export default function SelectVerse() {
    const { currentGitaChapter, selectGitaVerse, currentGitaVerse } = useGitaStore()
    const verses = currentGitaChapter.verses.map(verse => verse.verse)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="w-[125px]">
                <button className="h-[var(--h-button)] w-[125px] px-4 rounded-lg flex justify-center gap-2 items-center border">
                    <span>Verse</span>
                    <div className="w-4">{currentGitaVerse.verse}</div>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" forceMount className="w-[125px] rounded-lg" sideOffset={10}>
                <DropdownMenuGroup>
                    {
                        verses.map((verse, index) => (
                            <DropdownMenuItem
                                key={index}
                                onClick={() => selectGitaVerse(verse)}
                            >Verse {verse}</DropdownMenuItem>
                        ))
                    }
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}