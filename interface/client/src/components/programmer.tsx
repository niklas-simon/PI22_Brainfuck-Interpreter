import { Button } from "@nextui-org/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { Textarea } from "@nextui-org/input";
import { useState } from "react";

const presets = [
    {
        name: "Hello World",
        program: "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++."
    },
    {
        name: "Cat",
        program: ",[.,]"
    },
    {
        name: "Prime Factorization",
        program: ">,----------[-------------------------------------->++++++++++<<[->>>+<<<]>>[->[->+<<<<+>>>]>[-<+>]<<]>[-]<<[-<+>],----------]+<-[+>+<[->>+>+<<<]>>>[-<<<+>>>]>+[[-<+<-<-[->>>>+>+<<<<<]>>>>>[-<<<<<+>>>>>]<[<+>[-]]<[->+>+<<]>>[-<<+>>]<[[-]<-<<[->>>+>+<<<<]>>>>[-<<<<+>>>>]<[<+>[-]]]<]<<[->>>+>+<<<<]>>>>[-<<<<+>>>>]<[<+>[-]]<[->+>+<<]>>[-<<+>>]<[<<[-<<+>>]>>[-]]<]+<<<[->>>>+>+<<<<<]>>>>>[-<<<<<+>>>>>]<[<->[-]]<<[-<<+>>]>[-<+>]<[-<<<[>>+<[-<->>>+<<]>>[-<<+>>]<<<]>>[-<<+>>]<[->+>+<<]>>[-<<+>>]+[>++++++++++[<<[->>>+>+<<<<]>>>>[-<<<<+>>>>]<[<<<->>>[-]]<-]>>>+<<<<-]>>>>[-<<<<+>>>>]<<<<<[[-]>[->++++++++++<]>[-<+>]<<<[->+>>+<<<]>>>[-<<<+>>>]<[>++++++++++[<<[->>>+>+<<<<]>>>>[-<<<<+>>>>]<[<<<->>>[-]]<-]>>>+<<<<-]>>>>[-<<<<+>>>>]<<<<<]<[->+>>+<<<]>>>[-<<<+>>>]<-[+>>>+[[-<<+<-<->[->>>>+>+<<<<<]>>>>>[-<<<<<+>>>>>]<[<+>[-]]<[->+>+<<]>>[-<<+>>]<[[-]<-<<<<[->>>>>+>+<<<<<<]>>>>>>[-<<<<<<+>>>>>>]<[<+>[-]]]<]+<<<[->>>>+>+<<<<<]>>>>>[-<<<<<+>>>>>]<[[-]<->]<[->+>+<<]>>[-<<+>>]<[[-]<<+<[-<+>]>>>]<]<++++++++++++++++++++++++++++++++++++++++++++++++.[-]<[-<+<+>>]<[---------->+<]>[-<+>]<-]<++++++++++++++++++++++++++++++++++++++++++++++++.[-]++++++++++.[-]<<[->>+>+<<<]>>>[-<<<+>>>]>+[[-<+<-<-[->>>>+>+<<<<<]>>>>>[-<<<<<+>>>>>]<[<+>[-]]<[->+>+<<]>>[-<<+>>]<[[-]<-<<[->>>+>+<<<<]>>>>[-<<<<+>>>>]<[<+>[-]]]<]<<[->>>+>+<<<<]>>>>[-<<<<+>>>>]<[<+>[-]]<[->+>+<<]>>[-<<+>>]<[<<[-<<+>>]>>[-]]<]+<<<[->>>>+>+<<<<<]>>>>>[-<<<<<+>>>>>]<[<->[-]]<<[-<<+>>]>[-<+>]<]<<<-]"
    }
]

export default function Programmer() {
    const [program, setProgram] = useState(window.localStorage.getItem("program") || "");

    const writeProgram = () => {
        window.dispatchEvent(new CustomEvent("program", {
            detail: program
        }));
        window.localStorage.setItem("program", program);
    }

    return <div className="flex flex-col gap-4">
        <Textarea label="Program" placeholder=",[.,]" radius="none" className="font-mono"
            value={program} onChange={e => setProgram(e.target.value)}/>
        <div className="flex flex-row gap-4">
            <Button color="primary" variant="light" className="w-min" onClick={writeProgram}>Write</Button>
            <Dropdown>
                <DropdownTrigger>
                    <Button variant="light" color="secondary">
                        Preset
                    </Button>
                </DropdownTrigger>
                <DropdownMenu onAction={key => setProgram(presets[key as number].program)}>
                    {presets.map((p, i) => <DropdownItem key={i}>
                        {p.name}
                    </DropdownItem>)}
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
}